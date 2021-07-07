import { useSession } from 'next-auth/client';
import { 
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import { 
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon, } from '@heroicons/react/solid';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [session, loading] = useSession(); // this here is used to bring the facebook images that
  // you have access to, both the import and the const one.
  return ( 
  <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
  </div>
  );
}

export default Sidebar;
