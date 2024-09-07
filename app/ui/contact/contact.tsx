'use client';
import * as React from 'react';
import { useState } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [validate, setValidate] = useState({
        fullName: '',
        email: ''
    });


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if ((name === 'fullName') && value.length >= 30) {
            setValidate({
                ...validate,
                [name]: 'Has alcanzado el límite de 30 caracteres'
            });
            return;
        } else {
            setValidate({
                ...validate,
                [name]: ''
            });
        }

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setValidate({
                    ...validate,
                    email: 'El formato del correo electrónico no es válido'
                });
            } else {
                setValidate({
                    ...validate,
                    email: ''
                });
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setValidate({
                ...validate,
                email: 'El formato del correo electrónico no es válido'
            });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsModalOpen(true);
                setFormData({
                    fullName: '',
                    email: '',
                    message: ''
                });
                setValidate({
                    fullName: '',
                    email: ''
                });
            } else {
                alert('Error al enviar el mensaje');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error al enviar el mensaje:', error);
            alert('Error al enviar el mensaje');
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const isFormValid = formData.fullName && formData.email && formData.message && !validate.email;;

    return (
        <article className="contact active" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contacto</h2>
            </header>

            <section className="mapbox relative h-[250px] w-full rounded-[16px] mb-[30px] border border-solid border-[#383838] overflow-hidden	" data-mapbox>
                <figure className='h-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239571.3324361877!2d-77.1493481423564!3d-12.025331559955927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1723633260007!5m2!1ses-419!2spe" width="100%" height="100%" loading="lazy" className='border-none grayscale invert'></iframe>
                </figure>
            </section>

            <section className="contact-form mb-2.5">

                <h3 className="h3 form-title mb-5">Enviame un mensaje</h3>

                <form onSubmit={handleSubmit} className="form" data-form>

                    <div className="input-wrapper grid grid-cols-1 gap-[25px] mb-[25px] ">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#ffdb70]"
                                placeholder="Nombre Completo"
                                required
                                maxLength={30}
                                data-form-input
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            {validate.fullName && <p className="text-red-500 text-sm">{validate.fullName}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#ffdb70]"
                                placeholder="Email"
                                required
                                maxLength={50}
                                data-form-input
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {validate.email && <p className="text-red-500 text-sm">{validate.email}</p>}
                        </div>
                    </div>

                    <textarea
                        name="message"
                        className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] placeholder:font-medium  focus:border-[#ffdb70]"
                        placeholder="Tu mensaje"
                        required
                        data-form-input
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <button
                        className="form-btn relative w-full bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% text-[#ffdb70] flex justify-center items-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] capitalize shadow-custom-shadow-3 z-[1] duration-300 ease-in"
                        type="submit"
                        disabled={!isFormValid}
                        data-form-btn>
                        <FaRegPaperPlane className='w-[16px]' />
                        <span className='font-semibold'>Send Message</span>
                    </button>

                </form>

                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <React.Fragment>
                            <svg width={0} height={0}>
                                <defs>
                                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#e01cd5" />
                                        <stop offset="100%" stopColor="#1CB5E0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
                        </React.Fragment>

                    </div>
                )}

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
                            <span className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={closeModal}>&times;</span>
                            <p>Mensaje enviado con éxito!</p>
                            <button className="flex content-center items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={closeModal}>OK</button>
                        </div>
                    </div>
                )}



            </section>

        </article>

    )
}
export default ContactForm;