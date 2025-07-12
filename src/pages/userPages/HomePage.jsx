import Navbar from "../../components/userPages/Navbar";
import UserProfile from "../../components/userPages/UserProfile";
import NotificationPanel from "../../components/userPages/NotificationPanel";
import PageBody from "../../components/userPages/PageBodies";
import { BusinessCard } from "../../components/userPages/PageCards";
import RestaurantLogo from "../../assets/page-cards/restaurant-logo.png";
import FeasibilityReport from "../../pages/feasibility_page/FeasibilityPage";

const HomePage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar />
            <div className="flex justify-between h-full px-16 pt-20">
                <UserProfile />
                <PageBody title="Your Business Plans" home={true} grid={true}>
                    <BusinessCard image={RestaurantLogo} feasibilityReport={<FeasibilityReport />} title="Restaurant" location="123 Main St, Anytown, USA" description="Don't want you, need you
                        Yeah, I need you to fill me up
                        마시고 마셔 봐도
                        성에 차지 않아
                        Got a feeling that, oh, yeah (Yeah)
                        You could be everything that
                        That I need, taste so sweet (Yeah, yeah)
                        Every sip makes me want more, yeah
                        Lookin' like snacks 'cause you got it like that (Woo)
                        Take a big bite, want another bite, yeah
                        너의 모든 걸 난 원해, 원해, 원해
                        너 말곤 모두 편해, 편해, 편해
                        When you're in my arms, I hold you so tight (So tight)
                        Can't let go, no, no, not tonight" PDF="/Sample.pdf" />
                    <BusinessCard image={RestaurantLogo} feasibilityReport={<FeasibilityReport />} title="Restaurant" location="123 Main St, Anytown, USA" description="This is a description of the business" pdf="/Sample.pdf" />
                </PageBody>
                <NotificationPanel home={true} />
            </div>
        </div>
    );
}

export default HomePage;