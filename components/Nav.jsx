import { Link } from "react-scroll"

const links = [
    {
        path: 'home',
        name: 'home',
        offset: -50
    },
    {
        path: 'menu',
        name: 'menu',
        offset: -50
    },
    {
        path: 'about',
        name: 'about',
        offset: -150
    },
    {
        path: 'contact',
        name: 'contact',
        offset: -0
    },
]


const Nav = ({containerStyles, linkStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        {
            links.map(({name, path, offset}, i) => (
                <Link key={i} spy={true} smooth={true} offset={offset} duration={500}
                className={`${linkStyles}`} to={path}
                >
                {name}
                </Link>
            ))
        }
    </nav>
    )
}

export default Nav