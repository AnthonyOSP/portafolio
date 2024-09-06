import { ChevronDownIcon, EyeIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface Projects {
    image: string;
    title: string;
    category: string;
    link?: string;
}

export default function portfolio() {

    const projects: Projects[] = [
        {
            image: '/images/project-1.jpg',
            title: 'Finance',
            category: 'Web development',
            link: '#',
        },
        {
            image: '/images/project-2.png',
            title: 'Orizon',
            category: 'Web development',
            link: '#',
        },
        {
            image: '/images/project-3.jpg',
            title: 'Fundo',
            category: 'Web design',
            link: '#',
        },
        {
            image: '/images/project-4.png',
            title: 'Brawlhalla',
            category: 'Applications',
            link: '#',
        },
        {
            image: '/images/project-5.png',
            title: 'DSM.',
            category: 'Web design',
            link: '#',
        },
        {
            image: '/images/project-6.png',
            title: 'MetaSpark',
            category: 'Web design',
            link: '#',
        },
        {
            image: '/images/project-7.png',
            title: 'Summary',
            category: 'Web development',
            link: '#',
        },
        {
            image: '/images/project-8.jpg',
            title: 'Task Manager',
            category: 'Applications',
            link: '#',
        },
        {
            image: '/images/project-9.png',
            title: 'Arrival',
            category: 'Web development',
            link: '#',
        },
    ];

    return (
        <article className="portfolio active" data-page="portfolio">

            <header>
                <h2 className="h2 article-title md:pb-[20px]">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="project-list grid grid-cols-1 gap-[30px] mb-[10px] md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((projects, index) => (
                        <li key={index} className="project-item block ">
                            <a href={projects.link} className="groupa w-full">
                                <figure className="project-img relative w-full h-[200px] rounded-[16px] overflow-hidden mb-[15px] sm:rounded-[16px]">
                                    <div className="project-item-icon-box bg-[#383838] text-[#0066ff] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 scale-90 text-[20px] p-[18px] rounded-[12px] opacity-0 z-[1] transition ease duration-[250ms] groupa-hover:scale-100 groupa-hover:opacity-100">
                                        <EyeIcon className='w-[50px]' />
                                    </div>
                                    <img src={projects.image} alt={projects.title} loading="lazy" className="w-full h-full object-cover transition ease duration-[250ms]" />
                                </figure>
                                <h3 className="project-title ml-2.5 text-[#fafafa] text-[15px] font-normal capitalize leading-5">{projects.title}</h3>
                                <p className="project-category ml-2.5 text-[#d6d6d6b3] text-[14px] font-light">{projects.category}</p>
                            </a>
                        </li>
                    ))}

                </ul>
            </section>

        </article>
    )
}
