function ProductCard({ product, onAdd }) {
  const price = product.discount_percent
    ? (product.price * (1 - product.discount_percent / 100)).toFixed(2)
    : product.price.toFixed(2)

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition border border-slate-100">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
        {product.discount_percent > 0 && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            -{product.discount_percent}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 truncate">{product.title}</h3>
        <p className="text-sm text-slate-500 truncate">{product.category}</p>
        <div className="mt-3 flex items-center gap-2">
          {product.discount_percent > 0 && (
            <span className="text-slate-400 line-through text-sm">${product.price.toFixed(2)}</span>
          )}
          <span className="text-lg font-bold">${price}</span>
        </div>
        <button onClick={() => onAdd?.(product)} className="mt-4 w-full bg-black text-white rounded-lg py-2 font-semibold hover:bg-black/90 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
