import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div>
      {/* <h1>Header</h1>  {/* here we are declaring the header as you can see in diffrent diffrent divs !!!} */}
      {/* Left */}{' '}
      {/* her we will be having everthing in the rihgt side of the page */}
      <div className="flex item-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-centre rounded-full bg-gray-100 p-2">
          {' '}                 {/* this is the code that designs the circle part of the facebook "search facebook" using the tailwind css */}
          <SearchIcon className="h-6 color text-gray-600" />{' '}
          {/* here i have imported the searchIcon form the @heroIcon websit which i have imported further up the code lines */}
          <input className="ml-2 bg-transparent item-centre outline-none" type="text" placeholder="Search Facebook" /> {/* here i have agian ised the inline class to make adjustments in CSS */}
        </div>
      </div>
      {/* Centre */}
      <div className='flex justify-center flex-grow'>  {/* this class name is used here to make the text grow in the center of the header */}
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} /> 
        </div>
      </div>
      {/* Right */}
    </div>
  );
}

export default Header;
