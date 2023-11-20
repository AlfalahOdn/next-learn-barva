import React from 'react'

const Price = () => {
    const pricingPlans = [
        {
          name: 'JELATA',
          price: 'Rp.100.000/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
          name: 'JURAGAN',
          price: 'Rp.250.000/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
          name: 'SULTAN',
          price: 'Rp.500.000/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
      ];
    
      return (
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">PILIH KASTAMU</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded shadow-md grid hover:scale-105 border border-2 border-blue-500 hover:border-orange-400">
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <p className=" font-bold mb-4 lg:text-3xl sm:text-xl text-xl">{plan.price}</p>
                  <ul className="list-disc ml-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-500 text-white py-2 px-4 mt-6 mx-6 rounded hover:bg-blue-700">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Price