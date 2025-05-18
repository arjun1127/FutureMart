import React from 'react';
import { UserCircle } from 'lucide-react'; 

const testimonials = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Tech Entrepreneur',
    quote:
      'This platform made it incredibly easy to list and sell my products. The UI is sleek and intuitive!',
  },
  {
    id: 2,
    name: 'Ishita Rao',
    role: 'Small Business Owner',
    quote:
      'I was able to reach customers across the country in just days. The experience has been fantastic!',
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'Freelance Designer',
    quote:
      'Uploading my designs and managing orders was super easy. Highly recommend to other sellers.',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#1a1a1a] py-20 px-6 mt-24 mb-24">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        What Our Sellers Say
      </h2>
      <div className="max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#2a2a2a] rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <div className="text-gray-300 text-sm italic mb-4">
              “{testimonial.quote}”
            </div>
            <div className="flex items-center mt-6">
              <UserCircle className="text-indigo-500 w-10 h-10 mr-4" />
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
