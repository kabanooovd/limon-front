import { Navigate, Route, Routes } from "react-router-dom"
import { APP_ROUTES } from "./config"
import { ItemsListContainer } from "./pages/ItemsList/ItemsListContainer"

export const AppRoutes = () => {
  const { ITEMS } = APP_ROUTES
  return (
    <>
			<Routes>
        {/* Items routes */}
				<Route path={`/${ITEMS}`} element={<ItemsListContainer />} />
				<Route path={`/${ITEMS}/:id`} element={<ItemsListContainer />} />

        {/* common routes config */}
        <Route path="/*" element={<Navigate to={`${ITEMS}`} replace />} />
			</Routes>
		</>
  )
}