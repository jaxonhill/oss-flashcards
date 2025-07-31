import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "../pages/landing-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
import DeckListPage from "../pages/decks/deck-list-page";
import CreateNewDeckPage from "../pages/decks/new/create-new-deck-page";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="dashboard" element={<DashboardPage />} />
				<Route path="decks">
					<Route index element={<DeckListPage />} />
					<Route path="new" element={<CreateNewDeckPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
