import Nav from "../nav";
import { Iheader } from "./Iheader";

const Header = ({ classname }:Iheader) => {
    return(
        <header className="header">
            <Nav calssname={ classname } />
        </header>
    );
}

export default Header;