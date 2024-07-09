import React from 'react'

const App = () => {
  return (
    <>
    
    {/* <h1>Testimonies </h1>  */}
    <img src="images/modi02.png" alt="Example"  className="example-image" />
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-black text-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Frontend Courses</h1>
            <p></p>
            <p className="text-2xl mb-4">
            React
            </p>
            <p className="text-2xl mb-4">
            Html/Css
            </p>
            <p className="text-2xl mb-4">
            Angular
            </p>
            <p className="text-2xl mb-4">
            Vue
            </p>
            <a 
            href="https://latest-pavk.onrender.com/"
              className="inline-block bg-indigo text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Read More
            </a>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Master Data Structure and Algorithm on Ai</h2>
            <p>
            </p>
            <p className="text-2xl mb-4">
            HackerRank
            </p>
            <p className="text-2xl mb-4">
            GeekforGeek
            </p>
            <p className="text-2xl mb-4">
            Codility
            </p>
            <p className="text-2xl mb-4">
            Codify
            </p>
            
            <a 
            href="https://latest-pavk.onrender.com/projects"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className="App">
        <header className="App-header">
        <h2 className="text-2xl text-indigo-500 mb-6 text-center">
           <h1>Testimonies </h1> 
            <img src="images/testi03.png" alt="Example"  className="example-image" />
            </h2>
          </header>
        </div>
    </>
  )
}

export default App