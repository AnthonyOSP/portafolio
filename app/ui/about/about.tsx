
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function about() {
    return (
        <article className="about  active mb-3.5" data-page="about"  >

            <header>
                <h2 className="h2 article-title mb-3.5">About me </h2>
            </header>

            <section className="about-text text-[#D6D6D6] text-[14px] font-light leading-[1.6rem]">
                <p className='mb-[15px]'>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy
                    turning complex problems into simple, beautiful and intuitive designs.
                </p>

                <p className="mb-[15px]">
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>

            <section className="service mb-9">

                <h3 className="h3 service-title mb-5">What i'm doing</h3>

                <ul className="service-list grid grid-cols-2 gap-5">

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/icon-design.svg"
                                alt="esign icon"
                                width="40"
                                height="40"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Web design</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/icon-dev.svg"
                                alt="Web development icon"
                                width="40"
                                height="40"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Web development</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/icon-app.svg"
                                alt="mobile app icon"
                                width="40"
                                height="40"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Mobile apps</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>

                    </li>

                    <li className="service-item relative bg-gradient-to-br from-[#404040] to-[#40404000] to-50% p-5 rounded-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] z-[1] before:absolute before:inset-px before:bg-gradient-to-br before:from-[#2d2d2e40] before:to-[#1b1b1d00] before:to-100% before:rounded-[inherit] before:z-[-1]">

                        <div className="service-icon-box mb-2.5">
                            <Image
                                src="/images/icon-photo.svg"
                                alt="camera icon"
                                width="40"
                                height="40"
                                className="m-auto"
                            />
                        </div>

                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-[7px]">Photography</h4>

                            <p className="service-item-text text-[#d6d6d6] text-[14px] font-light leading-[1.6]">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="testimonials mb-[30px]">

                <h3 className="h3 testimonials-title mb-[20px]">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar flex justify-start items-start gap-[15px] my-[0px] mx-[-15px] py-[25px] px-[15px] pb-[35px] overflow-x-auto	scroll-smooth overscroll-x-contain snap-mandatory">

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)] ">
                                <Image
                                    src="/images/avatar-1.png"
                                    alt="Henry william"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Daniel lewis</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)]">
                                <Image
                                    src="/images/avatar-2.png"
                                    alt="Henry william"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Jessica miller</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)]">
                                <Image
                                    src="/images/avatar-3.png"
                                    alt="Emily evans"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Emily evans</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item min-w-[100%] snap-center">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box absolute top-0 left-0 -translate-y-[25px] translate-x-[15px] bg-gradient-to-br from-[#3f3f40] from-[3%* to-[#303030] to-97% rounded-[14px] shadow-[-4_8px_24px_0_rgba(0,0,0,0.251)]">
                                <Image
                                    src="/images/avatar-4.png"
                                    alt="Henry william"
                                    height="60"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title mb-[7px]" data-testimonials-title>Henry william</h4>

                            <div className="testimonials-text text-[#d6d6d6] text-[14px] font-300 leading-[1.6] line-clamp-4" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </section>

            <div className="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center overflow-y-auto overscroll-contain z-20 pointer-events-none invisible	" data-modal-container>

                <div className="overlay fixed top-0 left-0 w-full h-screen bg-[0d0d0d] opacity-0 invisible pointer-events-none z-[1] duration-[250ms] ease-linear" data-overlay></div>

                <section className="testimonials-modal bg-[#1e1e1f] relative p-[15px] my-[15px] mx-[12px] border-[1px] border-solid border-[#383838] rounded-[14px] shadow-[0_24px_80px_0px_rgba(0,0,0,0.25)] scale-125 opacity-[0] duration-500 ease-in-out z-[2]">

                    <button className="modal-close-btn absolute top-[15px] right-[15px] bg-[#2b2b2c] rounded-[8px] w-[32px] h-[32px] flex content-center items-center text-[#fafafa] text-[18px] opacity-70 hover:opacity-100 focus:opacity-100" data-modal-close-btn>
                        <XMarkIcon  className="w-[50px]"/>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box g-gradient-to-br from-[#3f3f40] to-3% to-[#303030] to-97% w-max rounded-[14px] mb-[15px] shadow-[0_16px_30px_rgba(0,0,0,0.25)] ">
                            <img src="./images/avatar-1.png" alt="Daniel lewis" width="80" className="hidden" data-modal-img />
                        </figure>

                        <img src="./images/icon-quote.svg" alt="quote icon" className='hidden' />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title mb-[4px]" data-modal-title>Daniel lewis</h4>

                        <time dateTime="2021-06-14" className="text-[14px] text-[d6d6d6b3] font-300 mb-[10px]">14 June, 2021</time>

                        <div data-modal-text>
                            <p className="text-[#d6d6d6] text-[14px] font-300 leading-[1.6]">
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience
                                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing
                                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>

                    </div>

                </section>

            </div>

            <section className="clients mb-[15px]">

                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar flex content-start items-start gap-[15px] my-[0px] mx-[-15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth overscroll-x-contain snap-mandatory scroll-ps-[25px]">

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-1-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-2-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-3-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-4-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-5-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                    <li className="clients-item min-w-[50%] snap-start">
                        <a href="#">
                            <img src="./images/logo-6-color.png" alt="client logo" className="w-full grayscale-[1] duration-[250ms] ease-linear hover:grayscale-0"/>
                        </a>
                    </li>

                </ul>

            </section>
        </article>
    )
}
