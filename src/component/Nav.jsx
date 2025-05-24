import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";

function Nav({ place }) {
  let barcontent = [
    {
      title: "GAMES",
      path: "/games"
    },
    {
      title: "ABOUT US",
      path: "/aboutus"
    },
    {
      title: "SEARSH JOB",
      path: "/searshjob"
    },
    {
      title: "SUPPORT HOME",
      path: "/support"
    }
  ]

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="Activision" className="h-6" />
          </Link>

        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm">
          {barcontent.map((item) => (
            <div className="relative group">
              <Link to={item.path}><button className="hover:text-gray-300 flex items-center gap-1">
                {item.title}
              </button></Link>

            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold py-1 px-4 rounded-full">
            SIGN UP
          </button>
          <button className="text-sm hover:text-gray-300">LOGIN</button>
        </div>

        <div className="block md:hidden">
          <IoIosMenu />
        </div>

      </div>
    </nav>
  );
}

export default Nav;

