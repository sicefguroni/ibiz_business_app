import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";

const CommunityPage = () => {
    return (
        <div className="normal-bg h-screen">
            <Navbar tab='/community' />
            <div className="flex justify-between h-full px-16 pt-24">
                <UserProfile />
                <NotificationPanel home={false} community={true} />
            </div>
        </div>
    );
}

export default CommunityPage;