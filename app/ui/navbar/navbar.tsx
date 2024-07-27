

export default function navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-List">
                    <li className="navbar-item">
                        <button className="navbar-link  active" data-nav-link>Sobre mi</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link>Resumen</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link>Portfolio</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link>Blog</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link>Contacto</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
