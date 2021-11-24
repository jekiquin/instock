import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate replace to="/warehouses" />} />
				<Route path="/warehouses" element={<WarehousePage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
