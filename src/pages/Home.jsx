import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${baseUrl}/products?limit=8`)
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => { fetchProducts() }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Hero onShopNow={() => navigate('/shop')} />
        <Categories />

        <section className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Top Selling</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>

        <section className="bg-white/5 rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Designed with Passion. Crafted with Care.</h3>
          <p className="text-white/70 mt-2 max-w-3xl">
            We believe in timeless design, responsible materials, and everyday comfort. Explore our curated
            collections to find your next favorite pieces.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} StyleAura. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
