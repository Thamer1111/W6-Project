import React from 'react'

export default function AboutPg() {
    let LEADERSHIPTEAM = [
        {
            name: "Rob Kostich",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg"

        },
        {
            name: "Josh Taub",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg"
        },
        {
            name: "Suzie Carr",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg"
        },
        {
            name: "Terri Durham",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg"
        },
        {
            name: "David Stohl",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg"
        },
        {
            name: "Pat Kelly",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg"
        },
        {
            name: "Tyler Bahl",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg"
        },
        {
            name: "Natasha Tatarchuk",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg"
        },
        {
            name: "Matt Cox",
            imge: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg"
        }
    ]
    let games = ["https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
        "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
        "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
        "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
        "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
        "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
        "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
        "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg"]
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

    ]

    return (

        <div className="bg-black text-white font-sans">
            <section className="w-full relative">
                <img
                    src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/atvi-about-hero.jpg"

                    className="w-full h-auto"
                />
            </section>

            <section className="text-center py-10 px-4 max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-4">OUR MISSION</h2>
                <p className="text-sm text-gray-300">
                    At Activision, we strive to make the most fun, thrilling, and engaging entertainment experiences for our players. We're committed to creating an inclusive environment and to pushing the world forward through games. From the biggest AAA titles to indie-style projects, we are passionate about game development and committed to making gaming better for everyone.
                </p>
            </section>

            <section className="text-center py-10 px-4 max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-4">ACTIVATE YOUR FUTURE</h2>
                <p className="text-sm text-gray-300">
                    We strive to offer rewarding career paths and development through the following pillars:
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    Careers - Elevating future game leaders<br />
                    People - Ensuring our teams grow and thrive<br />
                    DE&I - Prioritizing diversity, equity, and inclusion
                </p>
            </section>

            <section className="py-10 flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold mb-4">Our Values</h2>
                <img
                    src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
                    alt="Our Values"
                    className="w-[600px]"
                />
            </section>

            <section className="text-center py-10 px-4">
                <h2 className="text-xl font-bold mb-6">OUR LEADERSHIP TEAM</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {LEADERSHIPTEAM.map((itme) => (
                        <div className="text-lg">
                            <img
                                src={itme.imge}
                                className="rounded-full mx-auto mb-2 w-32 h-32 object-cover"
                            />
                            <p className="font-semibold">{itme.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center py-10 px-4">
                <h2 className="text-xl font-bold mb-6">OUR GAMES</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {games.map((game, i) => (
                        <div >
                            <img
                                src={game}
                                className="rounded-lg w-full"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center py-10 px-4">
                <h2 className="text-xl font-bold mb-6">OUR STUDIOS</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {Studios.map((item) => (
                        <img
                            src={item}
                            className="h-10 object-contain"
                        />
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 h-[30vh] text-white bg-[#0e0e0e]">
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
            </section>
        </div>
    )
}
