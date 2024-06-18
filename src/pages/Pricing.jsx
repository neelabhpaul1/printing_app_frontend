import React from "react";
import MainLayout from "../layouts/MainLayout";

const Pricing = () => {
	return (
		<MainLayout>
			<section className="pt-16 px-4 max-w-6xl mx-auto">
				<h2 className="font-black text-center text-2xl mb-12">Pricing</h2>
				<div className="max-w-3xl leading-8 mx-auto text-gray-600">
					<p>
						For each transaction, a nominal flat fee of ₹2 is charged to the end
						customer, not the vendor business. This flat fee is an additional
						cost that is applied on top of the charges invoiced by the vendor
						according to the specific customer order. It is important to note
						that this flat fee does not constitute the total payment amount; it
						is merely an ancillary charge to facilitate the transaction. This
						structure ensures that the vendor retains the full amount of their
						invoiced charges while the end customer contributes a minimal fee to
						cover the processing and administrative costs associated with
						managing the transaction. This transparent fee policy is designed to
						maintain the integrity of the pricing model and to ensure that there
						are no hidden costs for either the customer or the vendor, thereby
						fostering trust and clarity in all financial interactions.
					</p>
				</div>
			</section>
		</MainLayout>
	);
};

export default Pricing;
