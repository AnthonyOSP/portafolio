'use client'
import React, { useState } from 'react';
import styles from './sidebar.module.css'
import { ChevronDownIcon, EnvelopeIcon, DevicePhoneMobileIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaGithub } from "react-icons/fa";


export default function Sidebar() {

    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
      };

    return (
        <>
            <aside className={`${styles.sidebar} ${isActive ? styles.active : ''}`} data-sidebar>
                <div className={styles.sidebarInfo}>
                    <figure className={styles.avatarBox}>
                        <img
                            src="/images/dev-portafolio1.webp"
                            alt="Richard hanrick"
                            width="80"
                            height="70"
                        />
                    </figure>

                    <div className={styles.infoContent}>
                        <h1 className={styles.name} title="Anthony Saavedra">
                            Anthony Saavedra
                        </h1>

                        <p className={styles.title}>Web developer</p>
                    </div>

                    <button id="infoMoreBtn" className={styles.infoMoreBtn} onClick={handleToggle} data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ChevronDownIcon className="size-3" />
                    </button>
                </div>

                <div className={styles.sidebarInfoMore}>
                    <div className={styles.separator}></div>
                    <ul className={styles.contactsList}>
                        <li className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <div className={styles.iconBoxclip}>
                                    <EnvelopeIcon className="size-6" />
                                </div>
                            </div>

                            <div className={styles.contactInfo}>
                                <p className={styles.contactTitle}>Email</p>

                                <a href="mailto:anthonysaa93@gmail.com" className={styles.contactLink}> anthonysaa93@gmail.com
                                </a>
                            </div>
                        </li>

                        {/* <li className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <DevicePhoneMobileIcon className="size-6" />
                            </div>

                            <div className={styles.contactInfo}>
                                <p className={styles.contactTitle}>Celular</p>

                                <a href="tel:+51 953727689" className={styles.contactLink}>
                                    +51 953 727 689
                                </a>
                            </div>
                        </li> */}

                        <li className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <CalendarDaysIcon className="size-6" />
                            </div>

                            <div className={styles.contactInfo}>
                                <p className={styles.contactTitle}>Cumpleaños</p>

                                <time dateTime="1982-06-23">Noviembre 05</time>
                            </div>
                        </li>

                        <li className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <MapPinIcon className="size-6" />
                            </div>

                            <div className={styles.contactInfo}>
                                <p className={styles.contactTitle}>Ubicación</p>

                                <address>Lima, Perú</address>
                            </div>
                        </li>
                        <li className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <FaGithub />
                            </div>

                            <div className={styles.contactInfo}>
                                <p className={styles.contactTitle}>GitHub</p>

                                <p className="text-[#fafafa]">AnthonySP</p>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.separator}></div>
                </div>
            </aside>
        </>
    )
}
