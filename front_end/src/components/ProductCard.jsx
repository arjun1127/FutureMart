import { Card, CardContent, CardFooter } from "./ui/card.tsx"
import { Button } from "./ui/button.tsx"
import { Badge } from "./ui/badge.tsx"
import { Pencil, Trash2 } from "lucide-react"

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
      <Card className="w-full max-w-sm bg-zinc-900 border border-zinc-800 shadow-md hover:shadow-xl hover:ring-2 hover:ring-white/10 transition-all rounded-2xl">
      <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform hover:scale-105"
        />

      <CardContent className="p-4">
        <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">{product.name}</h2>
        <Badge className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-white">
          ₹{product.price}
        </Badge>
          </div>
      </CardContent>

      {(onEdit || onDelete) && (
        <CardFooter className="flex justify-end gap-2 px-4 pb-4">
          {onEdit && (
            <Button variant="outline" size="sm" onClick={() => onEdit(product)}>
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
          )}
          {onDelete && (
            <Button variant="destructive" size="sm" onClick={() => onDelete(product.id)}>
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
