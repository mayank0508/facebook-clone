import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/outline';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      {/* Left */}
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          width={40}
          height={40}
          layout="fixed"
        />
        <div>
          <input type="text" placeholder="Search Facebook" />
          <searchIcon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
      {/* Centre */}
      {/* Right */}
    </div>
  );
}

export default Header;
