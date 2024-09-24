import { NavLink } from "react-router-dom";

export const Layout = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Hem</NavLink>
                </li>
                <li>
                    <NavLink to={"/contacts"}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    </>;
};
  