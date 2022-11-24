import React from 'react'
import Footer from '../components/home/Footer';
import HeaderNav from '../components/home/HeaderNav';
import Productos from '../components/home/Productos';
import Servicios from '../components/home/Servicios';
const HomePage = () => {

    return (
        <>
            <HeaderNav/> 
            <header className="bg-[url('./assets/portadav1.jpg')] bg-no-repeat bg-cover bg-center object-cover bg-fixed lg:w-full h-[550px]">
                <div className='grid items-center justify-center pt-[48%] md:pt-[28%] lg:pt-[20%] xl:pt-[10%]'>
                    <h1 className='text-4xl md:text-5xl  lg:text-6xl font-bold text-black '>Comunidad agrícola </h1>
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-black pt-5 font-semibold text-center'>Invernaderos hidropónicos</h2> 
                </div>
            </header>
            <section className="bg-white w-full p-5 pt-16 flex flex-col items-center pb-16 ">
            <Productos/>

            </section>
            <section className="bg-gray-100 py-16 flex flex-col items-center">
            <Servicios/>

            </section>
            <footer>
            <Footer/>

            </footer>
        </>
      );
    };

export default HomePage