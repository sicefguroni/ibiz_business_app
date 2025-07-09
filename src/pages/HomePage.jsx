import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";

const HomePage = () => {
    return (
        <div className="normal-bg h-screen">
            <Navbar />
            <div className="flex justify-between h-full px-16 pt-24">
                <UserProfile />
                <NotificationPanel home={true} />
            </div>
        </div>
    );
}

export default HomePage;