import React from 'react'

let supportCards = [
  { title: "Call of Duty: Black Ops 6", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg" },
  { title: "Account & Security", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg"},
  { title: "Call of Duty: Warzone", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg" },
  { title: "Call of Duty: Mobile", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg" },
  { title: "Tony Hawk's Pro Skater 3 + 4", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png" },
  { title: "Call of Duty: Modern Warfare III", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png" },
  { title: "Call of Duty: Modern Warfare II", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg" },
  { title: "Call of Duty: Modern Warfare", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg" },
  { title: "Call of Duty: Black Ops Cold War", img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg" },
];

function SupportPg() {
    return (

        <div className="bg-[#1e1e1e] text-white font-sans min-h-screen">
            <div className="relative h-[60vh] w-full">
                <img
                    src="https://www.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-start justify-center px-10 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Call of Duty: Black Ops & Warzone S03 Reloaded</h1>
                    <p className="mt-4">Check out what's new in Season 03 Reloaded</p>
                    <button className="mt-4 border px-4 py-2 rounded hover:bg-white hover:text-black">
                        Browse the Support Page
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mx-8">
                {supportCards.map((card) => (
                    <div key={card.title} className=" rounded overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-md text-[#8f8c89] font-bold uppercase">{card.title}</h3>
                        </div>
                        <img src={card.img} alt={card.title} className="w-full object-cover" />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SupportPg