


const NavBar = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      };
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo / App Name */}
            <div className="flex-shrink-0 text-2xl font-bold text-red-600 dark:text-red-400 tracking-wide">
              🚗 DoorDash Spot
            </div>
            <div>
            <button
              onClick={handleScrollToBottom}
              className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-xl shadow-sm transition"
            >
              ⬇️ To Bottom
            </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
