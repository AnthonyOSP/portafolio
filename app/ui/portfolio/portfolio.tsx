import { ChevronDownIcon, EyeIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function portfolio() {
    return (
        <article className="portfolio active" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list hidden">

                    <li className="filter-item">
                        <button className="active" data-filter-btn>All</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn>Web design</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn>Applications</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn>Web development</button>
                    </li>

                </ul>

                <div className="filter-select-box relative mb-[25px]">

                    <button className="filter-select bg-[#1e1e1f] text-[#d6d6d6] flex justify-between items-center w-full py-[12px] px-[16px] border border-solid border-[#383838] text-[14px] font-light" data-select>

                        <div className="select-value" data-selecct-value>Select category</div>

                        <div className="select-icon">
                            <ChevronDownIcon />
                        </div>

                    </button>

                    <ul className="select-list absolute bg-[#1e1e1f] top-[calc(100%_+_6px)] w-full p-[6px] border border-solid border-[#383838] rounded-[14px] z-[2] opacity-0 invisible pointer-events-none transition duration-150 ease-in-out">

                        <li className="select-item">
                            <button data-select-item>All</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web design</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Applications</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web development</button>
                        </li>

                    </ul>

                </div>

            </section>

        </article>
    )
}
