import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedLayout from './pages/SharedLayout'
import SharedProductLayout from './pages/SharedProductLayout'
import SingleProduct from './pages/SingleProduct'
function App() {
	const [user, setUser] = useState(null)
	return (
		<BrowserRouter>
			<nav>our navbar</nav>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />

					<Route path='products' element={<SharedProductLayout />}>
						<Route index element={<Products />} />
						<Route path=':productId' element={<SingleProduct />} />
					</Route>

					<Route path='login' element={<Login setUser={setUser} />} />
					<Route
						path='dashboard'
						element={
							<ProtectedRoute user={user}>
								<Dashboard user={user} />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<Error />} />
				</Route>
				<Route path='dashboard' element={<div>Dashboard</div>}>
					<Route path='stats' element={<div>stats</div>} />
				</Route>
			</Routes>
			<footer>our footer</footer>
		</BrowserRouter>
	)
}

export default App
