import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
	return (
		<nav className='navbar'>
			<NavLink
				to='/'
				style={({ isActive }) => {
					return { color: isActive ? 'red' : 'grey' }
				}}>
				Home
			</NavLink>
			<NavLink to='/about' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
				About
			</NavLink>
			<NavLink to='/products'>Products</NavLink>
			<NavLink to='/login'>login</NavLink>
		</nav>
	)
}
export default StyledNavbar
