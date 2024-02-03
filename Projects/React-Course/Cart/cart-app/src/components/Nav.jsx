import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <nav>
            <ul>
                <li>
                <Link to="cart">Cart page</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;