export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Widgets</a></li>
                <li>
                    <button aria-expanded="false">Apps</button>
                    <ul className="sub-menu" aria-label="Apps">
                        <li><a href="#">Bla</a></li>
                        <li><a href="#">Tales</a></li>
                        <li><a href="#">Pascuales</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
  }