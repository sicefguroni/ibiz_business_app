import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";
import { CommunityPageBody } from "../components/PageBodies";

const CommunityPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab='/community' />
            <div className="flex justify-between h-full px-16 pt-24 pb-16">
                <UserProfile />
                <CommunityPageBody />
                <NotificationPanel home={false} community={true} />
            </div>
        </div>
    );
}

export default CommunityPage;