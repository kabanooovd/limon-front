import { Route, Routes } from "react-router-dom"
import { APP_ROUTES } from "./config"
import { ItemsListContainer } from "./pages/ItemsList/ItemsListContainer"

export const AppRoutes = () => {
  const { ITEMS } = APP_ROUTES
  return (
    <>
			<Routes>
				<Route path={`/${ITEMS}`} element={<ItemsListContainer />} />
				{/* <Route
					path="/"
					element={<Navigate to={`${ROUTE_PATH.CREDITS}/${ROUTE_PATH.CREDITS_SUBMIT}`} replace />}
				/> */}
			</Routes>
		</>
  )
}