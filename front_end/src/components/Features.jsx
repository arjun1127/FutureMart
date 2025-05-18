import { FaUpload, FaChartLine, FaMoneyCheckAlt, FaBoxes } from 'react-icons/fa';

const features = [
  {
    icon: <FaUpload className="text-cyan-400 text-4xl" />,
    title: "Easy Product Upload",
    description: "List your products with just a few clicks using our intuitive form.",
  },
  {
    icon: <FaChartLine className="text-purple-400 text-4xl" />,
    title: "Real-time Analytics",
    description: "Track your product performance with live sales and traffic data.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-green-400 text-4xl" />,
    title: "Fast Payouts",
    description: "Receive your earnings quickly and securely through automated payouts.",
  },
  {
    icon: <FaBoxes className="text-yellow-400 text-4xl" />,
    title: "Smart Inventory System",
    description: "Monitor stock levels and get notified when supplies run low.",
  },
];

export default function Features() {
  return (
    <section id="Features" className="bg-[#0f0f0f] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Why Sell on FutureMart?
        </h2>
        <p className="text-gray-400 mb-12">
          We make it easy, efficient, and exciting to grow your business online.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
