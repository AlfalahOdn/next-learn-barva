import React from 'react'
import Navbar from 'components/Navbar'

const about = () => {
  return (
   <div>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Our Company</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          At Barvalabs, we envision a future where Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum dolor. Mauris lobortis at justo nec consectetur. Cras efficitur convallis tincidunt. Sed blandit augue metus. Nam in rhoncus leo. Vestibulum in posuere libero. Donec ut erat ante. Ut egestas molestie augue, ut imperdiet dui. Nunc volutpat, nisl eu dictum fringilla, urna massa scelerisque elit, in tempus nibh nisl ac erat. Duis at tempor ipsum. Praesent vel rutrum ipsum. Suspendisse potenti.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission at Barvalabs is to Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum dolor. Mauris lobortis at justo nec consectetur. Cras efficitur convallis tincidunt. Sed blandit augue metus. Nam in rhoncus leo. Vestibulum in posuere libero. Donec ut erat ante. Ut egestas molestie augue, ut imperdiet dui. Nunc volutpat, nisl eu dictum fringilla, urna massa scelerisque elit, in tempus nibh nisl ac erat. Duis at tempor ipsum. Praesent vel rutrum ipsum. Suspendisse potenti..
        </p>
      </section>
    </div>
    </div>
  )
}

export default about