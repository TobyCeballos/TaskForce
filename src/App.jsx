import "./App.css";
import Sidebar from "./components/Sidebar";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import homeImage from "./assets/homeImage.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function App() {
  return (
    <>
      <Sidebar />
      <Swiper
        direction={"vertical"}
        cssMode={true}
        loop={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper h-[100vh] w-[100%] lg:w-[100%]"
      >
        <SwiperSlide>
          <div className=" w-full h-full shadow-xl flex justify-between items-center pl-[100px] bg-white overflow-hidden">
            <div className="flex justify-center w-1/2">
              <div className="flex flex-col justify-center">
              <span className="text-2xl mb-2 tf-text-neutral-400">¡Bienvenido/a!, somos</span>
              <h1 className="text-7xl font-semibold leading-10">TaskForce<span className="tf-text-gold-1 tf-text-large">.</span></h1>
              <span className="text-2xl leading-8 mt-4 text-neutral-3">La solución que tu empresa necesita.</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={homeImage} className="h-[110vh] home-image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="2"
            className="card w-full h-full card-side bg-white shadow-xl flex justify-center items-center"
          >
            <span>SERVICIOS Y/O PLANES</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="2"
            className="card w-full h-full card-side bg-white shadow-xl flex justify-center items-center"
          >
            <span>CLIENTES Y REFERENCIAS</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="2"
            className="card w-full h-full card-side bg-white shadow-xl flex justify-center items-center"
          >
            <span>(idea) INFORMACIÓN DE LA HISTORIA Y ORIGEN DE TASKFORCE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="2"
            className="card w-full h-full card-side bg-white shadow-xl flex justify-center items-center"
          >
            <span>INFORMACION DE CONTACTO +  DATOS LEGALES(OPCIONAL) + PIE DE PAGINA & COPYRIGHT (CONSULTAR TEMA DE REDES SOCIALES)</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
