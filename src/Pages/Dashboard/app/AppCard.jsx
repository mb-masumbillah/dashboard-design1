import { FaArrowDownWideShort, FaArrowUpWideShort } from "react-icons/fa6";

const AppCard = () => {
    const data = [
        {
            id: 1,
            title: "Total Active Users",
            value: "18,765",
            percentage: "+2.6%",
            trend: "up",
            chartColor: "bg-green-400",
            img: "c1.png"
        },
        {
            id: 2,
            title: "Total Installed",
            value: "4,876",
            percentage: "+0.2%",
            trend: "up",
            chartColor: "bg-blue-400",
            img: "c2.png"
        },
        {
            id: 3,
            title: "Total Downloads",
            value: "678",
            percentage: "-0.1%",
            trend: "down",
            chartColor: "bg-yellow-400",
            img: "c3.png"
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
                >
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                        <div className="flex items-center mt-2">
                            <span
                                className={`text-lg font-medium flex items-center gap-2 ${item.trend === "up" ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {item.trend === "up" ? <FaArrowUpWideShort /> : <FaArrowDownWideShort />}
                                {item.percentage}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
                    </div>
                    <div
                        className={`w-64 flex items-center justify-end   `}
                    >
                        {/* Placeholder for chart or icon */}
                        <span className="text-white font-bold">
                            <img src={item.img} alt="" />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppCard;