import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

function Shop() {
  const query = useQuery()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    const category = query.get('category')
    if (category) params.set('category', category)
    const res = await fetch(`${baseUrl}/products?${params.toString()}`)
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [query])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Shop</h1>
        </div>

        {loading ? (
          <p className="text-white/70">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-white/70">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p._id} product={p} />)
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default Shop
