


const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* App Name */}
                <div className="text-lg font-semibold text-red-600 dark:text-red-400">
                    🚗 Door Dash Spot
                </div>
               
                {/* Copyright */}
                <div className="text-xs text-red-500 dark:text-red-500">
                    © {new Date().getFullYear()} Door Dash Spot. All rights reserved.
                </div>
                <div className="">
                    <button
                        onClick={handleScrollToTop}
                        className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-xl shadow-sm transition"
                    >
                        ⬆️ To Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
