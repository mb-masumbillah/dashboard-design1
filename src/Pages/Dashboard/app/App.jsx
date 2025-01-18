import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AppCard from "./appCard";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);



const App = () => {

    // Doughnut Chart Data
    const doughnutData = {
        labels: ["Asia", "America", "Europe", "Other"],
        datasets: [
            {
                data: [45, 30, 15, 10],
                backgroundColor: ["#4CAF50", "#FFC107", "#FF5722", "#2196F3"],
                hoverOffset: 4,
            },
        ],
    };

    // Line Chart Data
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Asia",
                data: [50, 60, 70, 120, 90, 80, 100],
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.1)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "America",
                data: [30, 50, 80, 100, 70, 60, 110],
                borderColor: "#FFC107",
                backgroundColor: "rgba(255, 193, 7, 0.1)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    // Chart Options
    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "#f1f5f9",
                },
            },
        },
    };


    const doughnutOptions = {
        cutout: "90%", plugins: {
            tooltip: {
                enabled: true,
            },
        },
    };

    const plugins = [
        {
            id: "centerText",
            beforeDraw: (chart) => {
                const { width, height } = chart;
                const ctx = chart.ctx;
                ctx.restore();
    
                // Proper font size and alignment adjustments
                const fontSize = (height / 8).toFixed(2); // Adjust font size
                ctx.font = `${fontSize}px sans-serif`;
                ctx.textBaseline = "middle";
                ctx.textAlign = "center"; // Ensures proper horizontal centering
                ctx.fillStyle = "#000"; // Text color
    
                const text = "188,245";
                const textX = width / 2; // Center horizontally
                const textY = height / 2 + height * 0.11; // Slightly below the vertical center
                ctx.fillText(text, textX, textY); // Draw the text
                ctx.save();
            },
        },
    ];

    const slides = [
        {
            id: 1,
            title: "Exploring the Hidden Gems",
            description: "Discover the majestic beauty of design...",
            bg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1",
            tag: "FEATURED APP",
            tagColor: "text-green-400",
        },
        {
            id: 2,
            title: "Design Beyond Imagination",
            description: "Unleash your creativity...",
            bg: "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9-1.jpg",
            tag: "LATEST FEATURE",
            tagColor: "text-blue-400",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="pt-4">
            <div className="flex items-center gap-10">
                <div className="w-[50rem] h-[17rem] bg-green-100 rounded-2xl px-8 flex justify-between items-center">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold w-64 text-green-900">Welcome back 👋 Jaydon Frankie</h3>
                        <p className="text-lg w-[28rem]">If you are going to use a passage of Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum.</p>
                        <button className="bg-green-500 text-white font-semibold px-3 rounded-lg py-2">Go Now</button>
                    </div>
                    <figure className="">
                        <img src="analysis.png" alt="" className="w-72" />
                    </figure>
                </div>
                <figure className="w-[25rem] h-[17rem] bg-green-100 rounded-2xl">
                    <div className="relative w-[25rem] h-[17rem] mx-auto overflow-hidden rounded-2xl">
                        {/* Carousel Container */}
                        <div
                            className="flex transition-transform duration-[1000ms] ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {slides.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="flex-shrink-0 w-full h-full rounded-lg shadow-lg relative"
                                >
                                    <img
                                        src={slide.bg}
                                        alt={slide.title}
                                        className="w-[50rem] h-[17rem] rounded-lg"
                                    />
                                    {/* Text Content */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 p-4 rounded-lg">
                                        <p className={`text-sm font-bold ${slide.tagColor}`}>{slide.tag}</p>
                                        <h2 className="text-xl font-semibold text-white">{slide.title}</h2>
                                        <p className="text-sm text-gray-300">{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-2 right-12 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                        >
                            <IoIosArrowBack className="text-xl" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                        >
                            <IoIosArrowForward className="text-xl" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-2 -top-56 left-3 flex justify-center items-center space-x-2">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                </figure>
            </div>
            <div className="pt-3">
                <AppCard></AppCard>
            </div>
            <div className="p-6 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Doughnut Chart */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Current Download</h2>
                        </div>
                        <div className="h-64 flex justify-center items-center">
                            <Doughnut data={doughnutData} options={doughnutOptions} plugins={plugins} />
                        </div>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Area Installed</h2>
                            <p className="text-sm text-gray-500">(+43% than last year)</p>
                        </div>
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;