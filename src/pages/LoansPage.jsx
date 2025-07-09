import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";

const LoansPage = () => {
    return (
        <div className="normal-bg h-screen">
            <Navbar tab='/loans' />
            <div className="flex justify-between h-full px-16 pt-24">
                <UserProfile />
                <NotificationPanel home={false} />
            </div>
        </div>
    );
}

export default LoansPage;