import React from 'react'

const articles = [
    {
        date: 'May 20, 2025',
        title: "Stitch Returns in Season 04",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    },
    {
        date: 'May 15, 2025',
        title: "Support C.O.D.E. Military Appreciation Month",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    },
    {
        date: 'MAY 09, 2025',
        title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
        image: "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    },
    {
        date: 'MAY 07, 2025',
        title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    },
    {
        date: 'MAY 01, 2025',
        title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    },
    {
        date: 'APR 29, 2025',
        title: "Black Ops 6 Season 03 Reloaded: All the Details",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    },
];

export default function HomePg() {
    return (
        <>
            <section className="relative h-screen w-full text-white overflow-hidden">

                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/50 z-10" />

                <div className="relative z-20 flex flex-col items-start justify-center h-full text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        CALL OF DUTY<br />
                        <span className="text-white">BLACK OPS <span className="text-orange-500">6</span></span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-medium">
                        Forced to go rogue. Hunted from Within.<br />
                        This is Black Ops 6.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-600">
                            PLAY WITH GAME PASS
                        </button>
                        <button className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full border-2 border-white">
                            VISIT SITE
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                    <button className="text-white text-2xl font-bold">&larr;</button>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-white' : 'bg-gray-400'}`} />
                        ))}
                    </div>
                    <button className="text-white text-2xl font-bold">&rarr;</button>
                </div>

                <img
                    src="https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png"
                    alt="Mature 17+"
                    className="absolute bottom-4 right-4 w-20 md:w-24 z-30"
                />
            </section>
            <section className="bg-[#0e0e0e] text-white py-12 px-4">
                <h2 className="text-center text-2xl font-semibold mb-8">LATEST NEWS & ARTICLES</h2>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {["ALL NEWS", "ACTIVISION", "CALL OF DUTY", "TONY HAWK", "CRASH BANDICOOT"].map((tab, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 text-sm font-semibold border-b-2 ${i === 0 ? "border-white text-white" : "border-transparent text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {articles.map((item, index) => (
                        <div key={index} className="bg-black rounded overflow-hidden shadow-md hover:scale-[1.01] transition">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                                <h3 className="text-base font-semibold mb-4">{item.title}</h3>
                                <button className="text-xs font-semibold text-white underline hover:text-gray-300">READ MORE ▸</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="px-6 py-2 border border-white text-sm rounded-full hover:bg-white hover:text-black transition">
                        VIEW ALL
                    </button>
                </div>
            </section>
            
    <div className="grid grid-cols-1 h-[60vh] text-white bg-[#0e0e0e]">
      
      <div className="relative flex items-center justify-start">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg"
          className="absolute right-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 p-6 max-w-sm mx-5">
          <h2 className="font-bold text-lg mb-2">WE’RE HERE TO HELP!</h2>
          <p className="text-sm mb-4">
            Get answers to frequently asked questions, check server status, and
            engage with a support expert
          </p>
          <button className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
            VISIT SUPPORT
          </button>
        </div>
      </div>

      <div className="relative flex justify-between ">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
          alt="Careers Background"
          className="absolute inset-0 right-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative p-6 h-full w-screen flex justify-between mx-6">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">HAVE FUN</span>
            </h2>
            <p className="text-sm mb-4">Learn More About Job Opportunities</p>
            <button className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
              JOIN US
            </button>
          </div>
          <div>
            <h3 className="font-bold mb-2">OUR TEAMS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <ul className="space-y-1">
                <li>GAME DESIGN</li>
                <li>ART & ANIMATION</li>
                <li>BRAND MANAGEMENT</li>
                <li>PRODUCTION</li>
              </ul>
              <ul className="space-y-1">
                <li>QUALITY ASSURANCE</li>
                <li>CUSTOMER SUPPORT</li>
                <li>STUDIO OPERATIONS</li>
                <li>PROGRAMMING</li>
              </ul>
              <ul className="space-y-1 hidden md:block">
                <li>FINANCE & ACCOUNTING</li>
                <li>HUMAN RESOURCES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
