import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingImage from "../assets/landing/landing-image.png";
import Dot from "../assets/landing/dot.svg?react";
import PlanIcon from "../assets/landing/plan-icon.svg?react";

const LandingPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen landing-bg">
            <Navbar isLandingPage={true} />
            <div className="flex items-center justify-start h-full pl-40">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[72px]/[72px] font-[Inria Sans] font-medium text-primary-brown">Turn Your <span className="text-primary-orange">Idea</span><br/> Into a <span className="text-primary-pink">Journey</span></h1>
                        <p className="text-[24px]/[32px] font-[Istok Web] text-primary-orange">
                            Start your business with a step-by-step guide<br/> tailored to your goals.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center gap-2 font-[Istok Web] font-medium text-[16px] bg-secondary-orange hover:bg-secondary-orange/70 transition-all duration-300 text-primary-orange rounded-full px-4 py-2"><Dot className="w-3 h-3 text-primary-orange" /> Feasibility Reports</div>
                            <div className="flex items-center justify-center gap-2 font-[Istok Web] font-medium text-[16px] bg-tint-pink hover:bg-tint-pink/70 transition-all duration-300 text-primary-pink rounded-full px-4 py-2"><Dot className="w-3 h-3 text-primary-pink" /> Business Plans</div>
                            <div className="flex items-center justify-center gap-2 font-[Istok Web] font-medium text-[16px] bg-secondary-red hover:bg-secondary-red/70 transition-all duration-300 text-primary-red rounded-full px-4 py-2"><Dot className="w-3 h-3 text-primary-red" /> Professional Guides</div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/home')} className="bg-primary-pink text-white font-[Istok Web] font-medium text-[20px] rounded-lg hover:bg-primary-pink/90 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 px-5 py-3 w-fit flex items-center gap-2 mt-16">
                        <PlanIcon className="w-6 h-6" /> Start Planning
                    </button>
                </div>  
                
                <div className="fixed bottom-0 right-24">
                    <img src={LandingImage} alt="Landing Image" className="h-[600px]" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

