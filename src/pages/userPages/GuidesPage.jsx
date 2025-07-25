import Navbar from "../../components/userPages/Navbar";
import UserProfile from "../../components/userPages/UserProfile";
import NotificationPanel from "../../components/userPages/NotificationPanel";
import PageBody from "../../components/userPages/PageBodies";
import { BookText } from "lucide-react";
import { GuideCard } from "../../components/userPages/PageCards";
import DTILogo from "../../assets/page-cards/dti-logo.png";

const GuidesPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab='/guides' />
            <div className="flex justify-between h-full px-16 pt-20">
                <UserProfile />
                <PageBody title="Guides" home={false} guideName="Startup" icon={BookText} description="Practical tips and resources for every stage of your entrepreneurial journey.">
                    <GuideCard image={DTILogo} title="How to Start a Business" agency="Department of Trade and Industry" description="Practical tips and resources for every stage of your entrepreneurial journey." link="https://www.google.com" />
                </PageBody>
                <NotificationPanel home={false} />
            </div>
        </div>
    );
}

export default GuidesPage;