import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";
import PageBody from "../components/PageBodies";
import { BusinessCard } from "../components/PageCards";
import RestaurantLogo from "../assets/page-cards/restaurant-logo.png";

const HomePage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar />
            <div className="flex justify-between h-full px-16 pt-24">
                <UserProfile />
                <PageBody title="Your Business Plans" home={true} grid={true}>
                    <BusinessCard image={RestaurantLogo} title="Restaurant" location="123 Main St, Anytown, USA" />
                    <BusinessCard image={RestaurantLogo} title="Restaurant" location="123 Main St, Anytown, USA" />
                </PageBody>
                <NotificationPanel home={true} />
            </div>
        </div>
    );
}

export default HomePage;