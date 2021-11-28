import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import InventoriesPage from './pages/InventoriesPage/InventoriesPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate replace to="/warehouses" />} />
				<Route path="/warehouses" element={<WarehousesPage />} />
				<Route path="/inventories" element={<InventoriesPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
