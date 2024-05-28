import NavLink from "./navLink";

//Const
import { MAIN_HEADER_ROUTE } from "./const/route"

export default function MainHeader() {

  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href={MAIN_HEADER_ROUTE.HOME} >NextNews</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={MAIN_HEADER_ROUTE.NEWS} >News</NavLink>
          </li>
          <li>
            <NavLink href={MAIN_HEADER_ROUTE.ARCHIVE} >Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}