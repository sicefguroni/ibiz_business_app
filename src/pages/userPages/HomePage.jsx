import Navbar from "../../components/userPages/Navbar";
import UserProfile from "../../components/userPages/UserProfile";
import NotificationPanel from "../../components/userPages/NotificationPanel";
import PageBody from "../../components/userPages/PageBodies";
import { BusinessCard } from "../../components/userPages/PageCards";
import RestaurantLogo from "../../assets/page-cards/restaurant-logo.png";
import FeasibilityReport from "../../pages/feasibility_page/FeasibilityPage";
import { useLocation } from "react-router-dom";
import Feasibility from "../../components/Feasibility/Feasibility";

const HomePage = () => {
    const location = useLocation();
    const data = location.state.feasibilityReport;
    return (
        <div className="normal-bg min-h-screen">
            <Navbar />
            <div className="flex justify-between h-full px-16 pt-20">
                <UserProfile />
                <PageBody title="Your Business Plans" home={true} grid={true}>
                    <BusinessCard image={RestaurantLogo} feasibilityReport={<Feasibility ForDisplay={true} result={data}/>} title={data.businessName} location={data.location} description={data.businessDescription} PDF="/Sample.pdf" />
                    <BusinessCard image={RestaurantLogo} feasibilityReport={<FeasibilityReport />} title="Restaurant" location="123 Main St, Anytown, USA" description="This is a description of the business" pdf="/Sample.pdf" />
                </PageBody>
                <NotificationPanel home={true} />
            </div>
        </div>
    );
}

export default HomePage;