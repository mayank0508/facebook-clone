import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Mayank Kumar',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jp`g',
    profiles:
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg'
  }
  //   {
  //     name: 'React',
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jp`g',
  //     profiles: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
  //   },
  //   {
  //     name: 'Tailwind',
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
  //     profiles: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
  //   },
  //   {
  //     name: 'Next.js',
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
  //     profiles: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
  //   },
  //   {
  //     name: 'NextAuth',
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
  //     profiles: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
  //   }
];

function Stories() {
  /* here we will be making a stories card with the use of tailwind css */
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
