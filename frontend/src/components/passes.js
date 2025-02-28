import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const PricingPasses = () => {
  // All passes data
  const passes = [
    {
      name: "Mega pass",
      price: "₹3600",
      originalPrice: "₹5750",
      paymentLink: "https://pmny.in/cI5YBnYdA67t",
      description: "Entry for 3 days + Special Performances + 3 days on campus Accommodation",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "mega",
    },
    {
      name: "Mega pass - Hotel Accommodation",
      price: "₹6600",
      originalPrice: "₹10250",
      paymentLink: "https://pmny.in/NrPRi5yclFa5",
      description: "Entry for 3 days + Special Performances + 3 days Hotel Accommodation",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "mega",
    },
    {
      name: "Day 3 Entry",
      price: "₹300",
      originalPrice: "₹400",
      paymentLink: "https://pmny.in/UIzYMnedE6g9",
      description: "Entry to campus and access to all events except comedy night and proshows",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    {
      name: "Day 2 Entry",
      price: "₹300",
      originalPrice: "₹400",
      paymentLink: "https://pmny.in/qIsYJnrdi6ih",
      description: "Entry to campus and access to all events except comedy night and proshows",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    {
      name: "Day 1 Entry",
      price: "₹250",
      originalPrice: "₹300",
      paymentLink: "https://pmny.in/tIJRgFa4GfPZ",
      description: "Entry to campus and access to all events except comedy night and proshows",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    
    {
      name: "All Access Day 3 + Hotel Accommodation",
      price: "₹2950",
      originalPrice: "₹4100",
      paymentLink: "https://pmny.in/zIYllnvqqI05",
      description: "Day 3 entry pass + Internship Drive + Special Performance + Hotel Accommodation for Day 3",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 2 + Hotel Accommodation",
      price: "₹2200",
      originalPrice: "₹2850",
      paymentLink: "https://pmny.in/6r91DFkKfMQB",
      description: "Day 2 entry pass + Internship Drive + Special Performance + Hotel Accommodation for Day 2",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 1 + Hotel Accommodation",
      price: "₹1700",
      originalPrice: "₹2200",
      paymentLink: "https://pmny.in/kITlSnGqSsbk",
      description: "Day 1 entry pass + Internship Drive + Special Performance + Hotel Accommodation for Day 1",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 3 + Accommodation (On Campus)",
      price: "₹2150",
      originalPrice: "₹3100",
      paymentLink: "https://pmny.in/drm6k5v5la51",
      description: "Day 3 entry pass + Internship Drive + Special Performance + On Campus Accommodation for Day 3",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 2 + Accommodation (On Campus)",
      price: "₹1400",
      originalPrice: "₹1850",
      paymentLink: "https://pmny.in/SrYRa54css8f",
      description: "Day 2 entry pass + Internship Drive + Special Performance + On Campus Accommodation for Day 2",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 1 + Accommodation (On Campus)",
      price: "900",
      originalPrice: "₹1200",
      paymentLink: "https://pmny.in/pI8RcFG4QVuM",
      description: "Day 1 entry pass + Internship Drive + Special Performance + On Campus Accommodation for Day 1",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 3",
      price: "₹1750",
      originalPrice: "₹2600",
      paymentLink: "https://pmny.in/LrFqsVc7z70L",
      description: "Day 3 entry pass + Internship Drive + Special Performance ",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "All Access Day 2",
      price: "₹1000",
      originalPrice: "₹1350",
      paymentLink: "https://pmny.in/5rg6s5856ZNo",
      description: "Day 2 entry pass + Internship Drive + Special Performance ",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "allAccess",
    },
    {
      name: "Pioneer Pass",
      price: "₹1000",
      originalPrice: "₹1400",
      paymentLink: "https://pmny.in/UIeMJUUeTa5U",
      description: "3 days entry to campus + Internship drive",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    {
      name: "Executive Pass",
      price: "₹500",
      originalPrice: "₹600",
      paymentLink: "https://pmny.in/krp6l5Y5KbN7",
      description: "1 day entry to campus + Internship drive",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    {
      name: "Professional Pass",
      price: "₹1000",
      originalPrice: "₹1500",
      paymentLink: "https://pmny.in/iIpYZnQd08Ee",
      description: "Entry for 3 days + Networking Dinner + Investor Connect",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "entry",
    },
    {
      name: "3 Day Accommodation (Hotel)",
      price: "₹4500",
      originalPrice: "₹6000",
      paymentLink: "https://pmny.in/RJD5VVfY3pkG",
      description: "Accommodation on hotel for 3 days",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "accommodation",
    },
    {
      name: "3 Day Accommodation",
      price: "₹1200",
      originalPrice: "₹1500",
      paymentLink: "https://pmny.in/WICY5nHdH745",
      description: "Accommodation on campus for 3 days",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "accommodation",
    },
    {
      name: "1 Day Accommodation (Hotel)",
      price: "₹1500",
      originalPrice: "₹2000",
      paymentLink: "https://pmny.in/ZJ6AIm6oGcgt",
      description: "Accommodation on hotel for 1 day",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "accommodation",
    },
    {
      name: "1 Day Accommodation",
      price: "₹400",
      originalPrice: "₹500",
      paymentLink: "https://pmny.in/5IblMnsqxsK9",
      description: "Accommodation on campus for 1 day",
      gradient: "from-blue-300 to-blue-100",
      bgGradient: "from-blue-900 to-blue-800",
      category: "accommodation",
    },
  ];

  // Define categories and their display names
  const categories = [
    { id: "all", name: "All Passes" },
    { id: "mega", name: "Mega Passes" },
    { id: "entry", name: "Entry Passes" },
    { id: "allAccess", name: "All Access Passes" },
    { id: "accommodation", name: "Accommodation Passes" },
  ];

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter passes based on active category
  const filteredPasses = activeCategory === "all" 
    ? passes 
    : passes.filter(pass => pass.category === activeCategory);

  // Pass card component
  const PassCard = ({ pass }) => (
    <div className="relative">
      {pass.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div
        className={`rounded-2xl p-6 bg-gradient-to-br ${pass.bgGradient} border border-blue-700 h-full`}
      >
        <div className="text-center mb-6">
          <h3
            className={`text-2xl font-bold bg-gradient-to-r ${pass.gradient} bg-clip-text text-transparent`}
          >
            {pass.name}
          </h3>
          <div className="mt-2">
            <span className="text-gray-400 line-through text-lg">
              {pass.originalPrice}
            </span>
            <span className="text-white text-3xl font-bold ml-2">
              {pass.price}
            </span>
          </div>
        </div>

        {/* Description Section with Larger Text */}
        <div className="text-gray-300 text-lg mb-4">
          {pass.description}
        </div>

        {/* Pay Now Button */}
        <div className="mt-6 text-center">
          <a
            href={pass.paymentLink}
            style={{
              width: "135px",
              backgroundColor: "#1065b7",
              textAlign: "center",
              fontWeight: "800",
              padding: "11px 0px",
              color: "white",
              fontSize: "12px",
              display: "inline-block",
              textDecoration: "none",
              borderRadius: "3.229px",
            }}
          >
            Pay Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Your Passes Now !!</h2>
          <p className="text-xl text-gray-300">Select the perfect pass for your experience</p>
        </div>
  
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-blue-900 bg-opacity-50 text-gray-300 hover:bg-blue-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
  
        {/* Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPasses.map((pass) => (
            <PassCard key={pass.name} pass={pass} />
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default PricingPasses;