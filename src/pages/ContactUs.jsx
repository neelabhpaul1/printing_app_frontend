import React from "react";
import MainLayout from "../layouts/MainLayout";

const ContactUs = () => {
	return (
		<MainLayout>
			<section className="pt-16 px-4 max-w-6xl mx-auto">
				<div className="text-gray-600">
					<div className="font-medium text-3xl lg:text-5xl mb-7 lg:mb-14">
						Contact Us
					</div>
					<div className="text-xl lg:text-2xl space-y-2">
						<div>HIVERYLABS PRIVATE LIMITED</div>
						<a
							href="mailto:rtp.hiverylabs@gmail.com"
							className="block underline underline-offset-8"
						>
							rtp.hiverylabs@gmail.com
						</a>
						<div>HOUSE NO 308, 3RD FLOOR, GOLCHHA ENCLAAVE, AMLIDIH</div>
						<div>RAIPUR, C.G. 492001</div>
						<div>Mobile +918982035939</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default ContactUs;
