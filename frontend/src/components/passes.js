import React from 'react';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const PricingPasses = () => {
  const passes = [
    {
      name: 'Silver Pass',
      price: 'FREE',
      originalPrice: '₹199',
      features: [
        { name: 'Startup Expo', included: true },
        { name: 'LHC Speakers Sessions', included: true },
        { name: 'Informals', included: true },
        { name: 'OAT Event', included: false },
        { name: 'Highlight Speaker Sessions', included: false },
        { name: 'Internship & Job Fair', included: false },
        { name: 'Competitions', included: false },
        { name: 'Networking Arena', included: false },
        { name: 'Incubator Summit', included: false },
        { name: 'Seed Stars', included: false }
      ],
      gradient: 'from-blue-300 to-blue-100',
      bgGradient: 'from-blue-900 to-blue-800'
    },
    {
      name: 'Gold Pass',
      price: '499',
      originalPrice: '₹999',
      features: [
        { name: 'Startup Expo', included: true },
        { name: 'LHC Speakers Sessions', included: true },
        { name: 'Informals', included: true },
        { name: 'OAT Event', included: true },
        { name: 'Highlight Speaker Sessions', included: true },
        { name: 'Internship & Job Fair', included: true },
        { name: 'Competitions', included: true },
        { name: 'Networking Arena', included: true },
        { name: 'Incubator Summit', included: false },
        { name: 'Seed Stars', included: false }
      ],
      gradient: 'from-blue-400 to-blue-200',
      bgGradient: 'from-blue-900 to-blue-700',
      popular: true
    },
    {
      name: 'Platinum Pass',
      price: '999',
      originalPrice: '₹1499',
      features: [
        { name: 'Startup Expo', included: true },
        { name: 'LHC Speakers Sessions', included: true },
        { name: 'Informals', included: true },
        { name: 'OAT Event', included: true },
        { name: 'Highlight Speaker Sessions', included: true },
        { name: 'Internship & Job Fair', included: true },
        { name: 'Competitions', included: true },
        { name: 'Networking Arena', included: true },
        { name: 'Incubator Summit', included: true },
        { name: 'Seed Stars', included: true }
      ],
      gradient: 'from-blue-500 to-blue-300',
      bgGradient: 'from-blue-900 to-blue-600'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">Grab Your </span>
            <span className="text-blue-400">Passes</span>
            <span className="text-white"> Now!</span>
          </h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold mb-4 hover:bg-blue-700 transition-colors">
            Get Passes
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {passes.map((pass) => (
            <div key={pass.name} className="relative">
              {pass.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`rounded-2xl p-6 bg-gradient-to-br ${pass.bgGradient} border border-blue-700 h-full`}>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${pass.gradient} bg-clip-text text-transparent`}>
                    {pass.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-gray-400 line-through text-lg">{pass.originalPrice}</span>
                    <span className="text-white text-3xl font-bold ml-2">
                      {pass.price === 'FREE' ? 'FREE' : `₹${pass.price}`}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {pass.features.map((feature) => (
                    <div key={feature.name} className="flex items-center space-x-3">
                      {feature.included ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircleIcon className="w-5 h-5 text-red-400" />
                      )}
                      <span className="text-gray-300">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPasses;