import React, { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productApi.js";
import { Button } from "../components/ui/button.js";
import { Input } from "../components/ui/input.js";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { Link } from "react-router-dom";


export default function UserDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data.data || res.data);
    } catch (err) {
      toast.error("Failed to fetch products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, price, image } = formData;
    if (!title || !price || !image) {
      toast.error("Please fill all fields");
      return;
    }

    setSubmitting(true);
    try {
            const payload = {
              name: title,                  // ✅ rename title → name
              price: parseFloat(price),
              image_url: image,            // ✅ rename image → image_url
            };

      if (editingId) {
        await updateProduct(editingId, payload);
        toast.success("Product updated");
      } else {
        await createProduct(payload);
        toast.success("Product created");
      }

      setFormData({ title: "", price: "", image: "" });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      toast.error("Failed to submit product");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  
  };

  const handleEdit = (product) => {
      setFormData({
          title: product.name || "",       // match backend 'name'
          price: product.price ? product.price.toString() : "",
          image: product.image_url || "",  // match backend 'image_url'
        });
        setEditingId(product.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      toast.error("Failed to delete product");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">
          {editingId ? "Edit Product" : "Add New Product"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Product title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Price ($)
            </label>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Product price"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <Input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <Button type="submit" disabled={submitting} className="w-full bg-white text-black hover:bg-zinc-200 dark:text-white">
            {submitting && <Loader2 className="animate-spin mr-2 h-5 w-5" />}
            {editingId ? "Update Product" : "Add Product"}
          </Button>

          {editingId && (
            <Button
              variant="secondary"
              onClick={() => {
                setEditingId(null);
                setFormData({ title: "", price: "", image: "" });
              }}
              className="w-full mt-2"
            >
              Cancel
            </Button>
          )}
        </form>
      </div>

      <div className="max-w-6xl mx-auto mt-12 bg-zinc-950 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-6 text-white">Your Products</h2>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-zinc-400">You have no products yet.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        )}
      </div>

            <div className="flex justify-center mt-4">
            <Link to="/products">
              <Button
                variant="ghost"
                className="text-white border border-white/20 hover:bg-white"
              >
                <span className="relative z-10 font-semibold tracking-wide">
                  All Products
                </span>
              </Button>
            </Link>
      </div>

    </div>
  );
}
