import { useState } from 'react';
import Image from 'next/image';
import {XMarkIcon} from '@heroicons/react/24/outline'

export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const testimonials = [
        {
            avatar: '/images/avatar-1.png',
            name: 'Gustavo Diaz',
            title: 'Bose Team Leader',
            text: 'Anthony fue contratado para crear una identidad corporativa. Quedamos muy satisfechos con el trabajo realizado. Se preocupa mucho por las necesidades del cliente.',
            datetime:'14 June, 2021',
        },
        {
            avatar: '/images/avatar-4.png',
            name: 'Arturo Valle',
            title: 'AV Arquitectos',
            text: 'Nos ayudó a implementar nuestra página web y correos corporativos. Sus observaciones nos ayudaron a reducir costos y tiempo de proyectos. Diseñó el sistema de clientes y las aplicaciones que necesitábamos. Siempre puntual con las entregas. Estamos muy felices con su trabajo.',
            datetime:'14 June, 2022',
        },
        {
            avatar: '/images/avatar-2.png',
            name: 'Alejandra Burgos',
            title: 'AlejandraStore',
            text: 'Diseñó y desarrolló la tienda que nos ayudó a incrementar nuestras ventas. Agradecida con todas las ideas innovadoras que tenía en mente. Siempre contamos con él para nuevos proyectos, su profesionalismo es indiscutible.',
            datetime:'14 June, 2023',
        },
    ];

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    return (
        <>
            <ul className="testimonials-list has-scrollbar flex justify-start items-start gap-[15px] my-[0px] mx-[-15px] py-[25px] px-[15px] pb-[35px] overflow-x-auto	scroll-smooth overscroll-x-contain snap-mandatory">
                {testimonials.map((testimonial, index) => (
                    <li key={index} className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item onClick={() => openModal(testimonial)}>
                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)] ">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>
                                {testimonial.name} - {testimonial.title}
                            </h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>{testimonial.text}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modal */}
            {isModalOpen && selectedTestimonial && (
                <div className="modal-container fixed inset-0 flex justify-center items-center overflow-y-auto z-[200] pointer-events-auto">
                    <div className="overlay fixed top-0 left-0 w-full h-screen  bg-[#0d0d0d] opacity-[0.8] visible pointer-events-auto z-[1] transition duration-300 ease-linear" data-overlay>
                        <section className="testimonials-modal bg-[#1e1e1f] relative p-[15px] border border-solid border-[#383838] rounded-[14px] shadow-[0_24px_80px_0px_rgba(0,0,0,0.25)] transition duration-300 ease-linear z-[2] scale-100 max-w-[90vw] max-h-[90vh] overflow-auto ">
                            <button onClick={closeModal} className="modal-close-btn absolute top-4 right-4 bg-[#2b2b2c] rounded-[8px] w-[32px] h-[32px] flex justify-center items-center text-[#fafafa] text-[18px] opacity-[0.7] hover:opacity-100 focus:opacity-100">
                                <XMarkIcon className='w-[25px]'/>
                            </button>
                            <div className='modal-img-wrapper flex flex-col items-center'>
                                <figure className="modal-avatar-box g-gradient-to-br from-[#3f3f40] to-3% to-[#303030] to-97% w-max rounded-[14px] mb-[15px] shadow-[0_16px_30px_rgba(0,0,0,0.25)">
                                    <img
                                        src={selectedTestimonial.avatar}
                                        alt={selectedTestimonial.name}

                                        className='w-[65px]'
                                        data-testimonials-avatar
                                    />
                                </figure>
                                <img src="../../../public/images/icon-quote.svg" alt="quote icon" className='block grow w-[35px]' />
                            </div>
                            <div className="modal-content">
                                <h4 className="h4 testimonials-item-title mb-[4px]" data-testimonials-title>
                                    {selectedTestimonial.name} - {selectedTestimonial.title}
                                </h4>
                                <time className='text-[14px] text-[#d6d6d6b3] font-light mb-[10px]'>{selectedTestimonial.datetime}</time>

                                <div className="data-modal-text" data-testimonials-text>
                                    <p className='text-[#d6d6d6] text-[14px] font-300 leading-[1.6]'>{selectedTestimonial.text}</p>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
