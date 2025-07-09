import { NotificationCard } from "./PageCards";
import DTIPic from '../assets/page-cards/dti-logo.png';
import { useState } from "react";

const NotificationPanel = ({ home = false, community = false }) => {
    const [isHome, setIsHome] = useState(home);
    
    return (
        <div className="w-[270px] h-[500px] bg-primary-white flex flex-col gap-2 p-4 border border-stroke-300 rounded-xl">
            <h1 className="text-primary-black font-[Istok Web] font-medium text-[16px] mb-1">{isHome ? "Recent Notifications" : "Nearing Schedules"}</h1>
            <NotificationCard image={DTIPic} title="Handle Business Online" description="Social Media Marketing" link="/" community={community} />
            <NotificationCard image={DTIPic} title="Handle Business Online" description="Social Media Marketing" link="/" community={community} />
        </div>  
    )
}

export default NotificationPanel;
