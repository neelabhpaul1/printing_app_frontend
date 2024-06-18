import React from "react";
import MainLayout from "../layouts/MainLayout";

const Refund = () => {
	return (
		<MainLayout>
			<section className="pt-16 px-4 max-w-6xl mx-auto">
				<h2 className="font-black text-center text-2xl mb-12">Refund</h2>
				<div className="max-w-3xl leading-8 mx-auto text-gray-600">
					<p className="mb-8">
						Thank you for choosing HIVERYLABS PRIVATE LIMITED for your
						Platform-as-a-Service (PaaS) needs. We strive to provide the best
						service possible, and your satisfaction is our priority. This Refund
						Policy outlines the terms and conditions under which refunds will be
						provided for our PaaS offerings.
					</p>
					<ol className="list-decimal space-y-8">
						<li>
							<div>Refund Eligibility:</div>
							<ol className="list-[lower-alpha] pl-4 space-y-6">
								<li>
									<div>
										Refunds may be eligible under the following circumstances:
									</div>
									<ol className="list-[lower-roman] pl-4">
										<li>
											Service Downtime: In the event of prolonged service
											downtime beyond the agreed-upon service level agreement
											(SLA), eligible customers may request a refund for the
											affected period.
										</li>
										<li>
											Service Termination: If HIVERYLABS PRIVATE LIMITED
											discontinues the PaaS service or terminates a customer's
											account without cause, a prorated refund may be issued for
											any unused portion of the subscription period.
										</li>
									</ol>
								</li>
								<li>
									<div>
										Refunds will not be provided under the following
										circumstances:
									</div>
									<ol className="list-[lower-roman] pl-4">
										<li>
											Customer Cancellation: Refunds will not be issued for
											voluntary cancellations initiated by the customer.
										</li>
										<li>
											Violation of Terms of Service: Customers found to be in
											violation of our Terms of Service are not eligible for
											refunds.
										</li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							<div>Refund Request Process:</div>
							<ol className="list-[lower-alpha] pl-4">
								<li>
									Customers must submit a refund request through our support
									portal or contact our customer service team directly.
								</li>
								<li>
									All refund requests must include relevant details such as
									account information, service downtime reports (if applicable),
									and any other supporting documentation.
								</li>
								<li>
									Refund requests will be reviewed by our team within 5 business
									days of receipt.
								</li>
							</ol>
						</li>
						<li>
							<div>Refund Method:</div>
							<ol className="list-[lower-alpha] pl-4">
								<li>
									Refunds will be issued using the original payment method
									whenever possible.
								</li>
								<li>
									If the original payment method is not available, refunds may
									be issued via alternative methods such as check or bank
									transfer.
								</li>
							</ol>
						</li>
						<li>
							<div>Proration Calculation:</div>
							<ol className="list-[lower-alpha] pl-4">
								<li>
									Prorated refunds will be calculated based on the remaining
									unused portion of the subscription period.
								</li>
								<li>
									Refunds for service downtime will be prorated based on the
									duration of the outage and the impact on the customer's
									operations.
								</li>
							</ol>
						</li>
						<li>
							<div>Refund Discretion:</div>
							<ol className="list-[lower-alpha] pl-4">
								<li>
									HIVERYLABS PRIVATE LIMITED reserves the right to approve or
									deny refund requests at its discretion, taking into account
									the circumstances of each case.
								</li>
							</ol>
						</li>
						<li>
							<div>Changes to Refund Policy:</div>
							<ol className="list-[lower-alpha] pl-4">
								<li>
									HIVERYLABS PRIVATE LIMITED reserves the right to modify this
									Refund Policy at any time without prior notice. Any changes
									will be effective immediately upon posting on our website or
									notifying customers via email.
								</li>
							</ol>
						</li>
					</ol>
				</div>
			</section>
		</MainLayout>
	);
};

export default Refund;
