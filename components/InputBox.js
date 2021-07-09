import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

function InputBox() {
  const [session] = useSession();

  const sendPost = e => {
    e.preventDefault();
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
            placeholder={`Hey! 👋 wassup ${session.user.name} !!`}
          />
          <button hidden type="submit" onClick={sendPost}>
            {' '}
            {/* this code here allows us to submit the input in this input place, with the use of the enter key > */}
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        {' '}
        {/* here we wrote the code that was responside fir the first section of the fedd where we upload pics and videos */}
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
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
