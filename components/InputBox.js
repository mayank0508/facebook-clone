import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db, storage } from '../firebase';
import { useRef, useState } from 'react';
import firebase from 'firebase';

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = e => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection('post')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(doc => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`post/${doc.id}`)
            .putString(imageToPost, 'data_url');
          removeImage();
          uploadTask.on(
            'state_change',
            null,
            error => console.error(error),
            () => {
              //when the upload completes
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then(url => {
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = '';
  };

  const addImageToPost = e => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
 
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 item-center">
        <Image /* this is the code via which we can see our image on the page */
          className="rounded-full"
          src={session.user.image}
          width="50"
          height="50"
          layout="fixed"
          alt="me"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Hey! 👋 wassup ${session.user.name} !!`}
          />
          <button hidden type="submit" onClick={sendPost}>
            {' '}
            {/* this code here allows us to submit the input in this input place, with the use of the enter key > */}
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-cemter">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        {' '}
        {/* here we wrote the code that was responside fir the first section of the fedd where we upload pics and videos */}
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />{' '}
          {/* this is the way we add the small pic in the right side of the post */}
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
