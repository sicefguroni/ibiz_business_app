import WebLogo from '../assets/web-logo.svg';
import HomeIcon from '../assets/navbar/home-icon.svg?react';
import GuidesIcon from '../assets/navbar/guide-icon.svg?react';
import TrainingsIcon from '../assets/navbar/learn-icon.svg?react';
import LoansIcon from '../assets/navbar/loan-icon.svg?react';
import CommunityIcon from '../assets/navbar/people-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isLandingPage = false, tab = '/home' }) => {
    const [activeTab, setActiveTab] = useState(tab);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setActiveTab(path);
        navigate(path);
    }

    return (
        <div className='flex items-center justify-center py-4 fixed top-0 left-0 right-0 z-50'>
            <div className='flex items-center gap-2 fixed left-16 top-6 cursor-pointer'>
                <img src={WebLogo} alt="Web Logo" className="w-10 h-10" />
                <h1 className='font-[Rowdies] text-2xl text-primary-pink'>iBiz</h1>
            </div>

            {!isLandingPage && (    
                <ul className="bg-primary-white border border-stroke-200 self-center flex items-center gap-2 px-1 py-1 rounded-full">
                    <li onClick={() => handleNavigate('/home')} className={`hover:bg-tint-pink/40 text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/home' ? 'bg-tint-pink/40' : ''} cursor-pointer`}><HomeIcon className={`${activeTab === '/home' ? 'opacity-100' : 'opacity-90'} w-6 h-6`} /> Home</li>
                    <li onClick={() => handleNavigate('/guides')} className={`hover:bg-tint-pink/40 text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/guides' ? 'bg-tint-pink/40' : ''} cursor-pointer`}><GuidesIcon className={`${activeTab === '/guides' ? 'opacity-100' : 'opacity-80'}  w-6 h-6`} /> Guides</li>
                    <li onClick={() => handleNavigate('/trainings')} className={`hover:bg-tint-pink/40 text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/trainings' ? 'bg-tint-pink/40' : ''} cursor-pointer`}><TrainingsIcon className={`${activeTab === '/trainings' ? 'opacity-100' : 'opacity-80'}  w-6 h-6`} /> Trainings</li>
                    <li onClick={() => handleNavigate('/loans')} className={`hover:bg-tint-pink/40 text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/loans' ? 'bg-tint-pink/40' : ''} cursor-pointer`}><LoansIcon className={`${activeTab === '/loans' ? 'opacity-100' : 'opacity-80'}  w-6 h-6`} /> Loans</li>
                    <li onClick={() => handleNavigate('/community')} className={`hover:bg-tint-pink/40 text-primary-pink transition-all duration-300 font-[Istok Web] flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === '/community' ? 'bg-tint-pink/40' : ''} cursor-pointer`}><CommunityIcon className={`${activeTab === '/community' ? 'opacity-100' : 'opacity-80'}  w-6 h-6`} /> Community</li>
                </ul>
            )}
        </div>
    )
}

export default Navbar;