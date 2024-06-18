import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="text-gray-500 py-28">
			<p className="text-center text-base mb-3">
				Copyright © 2024 HIVERYLABS PRIVATE LIMITED - All Rights Reserved.
			</p>
			<div className="flex flex-wrap items-center gap-2 justify-center lg:gap-4 text-base max-w-max mx-auto">
				<Link
					to="/app/privacy-policy"
					className="p-2 underline underline-offset-8 hover:text-gray-800"
				>
					Privacy Policy
				</Link>
				<Link
					to="/app/terms-and-conditions"
					className="p-2 underline underline-offset-8 hover:text-gray-800"
				>
					Terms & Conditions
				</Link>
				<Link
					to="/app/refunds"
					className="p-2 underline underline-offset-8 hover:text-gray-800"
				>
					Refunds
				</Link>
				<Link
					to="/app/pricing"
					className="p-2 underline underline-offset-8 hover:text-gray-800"
				>
					Pricing
				</Link>
				<Link
					to="/app/contact-us"
					className="p-2 underline underline-offset-8 hover:text-gray-800"
				>
					Contact Us
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
