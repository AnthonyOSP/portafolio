import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title mb-3.5">Resumen</h2>
      </header>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-[15px] mb-[25px]">
          <div className="icon-box relative bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% w-[35px] h-[35px] rounded-[8px] flex justify-center items-center text-[16px] shadow-custom-shadow z-[1] ">
            <BookOpenIcon className="w-[20px] text-[#0066ff]" />
          </div>

          <h3 className="h3">Educación</h3>
        </div>

        <ol className="timeline-list text-[14px] ml-[45px]">
          <li className="timeline-item relative mb-[20px]">
            <h4 className="h4 timeline-item-title text-sm mb-[7px]">
              Plataformas Online
            </h4>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2020 — Actualidad
            </span>

            <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              Cursos de desarrollo front y backend en
              <strong className="font-extrabold"> Platzy</strong>,
              <strong className="font-extrabold"> CodigoFacilito</strong> y
              <strong className="font-extrabold"> Udemy</strong>.
            </p>
          </li>

          <li className="timeline-item relative mb-[20px]">
            <h4 className="h4 timeline-item-title text-sm mb-[7px]">
              Universidad de San Martin De Porres
            </h4>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2015 — Actualidad
            </span>

            <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              Carrera de ingenieria de sistemas y software, para la creación de
              aplicación modernas.
            </p>
          </li>

          <li className="timeline-item relative mb-[20px]">
            <h4 className="h4 timeline-item-title text-sm mb-[7px]">
              Instituto Cultural Peruano Norteamericano
            </h4>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2010 — 2015
            </span>

            <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              Cursos de inglés avanzado.
            </p>
          </li>

          <li className="timeline-item relative">
            <h4 className="h4 timeline-item-title text-sm mb-[7px]">
              Universidad Privada TELESUP
            </h4>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2010 — 2014
            </span>

            <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              Cursos de informatica, con especialidad en desarrollo de software.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-[15px] mb-[25px]">
          <div className="icon-box relative bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% w-[35px] h-[35px] rounded-[8px] flex justify-center items-center text-[16px] text-[#0066ff] shadow-custom-shadow z-[1]">
            <BookOpenIcon className="w-[20px]" />
          </div>

          <h3 className="h3">Experiencia Laboral</h3>
        </div>

        <ol className="timeline-list text-[14px] ml-[45px]">
          <li className="timeline-item relative mb-[20px]">
            <div className="namework flex gap-3">
              <h4 className="h4 timeline-item-title text-sm mb-[7px]">
                AV Arquitectos
              </h4>
              <span className="text-[#b3b3b3]">Asistente de Sistemas, Ica</span>
            </div>
            <span className="text-[#0060AA] font-normal leading-relaxed">
              2022 — Actualidad
            </span>

            <ul className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              <li>•Desarrollo de aplicaciones web (Html, JS, React) </li>
              <li>•Supervisión de la página web y correos coorporativos </li>
              <li>•Instalación de software </li>
              <li>• Inventario de equipos adquiridos por la empresa</li>
            </ul>
          </li>

          <li className="timeline-item relative mb-[20px]">
            <div className="namework flex gap-3">
              <h4 className="h4 timeline-item-title text-sm mb-[7px]">
                WEBHELP
              </h4>
              <span className="text-[#b3b3b3]">Agente, Lima</span>
            </div>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2020 — 2024
            </span>
            <ul className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
              <li>•Asistente técnico bilingüe en BOSE para USA y LATAM </li>
              <li>•Solución de problemas </li>
              <li>•Desarrollo de aplicativo Web (React)</li>
            </ul>
          </li>

          <li className="timeline-item relative">
            <div className="namework flex gap-3">
              <h4 className="h4 timeline-item-title text-sm mb-[7px]">
                LosTampato
              </h4>
              <span className="text-[#b3b3b3]">Soporte TI , Lima</span>
            </div>

            <span className="text-[#0060AA] font-normal leading-relaxed">
              2016 — 2018
            </span>

            <ul className="timeline-text text-[#d6d6d6] font-light leading-relaxed ">
              <li>•Asistente del área de sistemas </li>
              <li>•Revisión de inventario</li>
              <li>•Propuestas de adquisiciones de nuevo hardware</li>
              <li>•Revisión de redes</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title mb-5">Skills</h3>

        <ul className="skills-list content-card p-5">
          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center gap-5 mb-[8px]">
              <h5 className="h5">Diseño Web</h5>
              <data
                className="text-[#d6d6d6] text-[13px] font-light"
                value="80"
              >
                80%
              </data>
            </div>

            <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
              <div className="skill-progress-fill w-4/5 h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
          </li>

          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center gap-5 mb-[8px]">
              <h5 className="h5">Aplicaciones Web</h5>
              <data
                className="text-[#d6d6d6] text-[13px] font-light"
                value="70"
              >
                70%
              </data>
            </div>

            <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
              <div className="skill-progress-fill w-[70%] h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
          </li>

          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center gap-5 mb-[8px]">
              <h5 className="h5">Front-End</h5>
              <data
                className="text-[#d6d6d6] text-[13px] font-light"
                value="90"
              >
                90%
              </data>
            </div>

            <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
              <div className="skill-progress-fill w-[90%] h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper flex items-center gap-5 mb-[8px]">
              <h5 className="h5">Back-End</h5>
              <data
                className="text-[#d6d6d6] text-[13px] font-light"
                value="50"
              >
                50%
              </data>
            </div>

            <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
              <div className="skill-progress-fill w-1/2 h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
