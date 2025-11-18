function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] max-h-[780px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1900&auto=format&fit=crop"
          alt="Winter collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl sm:text-6xl font-bold text-white max-w-2xl leading-tight">
              Shop the New Winter Collection
            </h1>
            <p className="text-white/80 mt-4 max-w-xl">
              Designed with passion. Crafted with care. Discover quality staples and standout pieces that define the season.
            </p>
            <div className="mt-8 flex gap-3">
              <button onClick={onShopNow} className="px-5 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition">
                Shop Now
              </button>
              <a href="#categories" className="px-5 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition">
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
