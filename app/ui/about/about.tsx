"use client";

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Testimonials from './modal';


export default function about() {

    return (
        <article className="about  active " data-page="about"  >

            <header>
                <h2 className="h2 article-title mb-3.5">¿Quien Soy? </h2>
                
            </header>

            <section className="about-text text-[#D6D6D6] text-[14px] font-light leading-[1.6rem]">
                <p className="mb-[15px]">
                    Amante del desarrollo de aplicaciones Web, con conocimientos sólidos en HTML, CSS y JavaScript, y experiencia en el uso
                    de frameworks y librerías actuales como React con NextJS. También cuento con conocimientos en Back-End y Base de datos SQL.
                </p>

                <p className="mb-[15px]">
                    Entusiasta de las nuevas tecnologias y de alto rendimiento, con un fuerte enfoque en la experiencia del usuario y atención al detalle. Estoy en busca de oportunidades que me permitan aplicar y ampliar mis conocimientos en un entorno colaborativo y dinámico.
                </p>
            </section>

            <section className="service mb-9">

                <h3 className="h3 service-title mb-5">¿Que es lo que hago?</h3>

                <ul className="service-list grid grid-cols-2 gap-5">

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/DESIGN.png"
                                alt="Design icon"
                                width="70"
                                height="70"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Diseño Web</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                El diseño más moderno y de mayor calidad realizado a nivel profesional.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/WEB.png"
                                alt="Web development icon"
                                width="70"
                                height="70"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Desarrollo web</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                Desarrollo de sitios de alta calidad a nivel profesional.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/APP.png"
                                alt="mobile app icon"
                                width="70"
                                height="70"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Mobile apps</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                Desarrollo profesional de aplicaciones para iOS y Android con React Native.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/DB.png"
                                alt="camera icon"
                                width="70"
                                height="70"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Base de datos</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                Administración de base datos SQL
                            </p>
                        </div>
                    </li>
                </ul>
                <p className='text-[#fafafa] flex gap-1 text-[12px] mt-[10px] justify-end'>* Iconos gracias a <a target="_blank" href="https://icons8.com" className='text-white'>Icons8</a></p>
            </section>

            {/* <section className="testimonials mb-[30px]">

                <h3 className="h3 testimonials-title mb-[20px]">Testimonios</h3>

                <ul className="testimonials-list has-scrollbar flex justify-start items-start gap-[15px] my-[0px] mx-[-15px] py-[25px] px-[15px] pb-[35px] overflow-x-auto	scroll-smooth overscroll-x-contain snap-mandatory">

                    <li className="testimonials-item min-w-[100%] snap-center">

                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)] ">
                                <Image
                                    src="/images/avatar-1.png"
                                    alt="Gustavo Diaz"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Gustavo Diaz - Bose Team Leader</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Anthony fue contratado para crear una identidad corporativa. Quedamos muy satisfechos con el trabajo realizado. Se preocupa mucho por las necesidades del cliente.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)]">
                                <Image
                                    src="/images/avatar-4.png"
                                    alt="Arturo Valle"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Arturo Valle - AV Arquitectos</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Nos ayudó a impletar nuestra página web y correos corporativos. Sus observaciones nos ayudaron a reducir costos y tiempo de proyectos.Diseño el sistema de clientes y las aplicaciones que necesitabamos. Siempre puntual que las entregas. Estamos muy felices con su trabajo.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)]">
                                <Image
                                    src="/images/avatar-2.png"
                                    alt="Alejandra Burgos"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Alejandra Burgos - AlejandraStore</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Diseño y desarrollo la tienda que nos ayudó a incrementar nuestras ventas. Agradecida con todas las ideas innovadoras que tenía en mente. Siempre contamos con el para nuevos proyectos, su profesionalismo es indiscutible.
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </section> */}
            <section className="testimonials mb-[30px]">
                <h3 className="h3 testimonials-title mb-[20px]">Testimonios</h3>
                <Testimonials />
            </section>



            {/* <section className="clients mb-[15px]">

                <h3 className="h3 clients-title">Clients</h3>

                <ul className="e has-scrollbar flex content-start items-start gap-[15px] my-[0px] mx-[-15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth overscroll-x-contain snap-mandatory scroll-ps-[25px]">

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-1-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-2-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-3-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-4-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-5-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-6-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                        </a>
                    </li>

                </ul>

            </section> */}
            <h3 className="h3 clientes-title mb-3.5">Clientes</h3>
            <section className="clientes">
                <div className="clientes-list">
                    <img src="./images/bose.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/av.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/alejandra.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/ChocoIsa.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/bose.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/av.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/alejandra.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/ChocoIsa.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/bose.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/av.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/alejandra.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                    <img src="./images/ChocoIsa.webp" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0" />
                </div>
            </section>
        </article>

    )
}
