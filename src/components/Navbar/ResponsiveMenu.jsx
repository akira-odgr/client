import { FaUserCircle } from "react-icons/fa";

export const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div
            className={`fixed top-0 flex flex-col justify-between md:hidden z-50 ${
                showMenu ? "left-0}" : "-left-[100%]"
            } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 transition-all duration-500 pt-24 pb-6 px-8`}
        >
            {/* Navbar section */}
            <div>
                {/* user section */}
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1 className="text-xl font-semibold">Jon Doe</h1>
                        <h1 className="text-sm text-slate-500">+123456789</h1>
                    </div>
                </div>

                {/* Menu section */}
                <nav className="mt-12">
                    <ul className="space-y-6 text-lg font-semibold">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Nav Footer section */}
            <p>@2024 All Rights Reserved</p>
        </div>
    );
};
