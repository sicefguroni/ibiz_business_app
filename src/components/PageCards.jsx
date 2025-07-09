import RestaurantLogo from '../assets/page-cards/restaurant-logo.png';
import DTILogo from '../assets/page-cards/dti-logo.png';
import DownloadIcon from '../assets/page-cards/download-icon.svg?react';
import DTIPic from '../assets/page-cards/dti-pic.jpg';
import AddIcon from '../assets/page-cards/add-icon.svg?react';
import { useState } from 'react';

export const BusinessCard = ({ image, title, location }) => {
    return (
        <div className="flex flex-col justify-between h-fit w-[280px] bg-primary-white rounded-xl border border-stroke-200">
            <div className="flex items-center justify-center py-4">
                <img src={image} alt="Restaurant Logo" />
            </div>
            <div className="flex items-end justify-between bg-secondary-brown px-4 py-2 rounded-b-xl">
                <div>
                    <h1 className="text-primary-brown font-[Istok Web] font-medium">{title}</h1>
                    <p className="text-primary-black/80 font-[Istok Web] text-[12px]">📍{location}</p>
                </div>
                <button className="bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-brown font-[Istok Web] font-medium text-[12px] rounded-md px-4 py-2 border border-primary-black/50">
                    Open
                </button>
            </div>
        </div>
    );
}

export const GuideCard = ({ image, title, agency, description, link }) => {
    return (
        <div className="flex h-fit w-fit bg-primary-white rounded-xl border border-stroke-200">
            <div className="flex flex-col p-4 gap-2">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={image} alt="DTI Logo" className='w-[56px] h-[56px]' />
                    </div>
                    <div>
                        <h1 className="text-primary-black font-[Istok Web] text-[18px] font-medium">{title}</h1>
                        <p className="text-primary-black/80 font-[Istok Web] text-[12px]">{agency}</p>
                    </div>
                </div>
                <p className="text-primary-black font-[Istok Web] text-[16px]">
                {description}
                </p>
            </div>
            
            <div className="flex items-center px-4 gap-2">
                <button className="flex items-center gap-2 bg-primary-rose hover:bg-primary-rose/90 transition-all duration-300 text-primary-white font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2">
                    Download <DownloadIcon className='w-4 h-4' /> 
                </button>
                <button onClick={() => window.open(link, '_blank')} className="flex gap-1 w-fit bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-brown font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50">
                    <p className="text-primary-brown">See</p>
                    <p className="text-primary-brown">More</p>
                </button>
            </div>
        </div>
    );
}

export const LoanCard = ({ image, title, agency, description, link }) => {
    return (
        <div className="flex flex-col h-fit w-[300px] bg-primary-white rounded-xl border border-stroke-200">
            <div className="rounded-t-xl overflow-hidden">
                <img src={image} alt="DTI Logo" className='w-full h-40 object-cover' />
            </div>
            <div className="flex flex-col px-4 py-4 gap-2">
                <div className="flex items-center gap-2">
                    <div>
                        <h1 className="text-primary-black font-[Istok Web] text-[18px] font-medium">{title}</h1>
                        <p className="text-primary-black/80 font-[Istok Web] text-[12px]">{agency}</p>
                    </div>
                </div>
                <p className="text-primary-black font-[Istok Web] text-[14px] overflow-hidden">
                    {description}
                </p>
            </div>

            <div className="flex justify-start px-4 py-2">
                <button className="flex gap-1 bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-brown font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50">
                    <a href={link} target="_blank" rel="noopener noreferrer">See More</a>
                </button>
            </div>
        </div>
    );
}

export const NotificationCard = ({ image, title, description, link, community = false }) => {
    const [isCommunity, setIsCommunity] = useState(community);

    return (
        <div className="flex flex-col justify-between h-fit w-full bg-primary-white rounded-xl px-4 py-2 gap-4 border border-stroke-200">
            <div className="flex items-center gap-1">
                <img src={image} alt="DTI Logo" className='w-[40px] h-[40px]' />
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary-black font-[Istok Web] text-[14px]/[14px] font-medium">{title}</h1>
                    <p className="text-primary-black/80 font-[Istok Web] text-[12px]/[12px]">{description}</p>
                </div>
            </div>
            { isCommunity ? <button className="flex justify-center font-[Istok Web] font-medium text-[12px] border border-primary-black/50 rounded-md px-2 py-1 text-primary-black/80   hover:bg-secondary-black/5 transition-all duration-300 ">
                <a href={link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1'>Follow <AddIcon className='w-4 h-4 text-primary-black' /></a> 
            </button> : <button className="font-[Istok Web] font-medium text-[12px] border border-primary-black/50 rounded-md px-2 py-1 text-primary-black/80  hover:bg-secondary-black/5 transition-all duration-300 ">
                <a href={link} target="_blank" rel="noopener noreferrer">See More</a>
            </button> }
        </div>
    );
}



const PageCards = ({ children }) => {
    return (
        <div className="flex gap-4">            
            {children}
        </div>
    );
}

export default PageCards;