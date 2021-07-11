function Post({ name, message, email, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
              <p>name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
