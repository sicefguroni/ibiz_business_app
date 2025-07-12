import Navbar from "../../components/userPages/Navbar";
import UserProfile from "../../components/userPages/UserProfile";
import NotificationPanel from "../../components/userPages/NotificationPanel";
import { CommunityPageBody } from "../../components/userPages/PageBodies";

const CommunityPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab='/community' isCommunity={true} />
            <div className="flex justify-center h-full px-16 pt-20 pb-16">
                {/* Fixed UserProfile */}
                <div className="fixed left-16 top-20">
                    <UserProfile />
                </div>
                
                {/* Scrollable CommunityPageBody with margins for fixed panels */}
                <div className="ml-[270px] mr-[270px]">
                    <CommunityPageBody />
                </div>
                
                {/* Fixed NotificationPanel */}
                <div className="fixed right-16 top-20">
                    <NotificationPanel home={false} community={true} />
                </div>
            </div>
        </div>
    );
}

export default CommunityPage;