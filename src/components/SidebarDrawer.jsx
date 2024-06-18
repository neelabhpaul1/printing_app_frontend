import React from "react";
import { NavLink, Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SidebarDrawer = ({ show, closeSidebar }) => {
	return (
		<aside
			className={`px-10 py-16 h-screen fixed left-0 top-0 bg-[#F6F6F6] max-w-xs w-full ${
				show ? "translate-x-0" : "-translate-x-full"
			} transition-all duration-200`}
		>
			<div className="flex justify-end mb-6">
				<button
					onClick={closeSidebar}
					className="bg-transparent outline-none border-none"
				>
					<XMarkIcon className="h-8 w-8 text-black" />
				</button>
			</div>
			<nav className="flex flex-col space-y-6">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`text-2xl text-gray-900 hover:underline hover:text-black underline-offset-8 ${
							isActive ? "underline" : "no-underline"
						}`
					}
				>
					Home
				</NavLink>
				<Link
					to="https://printing-app-admin-frontend-rtp1.vercel.app/"
					className="text-2xl text-gray-900 hover:underline hover:text-black underline-offset-8"
				>
					Vendor Portal
				</Link>
				<NavLink
					to="/app/contact-us"
					className={({ isActive }) =>
						`text-2xl text-gray-900 hover:underline hover:text-black underline-offset-8 ${
							isActive ? "underline" : "no-underline"
						}`
					}
				>
					Contact Us
				</NavLink>
			</nav>
		</aside>
	);
};

export default SidebarDrawer;
