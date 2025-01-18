import { Outlet } from "react-router-dom";
import DashboardRoute from "../../../Component/DashboardRoute";
import Header from "../../../Component/Header";


const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex gap-16">
                <div className="w-1/6">
                    <DashboardRoute></DashboardRoute>
                </div>
                <div className="w-10/12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;