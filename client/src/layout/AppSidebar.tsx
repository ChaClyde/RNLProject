import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar()

    const sidebarItems = [
        {
            path: '/',
            text: 'Genders',
        },
        {
            path: '/users',
            text: 'Users',
        },
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/30 sm:hidden"
                    onClick={toggleSidebar} />
            )}
            <aside id="top-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-blue-50 border-e border-default">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3" alt="Flowbite Logo" />
                        <span className="self-center text-lg text-heading font-semibold whitespace-nowrap">Flowbite</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((sidebarItem, index) => (
                            <li key={index}>
                                <Link
                                    to={sidebarItem.path}
                                    className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-blue-800 hover:text-blue-100 rounded-[20px] group"
                                >
                                    <span className="ms-3">{sidebarItem.text}</span>
                                </Link>
                            </li>
                        ))}



                    </ul>
                </div>
            </aside>
        </>
    )
}

export default AppSidebar