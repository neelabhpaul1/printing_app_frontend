import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
