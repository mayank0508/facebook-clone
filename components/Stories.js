import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Messi',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Messi_vs_Nigeria1.jpg/1280px-Messi_vs_Nigeria1.jpg'
  },
  {
    name: 'Tesla',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/800px-Teslathinker.jpg',
    profile: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG'
  },
  {
    name: 'Kohli',
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Shri_Virat_Kohli_for_Cricket%2C_in_a_glittering_ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_September_25%2C_2018_%28cropped%29.JPG',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  },
  {
    name: 'Linus',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Linus_Torvalds.jpeg'
  },
  {
    name: 'Roy Keane',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Roy_Keane_cropped.jpg',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Roy_keane_2014.jpg'
  }
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
