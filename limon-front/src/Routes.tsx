import { Navigate, Route, Routes } from "react-router-dom"
import { APP_ROUTES } from "./config"
import { ItemsListContainer, OrdersFormContainer } from "./pages"

export const AppRoutes = () => {
  const { ITEMS, ORDERS } = APP_ROUTES
  return (
    <>
			<Routes>
        {/* Items routes */}
				<Route path={`/${ITEMS}`} element={<ItemsListContainer />} />
				<Route path={`/${ITEMS}/:id`} element={<ItemsListContainer />} />

        {/* Orders routes */}
				<Route path={`/${ORDERS}/form/:itemId`} element={<OrdersFormContainer />} />

        {/* common routes config */}
        <Route path="/*" element={<Navigate to={`${ITEMS}`} replace />} />
			</Routes>
		</>
  )
}