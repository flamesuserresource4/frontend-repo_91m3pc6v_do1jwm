import Navbar from '../components/Navbar'

function Cart() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white/5 rounded-2xl p-8 text-white/70">
          Your cart is empty for now. Browse products and add items to your cart.
        </div>
      </main>
    </div>
  )
}

export default Cart
