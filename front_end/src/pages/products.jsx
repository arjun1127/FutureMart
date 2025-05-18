import { useEffect, useState } from "react"
import { getProducts } from "../api/productApi.js"
import ProductCard from "../components/ProductCard.jsx"
import { Button } from "../components/ui/button.tsx"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Link } from "react-router-dom"

export default function Product() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await getProducts()
      setProducts(res.data.data)
    } catch (err) {
      toast.error("Failed to fetch products")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen p-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Listed Products</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-zinc-400">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Centered Home Button */}
        <div className="flex justify-center mt-10">
          <Link to="/">
            <Button className="text-white border border-white/20 hover:bg-white/10">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
