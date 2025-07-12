import { PlusIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import React from "react";
import ProfilePic from "../../assets/profile/profile-pic.png";
import ProfilePost from "../../assets/page-bodies/pic-post.png";
import DiscussionIcon from "../../assets/page-bodies/discussion-icon.png";
import QuestionIcon from "../../assets/page-bodies/question-icon.png";
import SurveyIcon from "../../assets/page-bodies/survey-icon.png";
import Reactions from "../../assets/page-bodies/reactions.png";
import { ThumbsUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";

export const CommunityPageBody = () => {
    return (
        <div className="flex flex-col gap-4 h-fit w-[700px] ">
            <div className=" bg-primary-white rounded-xl px-4 pt-3 pb-2 border border-stroke-300 h-fit">
                <div className="flex items-center gap-2">
                    <img src={ProfilePic} alt="Profile" className="w-10 h-10 rounded-full" />
                    <div className="bg-stroke-100 rounded-full px-4 py-2 w-full text-primary-black/60 font-[Istok Web] text-[14px]">
                        Share your thoughts, ideas, and experiences
                    </div>
                </div>
                <div className="flex items-center gap-8 mt-2 border-t border-stroke-200 pt-1">
                    <button className="flex items-center gap-1 font-[Istok Web] text-[14px]  hover:bg-secondary-black/5 transition-all duration-300 p-2 rounded-lg ">
                        <img src={DiscussionIcon} alt="Discussion" className="w-4 h-4" />
                        Discussion
                    </button>
                    <button className="flex items-center gap-1 font-[Istok Web] text-[14px]  hover:bg-secondary-black/5 transition-all duration-300 p-2 rounded-lg ">
                        <img src={QuestionIcon} alt="Question" className="w-4 h-4" />
                        Question
                    </button>
                    <button className="flex items-center gap-1 font-[Istok Web]  text-[14px]  hover:bg-secondary-black/5 transition-all duration-300 p-2 rounded-lg ">
                        <img src={SurveyIcon} alt="Survey" className="w-4 h-4" />
                        Survey
                    </button>
                </div>
            </div>
            <div className=" bg-primary-white rounded-xl px-4 pt-3 pb-2 border border-stroke-300 h-full">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img src={ProfilePic} alt="Profile" className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-primary-black font-[Istok Web] font-medium text-[14px]">Mercedes Macapagal</h1>
                            <p className="text-primary-black/80 font-[Istok Web] text-[12px]">Business Owner</p>
                        </div>
                    </div>
                    <p className="text-primary-black font-[Istok Web] text-[14px]">
                        Discover Pinterest's best ideas and inspiration for Nature theme background. Get inspired and try out new things.
                    </p>
                    <img src={ProfilePost} alt="Community" className="w-full h-full object-cover rounded-lg" />
                    <img src={Reactions} alt="Community" className="h-[16px] w-[40px]" />
                    <div className="flex items-center justify-evenly border-t border-stroke-200 pt-1">
                        <button className="flex w-full justify-center items-center gap-1 font-[Istok Web] text-[14px] text-secondary-black hover:bg-secondary-black/5 hover:text-primary-black/90 transition-all duration-300 p-2 rounded-lg ">
                            <ThumbsUp className="w-4 h-4" />
                            Like
                        </button>
                        <button className="flex w-full justify-center items-center gap-1 font-[Istok Web] text-[14px] text-secondary-black  hover:bg-secondary-black/5  hover:text-primary-black/90 transition-all duration-300 p-2 rounded-lg ">
                            <MessageCircle className="w-4 h-4" />
                            Comment
                        </button>
                        <button className="flex w-full justify-center items-center gap-1 font-[Istok Web] text-[14px] text-secondary-black  hover:bg-secondary-black/5  hover:text-primary-black/90 transition-all duration-300 p-2 rounded-lg ">
                            <Share className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const PageBody = ({ title, description, children, home = false, guideName, icon, grid = 1}) => {
    const [isHome, setIsHome] = useState(home);

    return (
        <div className="flex flex-col gap-4 w-[750px] ">
            {isHome ? <h1 className="text-primary-black font-[Istok Web] font-medium text-[24px]">Good afternoon</h1> 
            : <div className="bg-primary-rose text-primary-white font-[Istok Web] flex justify-between gap-2 p-4 pr-6 rounded-xl">
                <div className="flex flex-col overflow-hidden">
                    <h1 className="text-[18px] font-medium">Welcome to {guideName} Guides</h1>
                    <p className="text-primary-white text-[14px]">{description}</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden">
                    {icon && React.createElement(icon, { className: "w-[72px] h-[72px] text-primary-white" })}
                </div>
            </div>}
            <div className=" bg-primary-white rounded-xl p-4 border border-stroke-300 h-full">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-primary-black font-[Istok Web] font-medium text-[18px]">{title}</h1>
                    { isHome ? <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 font-[Istok Web] font-medium text-[12px] bg-primary-pink rounded-md px-4 py-2 text-primary-white  hover:bg-primary-pink/90 transition-all duration-300 ">
                            New
                            <PlusIcon className="w-4 h-4 text-primary-white" />
                        </button>
                        <button className="flex items-center gap-1 font-[Istok Web] font-medium text-[12px] border border-primary-black/50 rounded-md px-2 py-2 text-primary-black/80  hover:bg-secondary-black/5 transition-all duration-300 ">
                            Filter
                            <SlidersHorizontal className="w-4 h-4 text-primary-black" />
                        </button>
                    </div> : <a href="/" className="font-[Istok Web] text-[12px] text-primary-black/80 hover:text-primary-black transition-all duration-300">See All {title}</a> }
                    
                </div>

                <div className={`w-full grid ${grid === 1 ? "grid-cols-1" : grid === 2 ? "grid-cols-2" : "grid-cols-3"} gap-4`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageBody;