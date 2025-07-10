import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";
import PageBody from "../components/PageBodies";
import { LoanCard } from "../components/PageCards";
import FilipinoPic from "../assets/page-bodies/filipina-landbank.png";
import { Landmark } from "lucide-react";

const LoansPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab='/loans' />
            <div className="flex justify-between h-full px-16 pt-20">
                <UserProfile />
                <PageBody title="Loans" home={false} icon={Landmark} guideName="Loan" grid={2} description="Find the right loan programs to support your entrepreneurial goals.">
                    <LoanCard image={FilipinoPic} title="Emerging Filipino Lending Program" agency="LandBank of the Philippines" description="Female-Initiated Livelihood and Investment Projects via INclusive Financing to Accelerate Entrepreneurial Growth Lending" link="https://www.google.com" />
                </PageBody>
                <NotificationPanel home={false} />
            </div>
        </div>
    );
}

export default LoansPage;