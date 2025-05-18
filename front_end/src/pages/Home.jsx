import Hero from "../components/Hero3d.jsx";
import { Button } from "../components/ui/button.tsx";
import { Link } from "react-router-dom";
import Preview from "@/components/Preview.jsx";
import Features from "@/components/Features.jsx";
import Stats from "@/components/Stats.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import Footer from "@/components/Footer.jsx";


const Home = () => {
  return (
    <div className="animate-bg-gradient text-white overflow-hidden">
      {/* Top 3D Hero Section */}
      <Hero />

      {/* Text + CTA Button */}
        <div className="relative z-10 text-center px-4 pt-10 md:pt-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          Welcome to FutureMart
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Buy and sell products in a futuristic experience.
        </p>

        <div className="flex justify-center mt-4 space-x-4">
        <Link to="/products">
          <Button
            variant="default"
            className="
              relative inline-block 
              px-7  
              rounded-xl 
              text-white 
              bg-transparent 
              backdrop-blur-md 
              border-2 
              border-transparent 
              transition-all duration-300 ease-in-out
              hover:scale-105 
              hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.7)]
              before:absolute before:inset-0 before:rounded-xl 
              before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 
              before:blur-sm before:-z-10 
              before:transition-all before:duration-300 
              hover:before:blur-md
              after:absolute after:inset-0 after:rounded-xl after:bg-white/5 after:-z-20
            "
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Explore Products
            </span>
          </Button>
        </Link>

        <Link to="/userDetails">
          <Button
            variant="default"
            className="
              relative inline-block 
              px-7  
              rounded-xl 
              text-white 
              bg-transparent 
              backdrop-blur-md 
              border-2 
              border-transparent 
              transition-all duration-300 ease-in-out
              hover:scale-105 
              hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.7)]
              before:absolute before:inset-0 before:rounded-xl 
              before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 
              before:blur-sm before:-z-10 
              before:transition-all before:duration-300 
              hover:before:blur-md
              after:absolute after:inset-0 after:rounded-xl after:bg-white/5 after:-z-20
            "
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Your Products
            </span>
          </Button>
        </Link>
        <Link to="/auth">
          <Button
          variant="default"
          className="
            relative inline-block 
            px-7  
            rounded-xl 
            text-white 
            bg-transparent 
            backdrop-blur-md 
            border-2 
            border-transparent 
            transition-all duration-300 ease-in-out
            hover:scale-105 
            hover:shadow-[0_0_25px_5px_rgba(0,255,127,0.6)]
            before:absolute before:inset-0 before:rounded-xl 
            before:bg-gradient-to-r before:from-blue-500 before:to-emerald-500 
            before:blur-sm before:-z-10 
            before:transition-all before:duration-300 
            hover:before:blur-md
            after:absolute after:inset-0 after:rounded-xl after:bg-white/5 after:-z-20
          "
        >
          <span className="relative z-10 font-semibold tracking-wide">
            Create Account 
              </span>
            </Button>
          </Link>

      </div>

        <Features />
        <Preview />
        <Stats />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
