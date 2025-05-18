import React from 'react';

const dummyProducts = [
  {
    id: 1,
    title: 'Futuristic Headphones',
    description: 'Experience next-gen sound quality with crystal clarity.',
    price: 199.99,
    image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Keep connected and healthy with advanced tracking features.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1637160151663-a410315e4e75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'VR Headset',
    description: 'Immerse yourself in another world with our VR Headset.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1657734240326-8f2ab858a2dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Wireless Charger',
    description: 'Charge faster and effortlessly with the latest wireless tech.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Preview() {
  return (
    <div className="bg-[#1a1a1a] py-16 px-6 mt-24 mb-24">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        Product Previews
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
