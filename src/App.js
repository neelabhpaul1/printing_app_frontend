import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StepThree from "./components/StepThree";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Refunds from "./pages/Refunds";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/payment-success" element={<StepThree />} />
					<Route path="/app/privacy-policy" element={<PrivacyPolicy />} />
					<Route
						path="/app/terms-and-conditions"
						element={<TermsAndConditions />}
					/>
					<Route path="/app/refunds" element={<Refunds />} />
					<Route path="/app/pricing" element={<Pricing />} />
					<Route path="/app/contact-us" element={<ContactUs />} />
					<Route path="/:id" element={<Home />} />
					<Route path="/" element={<LandingPage />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
