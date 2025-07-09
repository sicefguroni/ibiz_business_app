import UserPic from '../assets/profile/profile-pic.png';
import UserBg from '../assets/profile/profile-bg.png';
import Logo from '../assets/web-logo.svg?react';
import InboxIcon from '../assets/profile/inbox.svg?react';
import PeopleIcon from '../assets/profile/people.svg?react';
import BusinessIcon from '../assets/profile/business.svg?react';
import CalendarIcon from '../assets/profile/calendar.svg?react';
import BookmarkIcon from '../assets/profile/bookmark.svg?react';

const UserProfile = () => {
    return (
        <div className="flex flex-col w-[270px] h-fit justify-start bg-primary-white rounded-xl py-6 px-4 border border-stroke-200 relative">
            <div className="flex flex-col justify-start pl-2 mb-4">
                <img src={UserBg} alt="User Background" className="absolute top-0 left-0 w-full object-cover rounded-t-xl cursor-pointer" />
                <img src={UserPic} alt="User Profile" className="w-[64px] h-[64px] rounded-full outline outline-primary-white z-10 cursor-pointer" />
                <h1 className="text-primary-brown font-[Istok Web] font-medium text-[16px] mt-2 cursor-pointer">Mercedes Macapagal</h1>
                <div className='flex items-center gap-1'>
                    <Logo className="w-4 h-5" />
                    <p className="text-primary-brown font-[Istok Web] font text-[14px] text-wrap cursor-pointer">Owner of Classic Clothing Store</p>
                </div>
            </div>

            <div className='flex flex-col justify-start gap-1 py-2 border-y border-stroke-200'>
                <div className='flex items-center gap-2 hover:bg-tint-pink/40 rounded-lg px-2 py-1 cursor-pointer'>
                    <InboxIcon className='w-5 h-6' />
                    <p className='text-primary-brown font-[Istok Web] text-[16px]'>Inbox</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-tint-pink/40 rounded-lg px-2 py-1 cursor-pointer'>
                    <PeopleIcon className='w-5 h-6' />
                    <p className='text-primary-brown font-[Istok Web] text-[16px]'>People</p>
                </div>  
            </div>

            <div className='flex flex-col justify-start gap-1 mt-2'>
                <div className='flex items-center gap-2 hover:bg-tint-pink/40 rounded-lg px-2 py-1 cursor-pointer'>
                    <BusinessIcon className='w-5 h-5' />
                    <p className='text-primary-brown font-[Istok Web] text-[16px]'>Businesses</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-tint-pink/40 rounded-lg px-2 py-1 cursor-pointer'>
                    <BookmarkIcon className='w-5 h-6' />
                    <p className='text-primary-brown font-[Istok Web] text-[16px]'>Bookmarks</p>
                </div>
                <div className='flex items-center gap-2 hover:bg-tint-pink/40 rounded-lg px-2 py-1 cursor-pointer'>
                    <CalendarIcon className='w-5 h-6' />
                    <p className='text-primary-brown font-[Istok Web] text-[16px]'>Calendar</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;