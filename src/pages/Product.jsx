import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Product() {
  const { id } = useParams()
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  const load = async () => {
    const res = await fetch(`${baseUrl}/products/${id}`)
    if (res.ok) {
      const data = await res.json()
      setProduct(data)
    }
  }

  useEffect(() => { load() }, [id])

  if (!product) return (
    <div className="min-h-screen bg-slate-950 text-white"><Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">Loading...</main>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-white/5">
            <img src={product.images?.[activeImage]} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 mt-3">
            {product.images?.map((img, idx) => (
              <button key={img} onClick={() => setActiveImage(idx)} className={`h-20 w-20 rounded-lg overflow-hidden border ${activeImage===idx?'border-white':'border-white/20'}`}>
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-white/70 mt-2">{product.description}</p>
          <div className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</div>

          <div className="mt-6">
            <p className="text-white/80 mb-2">Sizes</p>
            <div className="flex gap-2">
              {product.sizes?.map(s => (
                <span key={s} className="px-3 py-1 bg-white/10 rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-white/80 mb-2">Colors</p>
            <div className="flex gap-2">
              {product.colors?.map(c => (
                <span key={c} className="px-3 py-1 bg-white/10 rounded-md">{c}</span>
              ))}
            </div>
          </div>

          <button className="mt-8 bg-white text-black rounded-lg px-6 py-3 font-semibold">Add to Cart</button>
        </div>
      </main>
    </div>
  )
}

export default Product
