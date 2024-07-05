import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";
import PdfViewer from "./PdfViewer";

function StepTwo({
	currentStep,
	handleStepCounter,
	srcFile,
	data,
	handleDataChange,
}) {
	const [total, setTotal] = useState(0);
	const [totalPages, setTotalPages] = useState();
	const {
		accountId,
		sendingData,
		setSendingData,
		setLoading,
		loading,
		error,
		setError,
		networkError,
		setNetworkError,
	} = useContext(Context);
	const [show, setshow] = useState(false);
	const navigate = useNavigate();

	const calculateTotal = () => {
		let price = 1;
		/* if (data.noOfPages < 21) {
			if (data.pageSizeFormat === "a3") {
				price = data.grayOrColored === "0" ? 10 : 35;
			} else if (data.pageSizeFormat === "a4") {
				price = data.grayOrColored === "0" ? 3 : 10;
			}
		} else if (data.noOfPages < 100) {
			if (data.pageSizeFormat === "a3") {
				price = data.grayOrColored === "0" ? 7 : 28;
			} else if (data.pageSizeFormat === "a4") {
				price = data.grayOrColored === "0" ? 2 : 8;
			}
		} else {
			if (data.pageSizeFormat === "a3") {
				price = data.grayOrColored === "0" ? 5 : 20;
			} else if (data.pageSizeFormat === "a4") {
				price = data.grayOrColored === "0" ? 1 : 7;
			}
		} */

		if (data.pageSizeFormat === "a3") {
			price = data.grayOrColored === "0" ? 10 : 35;
		} else if (data.pageSizeFormat === "a4") {
			price = data.grayOrColored === "0" ? 3 : 10;
		}

		/* if (data.noOfPages < 0) {
			setError({
				noOfPages: true,
			});
			setTimeout(() => {
				setError({
					noOfPages: false,
				});
			}, 1500);
		} */
		if (data.noOfCopies < 0) {
			setError({
				noOfCopies: true,
			});
			setTimeout(() => {
				setError({
					noOfCopies: false,
				});
			}, 1500);
		}

		if (data.noOfPages > 0 && data.noOfCopies > 0) {
			price = price * data.noOfPages * data.noOfCopies;
			setTotal(price);
			setSendingData({
				file: srcFile.file,
				noOfPages: data.noOfPages,
				pageSizeFormat: data.pageSizeFormat,
				grayOrColored: data.grayOrColored,
				noOfCopies: data.noOfCopies,
				pageSides: data.pageSides,
			});
		} else {
			setTotal(0);
		}
	};

	const initPay = (data) => {
		const options = {
			key: data.Key_Id,
			amount: data.amount,
			currency: data.currency,
			name: "RTP",
			order_id: data.id,
			handler: async (response) => {
				try {
					const resData = await axios.post(
						`${process.env.REACT_APP_API_URL}/api/v1/payment/verify`,
						{
							...response,
							amount: data.amount,
							accountId: accountId,
						}
					);
					setshow(true);
					setLoading(true);
					if (resData.data.success) {
						setSendingData({
							file: srcFile.file,
							noOfPages: sendingData.noOfPages,
							pageSizeFormat: sendingData.pageSizeFormat,
							grayOrColored: sendingData.grayOrColored,
							noOfCopies: sendingData.noOfCopies,
							pageSides: sendingData.pageSides,
							order_ID: resData.data.order_id,
							payment_ID: resData.data.payment_id,
							amount: resData.data.amount,
						});
						setTimeout(() => {
							setLoading(false);
							navigate(`/payment-success`);
						}, 1500);
					}
				} catch (error) {
					setNetworkError(true);
					setTimeout(() => {
						setNetworkError(false);
					}, 1500);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			if (
				data.noOfPages > 0 &&
				data.noOfCopies > 0 &&
				data.grayOrColored !== "" &&
				data.pageSizeFormat !== "" &&
				data.pageSides !== ""
			) {
				const details = {
					noOfPages: sendingData.noOfPages,
					pageSizeFormat: sendingData.pageSizeFormat,
					grayOrColored: sendingData.grayOrColored,
					noOfCopies: sendingData.noOfCopies,
				};
				const { data } = await axios.post(
					`${process.env.REACT_APP_API_URL}/api/v1/payment/order`,
					details
				);

				initPay(data.order);
			} else {
				setError({
					state: true,
				});
				setTimeout(() => {
					setError({
						state: false,
					});
				}, 2000);
			}
		} catch (error) {
			setNetworkError(true);
			setTimeout(() => {
				setNetworkError(false);
			}, 1500);
		}
	};

	useEffect(() => {
		calculateTotal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useEffect(() => {
		handleDataChange("noOfPages", totalPages);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [totalPages]);

	return (
		<>
			{networkError ? (
				<div
					className="alert alert-danger fixed z-10 top-0 w-full font-semibold text-sm md:text-md"
					role="alert"
				>
					!! Server Problem !!
				</div>
			) : null}
			{error.state ? (
				<div
					className="alert alert-danger fixed z-10 top-0 w-full font-semibold text-sm md:text-md"
					role="alert"
				>
					!! Something is missing or invalid inputs !!
				</div>
			) : null}
			{loading ? (
				<div className="absolute top-0 min-h-screen w-full flex justify-center items-center bg-white">
					<div>
						<div className="spinner-border w-24 h-24" role="status">
							<span className="sr-only">Loading...</span>
						</div>
						<p className="text-lg font-bold md:text-xl mt-3">Loading..</p>
					</div>
				</div>
			) : null}

			<div
				className={`w-full step-two ${currentStep !== 2 ? "hide" : ""} ${
					show ? "hidden" : "block"
				}`}
			>
				<h1 className="text-2xl px-2 py-4 mb-2 text-gray-900">
					You are almost there!
				</h1>
				<div className="flex mt-2 mb-5 flex-col gap-y-2 md:items-stretch md:flex-row md:justify-center md:gap-x-2">
					<div className="preview bg-white md:max-w-full border-2 rounded-lg mx-2 overflow-auto  md:flex md:justify-center">
						{srcFile.loading ? (
							<strong>Loading Preview...</strong>
						) : (
							<>
								<div className="flex flex-col items-center">
									{/* <p className="pt-2 mb-4">Total Pages - {totalPages}</p> */}
									<p className="py-3 font-medium text-xl underline-offset-8 underline">
										Preview
									</p>
									<div className="w-max border-t-2 border-t-gray-200 rounded-b-lg overflow-hidden">
										<PdfViewer
											pdfFile={srcFile.src}
											setTotalPages={setTotalPages}
										/>
									</div>
								</div>
							</>
						)}
					</div>
					<div className="options bg-white flex flex-col mx-2 overflow-hidden h-fit md:w-1/4">
						<div className="px-3 md:px-5 border-t-2 border-x-2 rounded-t-lg pt-4">
							<div className="input-field">
								<div htmlFor="no_of_pages">
									No. of Pages - {data.noOfPages ?? 0}
								</div>
							</div>
							<div className="input-field">
								<label htmlFor="gray_or_colored" className="mb-1.5">
									Colour Options
								</label>
								<select
									id="gray_or_colored"
									className="pl-2 form-control"
									defaultValue="0"
									onChange={(e) =>
										handleDataChange("grayOrColored", e.target.value)
									}
								>
									<option value="">Select</option>
									<option value="0">Grayscale</option>
									<option value="1">Colored</option>
								</select>
							</div>
							<div className="input-field">
								<label htmlFor="no_of_copies" className="mb-1.5">
									No. of copies
								</label>
								<input
									type="number"
									id="no_of_copies"
									className="pl-2 form-control"
									min="1"
									defaultValue="1"
									onChange={(e) =>
										handleDataChange("noOfCopies", e.target.value)
									}
								/>
								{error.noOfCopies ? (
									<p className="text-red-600 text-start text-sm">
										Value must be greater than 0
									</p>
								) : null}
							</div>
							<div className="input-field">
								<label htmlFor="page_size_format" className="mb-1.5">
									Page Size Format
								</label>
								<select
									id="page_size_format"
									className="pl-2 form-control"
									defaultValue="a4"
									onChange={(e) =>
										handleDataChange("pageSizeFormat", e.target.value)
									}
								>
									<option value="">Select</option>
									<option value="a3">A3</option>
									<option value="a4">A4</option>
								</select>
							</div>
							<div className="input-field">
								<label htmlFor="page_sides" className="mb-1.5">
									Printing Sides
								</label>
								<select
									id="page_sides"
									className="pl-2 form-control"
									defaultValue="0"
									onChange={(e) =>
										handleDataChange("pageSides", e.target.value)
									}
								>
									<option value="">Select</option>
									<option value="0">One Sided</option>
									<option value="1">Double Sided</option>
								</select>
							</div>
						</div>
						<div className="flex flex-col bg-gray-800 py-3 rounded-b-lg">
							<strong className="total text-white mb-1.5 text-xl">
								Total :{" "}
								<strong>
									₹
									{total
										? total + parseInt(`${process.env.REACT_APP_FEES_AMOUNT}`)
										: 0}
								</strong>
							</strong>
							<div>
								<button
									className="border-2 rounded-lg focus:border-indigo-600 px-3 shadow-sm py-1.5"
									onClick={() => handleStepCounter(-1)}
								>
									Prev
								</button>
								<button
									onClick={handlePayment}
									className={`${
										total > 0
											? "border-2 rounded-lg border-indigo-600 px-4 bg-indigo-600 text-white py-1.5"
											: ""
									}`}
								>
									Pay & Print
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StepTwo;
