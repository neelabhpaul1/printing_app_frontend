import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import SidebarDrawer from "./SidebarDrawer";

const Navigation = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<header className="bg-white px-4 py-4 lg:py-5 sticky top-0">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<h2 className="font-bold text-3xl">ReadyToPrint</h2>
					<button
						className="outline-none bg-transparent border-none"
						onClick={() => setShowSidebar(true)}
					>
						<Bars3Icon className="w-8 h-8" />
					</button>
				</div>
			</header>
			<SidebarDrawer
				show={showSidebar}
				closeSidebar={() => setShowSidebar(false)}
			/>
		</>
	);
};

export default Navigation;
