import React from "react";
import MainLayout from "../layouts/MainLayout";
import bannerImg from "../assets/images/banner.png";
import shopImg from "../assets/images/shop.png";

export default function LandingPage() {
	return (
		<MainLayout>
			<img src={bannerImg} alt="Ready To Print" className="w-full" />
			<section className="mx-auto pt-10 px-4 lg:pt-20 max-w-6xl">
				<div className="text-right mb-20 lg:mb-40">
					<p className="text-xl lg:text-2xl mb-12">
						Faster checkouts from Print Shops
					</p>
					<div className="space-y-3">
						<div className="text-2xl lg:text-3xl">Product from</div>
						<h3 className="text-3xl lg:text-4xl font-bold">
							HIVERYLABS PRIVATE LIMITED
						</h3>
					</div>
				</div>
				<div>
					<h5 className="font-black text-2xl text-center mb-10">
						About hiveryLabs
					</h5>
					<div className="grid lg:grid-cols-2 items-center">
						<div className="lg:col-span-1">
							<img
								src={shopImg}
								alt="shop"
								className="max-h-[700px] object-cover"
							/>
						</div>
						<div className="lg:col-span-1 text-center">
							<div className="text-lg mb-6">Insight on the Offering</div>
							<p className="text-xl text-gray-600 leading-9 mb-10">
								hiveryLabs is a research house, dealing with revolutionizing
								modern lifestyle through technology.{" "}
							</p>
							<p className="text-xl text-gray-600 leading-9">
								ReadyToPrint (RTP) is the brainchild of this research house
								solving a niche problem. RTP provides a web app platform wherein
								store customers with print requirements could upload their
								documents for printing. A scanner (QR code) based form will be
								presented to customer to fill print details like color/bw, no.
								of copies, no. of pages, document size, margin preferences, etc.
								Once submitted by customer, payment gateway will take up payment
								based on page count and print preferences and queue for
								printing.{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
