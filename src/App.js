import React from 'react'



const App = () => {
  return (
    <>
    <h1><b>EduTechRiTT</b></h1><h6><i>Learning Hub</i></h6>
    <img src="images/rit001 1.png" alt="Example" 
     className="example-image" />
     <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="md:ml-auto">
            <a 
              href="https://latest-pavk.onrender.com/"
                 className="text-white bg-grey hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                   Continue Reading -
         </a>
              <div className="flex space-x-2"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-black text-white p-6 rounded-lg shadow-md"> 
            <h1 className="text-2xl font-bold"><u>Frontend Courses</u></h1>
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
              className="inline-block bg-indigo text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              Read More
            </a>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold"><u>Master Data Structure and Algorithm on Ai</u></h2>
            <p>
            </p>
            <p className="text-2xl mb-4">
            HackerRank
            </p>
            <p className="text-2xl mb-4">
            GeeksforGeeks
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
            <img src="images/04.png" alt="Example"  className="example-image" />
            </h2>
          </header>
        </div>

        <div className="footer-below">
        <div className="footer-copyright">
          <p>
              {(new Date().getFullYear())} All right reserved ---&gt; (EduRiTT). 
          </p>
        </div>
        </div>
  </>
        
  )
}

export default App