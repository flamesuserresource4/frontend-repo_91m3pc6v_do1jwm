import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Heart, User, Search } from 'lucide-react'

function Navbar() {
  const navItem = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-black/10' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white tracking-tight">StyleAura</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navItem} end>Home</NavLink>
          <NavLink to="/shop" className={navItem}>Shop</NavLink>
          <NavLink to="/shop?category=Men" className={navItem}>Men</NavLink>
          <NavLink to="/shop?category=Women" className={navItem}>Women</NavLink>
          <NavLink to="/shop?category=Kids" className={navItem}>Kids</NavLink>
          <NavLink to="/shop?category=Accessories" className={navItem}>Accessories</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <Search size={18} className="text-white/70" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/60"
            />
          </div>
          <button className="p-2 rounded-lg hover:bg-white/10 transition"><Heart className="text-white" size={20} /></button>
          <Link to="/cart" className="p-2 rounded-lg hover:bg-white/10 transition"><ShoppingCart className="text-white" size={20} /></Link>
          <button className="p-2 rounded-lg hover:bg-white/10 transition"><User className="text-white" size={20} /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
