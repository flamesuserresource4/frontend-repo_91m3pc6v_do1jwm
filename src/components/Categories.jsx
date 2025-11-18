import { Link } from 'react-router-dom'

const categories = [
  { name: 'Men', image: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW58ZW58MHwwfHx8MTc2MzQ0NzMyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kids', image: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW58ZW58MHwwfHx8MTc2MzQ0NzMyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop' },
]

function Categories() {
  return (
    <section id="categories" className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.name}
            to={`/shop?category=${encodeURIComponent(c.name)}`}
            className="group relative h-40 rounded-xl overflow-hidden"
          >
            <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-white font-semibold">{c.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
