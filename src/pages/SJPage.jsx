import React from "react";

let jobRoles = [
    "Art, Animation & Sound",
    "Engineering",
    "Production",
    "Corporate Functions",
    "Design",
    "Marketing & Sales",
    "Quality Assurance (QA)",
    "Central Tech",
    "Mobile",
];

let exploreItems = [
    { title: "Our Locations", img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg" },
    { title: "DE&I", img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg" },
    { title: "Early Careers", img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg" },
    { title: "Mission & Talent Brand", img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png" },
];

let studioLogos = [
    "treyarch",
    "infinityward",
    "highmoon",
    "sledgehammer",
    "raven",
    "shanghai",
    "demonware",
    "solidstate",
    "digitallegends",
    "centraltech",
    "beenox",
];
let Studios = [
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
    "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png"

];

let jobApply = [
    {
        title: "Senior Gameplay Engineer - High Moon Studios",
        des: "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game..."
    },
    {
        title: "Lead Analytics Engineer",
        des: "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi..."
    },
    {
        title: "Expert Animation Engineer - Infinity Ward",
        des: "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th..."
    },
    {
        title: "Senior AI Animator - Infinity Ward",
        des: "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio..."
    },
    {
        title: "Level Designer",
        des: "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to..."
    },

]

function SJPage() {
    return (
        <div className="bg-[#121212] text-white font-sans">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
                    autoPlay=""
                    loop=""
                    muted=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <button className="bg-[#2b2b2b] border-2 border-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
                        SEARCH JOBS
                    </button>
                </div>
            </div>

            {/* Career Start Section */}
            <div className="text-center py-10">
                <h2 className="text-lg uppercase">Start Your Game Changing Career</h2>
                <div className="mt-6  mx-5 grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {jobRoles.map((role) => (
                        <button
                            className="border px-4 py-2 rounded hover:bg-white hover:text-black"
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </div>

            {/* Explore Section */}
            <div className=" py-10">
                <h3 className="text-center text-xl font-bold mb-6">Explore Our World</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {exploreItems.map((item) => (
                        <div
                            className="bg-black rounded overflow-hidden w-60"
                        >
                            <img src={item.img} className="w-full object-cover" />
                            <div className="p-4 text-center">
                                <h4 className="font-semibold mb-2">{item.title}</h4>
                                <button className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Game Covers */}
            <div className="bg-black py-10 px-4">
                <div className="w-f">
                    <video src="https://www.activision.com/cdn/videos/game-ap-look.mp4" videosize="contained" autoplay="" muted="" loop="" />
                </div>
            </div>

            {/* Studios Section */}
            <div className=" py-10 text-center">
                <h3 className="text-xl font-bold mb-6">Our Studios</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {Studios.map((studio) => (
                        <img
                            src={studio}
                            className="h-10 object-contain"
                        />
                    ))}
                </div>
            </div>

            {/* Job Listings */}
            <div className="bg-black py-10 px-10">
                <h3 className="text-start text-xl font-bold mb-6">Be the First to Apply</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {jobApply.map((itme) => (
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-black mb-2">
                                {itme.title}
                            </h4>
                            <p className="text-sm mb-4 text-black">
                                {itme.des}
                            </p>
                            <button className="bg-[#2b2b2b] text-white px-4 py-2 rounded hover:bg-green-800">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SJPage;
