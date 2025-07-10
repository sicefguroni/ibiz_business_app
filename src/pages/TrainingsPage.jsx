import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import NotificationPanel from "../components/NotificationPanel";
import PageBody from "../components/PageBodies";
import DTIPic from "../assets/page-cards/dti-pic.jpg";
import { LoanCard } from "../components/PageCards";
import { LibraryBig } from "lucide-react";

const TrainingsPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab="/trainings" />
            <div className="flex justify-between h-full px-16 pt-24">
                <UserProfile />
                <PageBody title="Courses & Trainings" home={false} icon={LibraryBig} guideName="Training" grid={2} description="Practical tips and resources for every stage of your entrepreneurial journey.">
                    <LoanCard image={DTIPic} title="How to Start a Business" agency="Department of Trade and Industry" description="Practical tips and resources for every stage of your entrepreneurial journey." link="https://www.google.com" />
                    <LoanCard image={DTIPic} title="How to Start a Business" agency="Department of Trade and Industry" description="Practical tips and resources for every stage of your entrepreneurial journey." link="https://www.google.com" />
                </PageBody>
                <NotificationPanel home={false} />
            </div>
        </div>
    );
}

export default TrainingsPage;