import { DownloadIcon } from 'lucide-react';
import AddIcon from '../../assets/page-cards/add-icon.svg?react';
import { useState } from 'react';

export const BusinessCard = ({ image, title, location, description, feasibilityReport,  PDF }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('feasibility');

    const BusinessModal = () => {
        return (
            <div onClick={() => setIsOpen(false)} class='h-full w-screen flex items-center justify-center bg-black/50 fixed inset-0 z-50'>
                <div onClick={(e) => e.stopPropagation()} className='flex bg-primary-white rounded-xl w-[900px] h-[600px] shadow-xl p-4 overflow-hidden'>
                    <div className='flex flex-col justify-between w-2/5 h-full '>
                        <div className='mr-8'>
                            <h1 className='text-primary-black font-[Istok Web] text-[18px] font-medium mb-4'>Business Details</h1>
                            <div className='flex flex-col items-center'>
                                <img src={image} alt="Business Logo" className='w-[80px] h-[80px] rounded-full' />
                                <h1 className='text-primary-black font-[Istok Web] text-[18px] '>{title}</h1>
                                <p className='text-primary-black font-[Istok Web] text-[14px]'>📍{location}</p>
                            </div>
                            <p className='text-primary-black font-[Istok Web] text-[14px] mt-4 border-t border-stroke-200 py-4'>{description}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={() => setIsOpen(false)} className='bg-primary-white hover:bg-stroke-200/80 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50 flex-shrink-0'>
                                Close
                            </button>
                            <button onClick={() => setIsOpen(false)} className='flex items-center gap-2 bg-secondary-brown hover:bg-secondary-brown/70 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md border border-primary-black/50 px-8 py-2 flex-shrink-0'>
                                Download PDF<DownloadIcon className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col w-3/5 h-full'>
                        <div className='flex justify-evenly mb-2 gap-1 border-b border-stroke-200'>
                            <button onClick={() => setSelectedTab('feasibility')} className={`py-2 hover:bg-secondary-brown/70 w-full transition-all duration-300 text-primary-black font-[Istok Web] text-[14px] rounded-t-md ${selectedTab === 'feasibility' ? 'bg-secondary-brown/70 font-medium' : ''}`}>
                                Feasibility Report
                            </button>
                            <button onClick={() => setSelectedTab('businessPlan')} className={`py-2 hover:bg-secondary-brown/70  w-full transition-all duration-300 text-primary-black font-[Istok Web] text-[14px] rounded-t-md ${selectedTab === 'businessPlan' ? 'bg-secondary-brown/70 font-medium' : ''}`}>
                                Business Plan
                            </button>
                        </div>
                        <div className='flex-1'>
                            {selectedTab === 'feasibility' ? feasibilityReport : <iframe src={PDF} className='w-full h-full' />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-between h-fit bg-primary-white rounded-xl hover:shadow-md transition-all duration-300 ease-in-out shadow-black/20 border border-stroke-200 overflow-hidden">
            {isOpen && <BusinessModal />}
            <div className="flex items-center justify-center py-4 overflow-hidden">
                <img src={image} alt="Restaurant Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex items-end justify-between bg-secondary-brown px-4 py-2 rounded-b-xl">
                <div className="overflow-hidden">
                    <h1 className="text-primary-brown font-[Istok Web] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{title}</h1>
                    <p className="text-primary-black/80 font-[Istok Web] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">📍{location}</p>
                </div>  
                <button onClick={() => setIsOpen(!isOpen)} className="bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[12px] rounded-md px-4 py-2 border border-primary-black/50 flex-shrink-0">
                    Open
                </button>
            </div>
        </div>
    );
}

export const GuideCard = ({ image, title, agency, description, link }) => {
    return (
        <div className="flex h-fit w-fit bg-secondary-blue/70 rounded-xl hover:shadow-md transition-all duration-300 ease-in-out shadow-black/20 border border-stroke-200">
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
                <p className="text-primary-black font-[Istok Web] text-[14px] line-clamp-2">
                    {description}
                </p>
            </div>
            
            <div className="flex items-center px-4 gap-2">
                <button className="flex items-center gap-2 bg-primary-rose hover:bg-primary-rose/90 transition-all duration-300 text-primary-white font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2">
                    Download <DownloadIcon className='w-4 h-4' /> 
                </button>
                <button onClick={() => window.open(link, '_blank')} className="flex gap-1 w-fit bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-brown font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50">
                    <p className="text-primary-black">See</p>
                    <p className="text-primary-black">More</p>
                </button>
            </div>
        </div>
    );
}

export const TrainingCard = ({ image, title, agency, description, link }) => {
    return (
        <div className="flex flex-col h-fit w-full bg-secondary-orange/90 rounded-xl hover:shadow-md transition-all duration-300 ease-in-out shadow-black/20 border border-stroke-200 overflow-hidden">
            <div className="rounded-t-xl overflow-hidden">
                <img src={image} alt="DTI Logo" className='w-full h-40 object-cover' />
            </div>
            <div className="flex flex-col px-4 py-4 gap-2">
                <div className="flex items-center gap-2">
                    <div>
                        <h1 className="text-primary-black font-[Istok Web] text-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{title}</h1>
                        <p className="text-primary-black/80 font-[Istok Web] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">{agency}</p>
                    </div>
                </div>
                <p className="text-primary-black font-[Istok Web] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {description}
                </p>
            </div>

            <div className="flex justify-start px-4 py-2">
                <button className="flex gap-1 bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50">
                    <a href={link} target="_blank" rel="noopener noreferrer">See More</a>
                </button>
            </div>
        </div>
    );
}

export const LoanCard = ({ image, title, agency, description, link }) => {
    return (
        <div className="flex flex-col h-fit w-full bg-primary-pink/10 rounded-xl hover:shadow-md transition-all duration-300 ease-in-out shadow-black/20 border border-stroke-200 overflow-hidden">
            <div className="rounded-t-xl overflow-hidden">
                <img src={image} alt="DTI Logo" className='w-full h-40 object-cover' />
            </div>
            <div className="flex flex-col px-4 py-4 gap-2">
                <div className="flex items-center gap-2">
                    <div>
                        <h1 className="text-primary-black font-[Istok Web] text-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{title}</h1>
                        <p className="text-primary-black/80 font-[Istok Web] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">{agency}</p>
                    </div>
                </div>
                <p className="text-primary-black font-[Istok Web] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {description}
                </p>
            </div>

            <div className="flex justify-start px-4 py-2">
                <button className="flex gap-1 bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 text-primary-black font-[Istok Web] font-medium text-[14px] rounded-md px-4 py-2 border border-primary-black/50">
                    <a href={link} target="_blank" rel="noopener noreferrer">See More</a>
                </button>
            </div>
        </div>
    );
}

export const NotificationCard = ({ image, title, description, link, community = false }) => {
    const [isCommunity, setIsCommunity] = useState(community);

    return (
        <div className="flex flex-col justify-between h-fit w-full bg-secondary-blue/40 rounded-xl hover:shadow-md transition-all duration-300 ease-in-out  px-4 py-2 gap-4 border border-stroke-200">
            <div className="flex items-center gap-1">
                <img src={image} alt="DTI Logo" className='w-[40px] h-[40px]' />
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary-black font-[Istok Web] text-[14px]/[14px] font-medium">{title}</h1>
                    <p className="text-primary-black/80 font-[Istok Web] text-[12px]/[12px]">{description}</p>
                </div>
            </div>
            { isCommunity ? <button className="flex justify-center font-[Istok Web] font-medium text-[12px] border border-primary-black/50 rounded-md px-2 py-1 text-primary-black/80 bg-primary-white  hover:bg-stroke-100/80 transition-all duration-300 ">
                <a href={link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1'>Follow <AddIcon className='w-4 h-4 text-primary-black' /></a> 
            </button> : <button className="font-[Istok Web] font-medium text-[12px] border border-primary-black/50 rounded-md px-2 py-1 text-primary-black/80 bg-primary-white hover:bg-stroke-100/80 transition-all duration-300 ">
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