import WebLogo from '../assets/web-logo.svg';
import { HomeIcon as HomeIconOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid';
import { BookOpenIcon as GuidesIconOutline } from '@heroicons/react/24/outline';
import { BookOpenIcon as GuidesIconSolid } from '@heroicons/react/24/solid';
import { LightBulbIcon as TrainingsIconOutline } from '@heroicons/react/24/outline';
import { LightBulbIcon as TrainingsIconSolid } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon as SearchIconOutline } from '@heroicons/react/24/outline';
import HandshakeOutline from '@mui/icons-material/HandshakeOutlined';
import Handshake from '@mui/icons-material/Handshake';
import GroupsOutline from '@mui/icons-material/GroupsOutlined';
import Groups from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isNotMainPage = false, tab = '/home', isCommunity = false }) => {
    const [activeTab, setActiveTab] = useState(tab);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setActiveTab(path);
        navigate(path);
    }

    return (
        <div className={`${isCommunity ? 'bg-background-normal' : ''} flex items-center justify-center py-2 fixed top-0 left-0 right-0 z-50`}>
            <div className='flex items-center gap-2 fixed left-16 top-3 cursor-pointer'>
                <img src={WebLogo} alt="Web Logo" className="w-10 h-10" />
                {isCommunity ? <h1></h1> : <h1 className='font-[Rowdies] text-2xl text-primary-pink'>iBiz</h1>}
                {isCommunity && <div className='flex item-center gap-1 w-[215px] bg-primary-white rounded-full border text-[14px] border-stroke-300 px-4 py-2'> 
                    <SearchIconOutline className='w-4 h-5 opacity-40 items-center' /> <p className='text-primary-black/60'>Search</p></div>}
            </div>


            {!isNotMainPage && (    
                <ul className="bg-primary-white border border-stroke-300 self-center flex items-center gap-1 px-1 py-1 rounded-full">
                    <li onClick={() => handleNavigate('/home')} className={`group hover:bg-stroke-200/40 hover:text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/home' ? 'bg-stroke-200/30 text-primary-pink' : 'text-primary-black/60'} cursor-pointer`}>
                        {activeTab === '/home' ? <HomeIconSolid className={`${activeTab === '/home' ? 'opacity-100' : 'opacity-60'} w-6 h-6 group-hover:opacity-100 transition-all duration-300`} /> : <HomeIconOutline className={`${activeTab === '/home' ? 'opacity-100' : 'opacity-60'} w-6 h-6 group-hover:opacity-100 transition-all duration-300`} />} Home</li>
                    <li onClick={() => handleNavigate('/guides')} className={`group hover:bg-stroke-200/40 hover:text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/guides' ? 'bg-stroke-200/30 text-primary-pink' : 'text-primary-black/60'} cursor-pointer`}>
                        {activeTab === '/guides' ? <GuidesIconSolid className={`${activeTab === '/guides' ? 'opacity-100' : 'opacity-60'} w-6 h-6 group-hover:opacity-100 transition-all duration-300`} /> : <GuidesIconOutline className={`${activeTab === '/guides' ? 'opacity-100' : 'opacity-60'} w-6 h-6 group-hover:opacity-100 transition-all duration-300`} />} Guides</li>
                    <li onClick={() => handleNavigate('/trainings')} className={`group hover:bg-stroke-200/40 hover:text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/trainings' ? 'bg-stroke-200/30 text-primary-pink' : 'text-primary-black/60'} cursor-pointer`}>
                        {activeTab === '/trainings' ? <TrainingsIconSolid className={`${activeTab === '/trainings' ? 'opacity-100' : 'opacity-60'} w-6 h-5 group-hover:opacity-100 transition-all duration-300`} /> : <TrainingsIconOutline className={`${activeTab === '/trainings' ? 'opacity-100' : 'opacity-60'} w-6 h-5 group-hover:opacity-100 transition-all duration-300`} />} Trainings</li>
                    <li onClick={() => handleNavigate('/loans')} className={`group hover:bg-stroke-200/40 hover:text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/loans' ? 'bg-stroke-200/30 text-primary-pink' : 'text-primary-black/60'} cursor-pointer`}>
                        {activeTab === '/loans' ? <Handshake className={`${activeTab === '/loans' ? 'opacity-100' : 'opacity-60'}  w-6 h-6 group-hover:opacity-100 transition-all duration-300`} /> : <HandshakeOutline className={`${activeTab === '/loans' ? 'opacity-100' : 'opacity-60'}  w-6 h-6 group-hover:opacity-100 transition-all duration-300`} />} Loans</li>
                    <li onClick={() => handleNavigate('/community')} className={`group hover:bg-stroke-200/40 hover:text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/community' ? 'bg-stroke-200/30 text-primary-pink' : 'text-primary-black/60'} cursor-pointer`}>
                        {activeTab === '/community' ? <Groups className={`w-6 h-6 ${activeTab === '/community' ? 'opacity-100' : 'opacity-60'} group-hover:opacity-100 transition-all duration-300`} /> : <GroupsOutline className={`w-6 h-6 ${activeTab === '/community' ? 'opacity-100' : 'opacity-60'} group-hover:opacity-100 transition-all duration-300`} />} Community</li>
                </ul>
            )}
        </div>
    )
}

export default Navbar;