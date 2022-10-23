import React from 'react'
import 'flowbite';
import './App.css'

function Carousel() {
  return (
    <>
    <div className=''>
    <main>
      <div>
        <title>Tailwind CSS Carousel</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" /> 
        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.carousel-open:checked + .carousel-item {\n\t\t\t\tposition: static;\n\t\t\t\topacity: 100;\n\t\t\t}\n\t\t\t.carousel-item {\n\t\t\t\t-webkit-transition: opacity 0.6s ease-out;\n\t\t\t\ttransition: opacity 0.6s ease-out;\n\t\t\t}\n\t\t\t#carousel-1:checked ~ .control-1,\n\t\t\t#carousel-2:checked ~ .control-2,\n\t\t\t#carousel-3:checked ~ .control-3 {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.carousel-indicators {\n\t\t\t\tlist-style: none;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 2%;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\ttext-align: center;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,\n\t\t\t#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,\n\t\t\t#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {\n\t\t\t\tcolor: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */\n\t\t\t}\n\t\t" }} />
        <div className="carousel relative shadow-2xl bg-white">
          <div className="carousel-inner relative overflow-hidden w-full">
            {/*Slide 1*/}
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
            <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
              <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
            </div>
            <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            {/*Slide 2*/}
            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
            <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
              <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
            </div>
            <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
            {/*Slide 3*/}
            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
            <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
              <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
            </div>
            <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            {/* Add additional indicators for each slide*/}
            <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li className="inline-block mr-3">
                <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li className="inline-block mr-3">
                <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
    </div>
    
    </>
  )
}

export default Carousel