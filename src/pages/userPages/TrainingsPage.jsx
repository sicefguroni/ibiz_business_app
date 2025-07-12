import Navbar from "../../components/userPages/Navbar";
import UserProfile from "../../components/userPages/UserProfile";
import NotificationPanel from "../../components/userPages/NotificationPanel";
import PageBody from "../../components/userPages/PageBodies";
import DTIPic from "../../assets/page-cards/dti-pic.jpg";
import { TrainingCard } from "../../components/userPages/PageCards";
import { LibraryBig } from "lucide-react";

const TrainingsPage = () => {
    return (
        <div className="normal-bg min-h-screen">
            <Navbar tab="/trainings" />
            <div className="flex justify-between h-full px-16 pt-20">
                <UserProfile />
                <PageBody title="Courses & Trainings" home={false} icon={LibraryBig} guideName="Training" grid={2} description="Learn from industry experts and gain practical knowledge for real-world success.">
                    <TrainingCard image={DTIPic} title="How to Start a Business" agency="Department of Trade and Industry" description="Practical tips and resources for every stage of your entrepreneurial journey." link="https://www.google.com" />
                    <TrainingCard image={DTIPic} title="How to Start a Business" agency="Department of Trade and Industry" description="Practical tips and resources for every stage of your entrepreneurial journey." link="https://www.google.com" />
                </PageBody>
                <NotificationPanel home={false} />
            </div>
        </div>
    );
}

export default TrainingsPage;