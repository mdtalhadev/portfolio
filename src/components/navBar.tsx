import Link from "next/link";

const AppBar = () => (

    <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between">
            <div>
                <a href="#" className="text-xl md:text-2xl lg:text-2xl xl:text-2xl  font-bold">🚀 My Quickly Portfolio 🎨</a>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:text-gray-300">🏠 Home</Link></li>
                    <li><Link href="/about" className="hover:text-gray-300">🤷‍♂️ About</Link></li>
                    <li><Link href="/projects" className="hover:text-gray-300">💡 Projects</Link></li>
                </ul>
            </div>
            <div>
                <button
  className="rounded-sm border border-solid border-gray-600 py-2 px-4 text-sm font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-300 flex items-center gap-2"
>
  <span className="hidden md:flex lg:flex xl:flex">Resume</span>
  <svg
    className="w-[30px] h-[30px] text-gray-800 "
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
    />
  </svg>
</button>

            </div>
        </div>

    </nav>
)

export default AppBar;
