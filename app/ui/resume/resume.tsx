import { BookOpenIcon } from '@heroicons/react/24/outline'

export default function resume() {
  return (
    <article className="resume active" data-page="resume">

        <header>
          <h2 className="h2 article-title mb-3.5">Resumen</h2>
        </header>

        <section className="timeline mb-8">

          <div className="title-wrapper flex items-center gap-[15px] mb-[25px]">
            <div className="icon-box relative bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% w-[35px] h-[35px] rounded-[8px] flex justify-center items-center text-[16px] shadow-custom-shadow z-[1] ">
              <BookOpenIcon className='w-[20px] text-[#0066ff]' />
            </div>

            <h3 className="h3">Educación</h3>
          </div>

          <ol className="timeline-list text-[14px] ml-[45px]">

            <li className="timeline-item relative mb-[20px]">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">University school of the arts</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2007 — 2008</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

            <li className="timeline-item relative mb-[20px]">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">New york academy of art</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2006 — 2007</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                omnis..
              </p>

            </li>

            <li className="timeline-item relative">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">High school of art and design</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2002 — 2004</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                magni dolores
                eos.
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline mb-8">

          <div className="title-wrapper flex items-center gap-[15px] mb-[25px]">
            <div className="icon-box relative bg-gradient-to-br from-[#404040] from-10% to-[#40404000] to-50% w-[35px] h-[35px] rounded-[8px] flex justify-center items-center text-[16px] text-[#0066ff] shadow-custom-shadow z-[1]">
              <BookOpenIcon className='w-[20px]' />
            </div>

            <h3 className="h3">Experiencia Laboral</h3>
          </div>

          <ol className="timeline-list text-[14px] ml-[45px]">

            <li className="timeline-item relative mb-[20px]">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">Creative director</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2015 — Present</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                molestias
                exceptur.
              </p>

            </li>

            <li className="timeline-item relative mb-[20px]">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">Art director</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2013 — 2015</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

            <li className="timeline-item relative">

              <h4 className="h4 timeline-item-title text-sm mb-[7px]">Web designer</h4>

              <span className='text-[#0060AA] font-normal leading-relaxed'>2010 — 2013</span>

              <p className="timeline-text text-[#d6d6d6] font-light leading-relaxed">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

          </ol>

        </section>

        <section className="skill">

          <h3 className="h3 skills-title mb-5">Skills</h3>

          <ul className="skills-list content-card p-5">

            <li className="skills-item mb-4">

              <div className="title-wrapper flex items-center gap-5 mb-[8px]">
                <h5 className="h5">Web design</h5>
                <data className='text-[#d6d6d6] text-[13px] font-light' value="80">80%</data>
              </div>

              <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
                <div className="skill-progress-fill w-4/5 h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </div>

            </li>

            <li className="skills-item mb-4">

              <div className="title-wrapper flex items-center gap-5 mb-[8px]">
                <h5 className="h5">Graphic design</h5>
                <data className='text-[#d6d6d6] text-[13px] font-light' value="70">70%</data>
              </div>

              <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
                <div className="skill-progress-fill w-[70%] h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </div>

            </li>

            <li className="skills-item mb-4">

              <div className="title-wrapper flex items-center gap-5 mb-[8px]">
                <h5 className="h5">Branding</h5>
                <data className='text-[#d6d6d6] text-[13px] font-light' value="90">90%</data>
              </div>

              <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
                <div className="skill-progress-fill w-[90%] h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper flex items-center gap-5 mb-[8px]">
                <h5 className="h5">WordPress</h5>
                <data className='text-[#d6d6d6] text-[13px] font-light' value="50">50%</data>
              </div>

              <div className="skill-progress-bg bg-[#383838] w-full h-2 rounded-[10px]">
                <div className="skill-progress-fill w-1/2 h-full inherit-border-radius bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </div>

            </li>

          </ul>

        </section>

      </article>
  )
}
