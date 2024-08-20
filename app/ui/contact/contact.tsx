import { FaRegPaperPlane } from "react-icons/fa";


export default function contact() {
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

                <form action="#" className="form" data-form>

                    <div className="input-wrapper grid grid-cols-1 gap-[25px] mb-[25px] ">
                        <input type="text" name="fullname" className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#ffdb70]" placeholder="Nombre Completo" required data-form-input />

                        <input type="email" name="email" className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#ffdb70]" placeholder="Email" required data-form-input />
                    </div>

                    <textarea name="message" className="form-input text-[#fafafa] text-[14px] font-normal py-[13px] px-5 border border-solid border-[#383838] rounded-[14px] outline-none min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] placeholder:font-medium  focus:border-[#ffdb70]" placeholder="Tu mensaje" required data-form-input></textarea>

                    <button className="form-btn relative w-full bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% text-[#ffdb70] flex justify-center items-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] capitalize shadow-custom-shadow-3 z-[1] duration-300 ease-in" type="submit" disabled data-form-btn>
                        <FaRegPaperPlane className='w-[16px]'/>
                        <span className='font-semibold'>Send Message</span>
                    </button>

                </form>

            </section>

        </article>

    )
}
