import Link from "../link";
import Logo from "../../assets/imgs/finance.png";
import Row from "../row";
import { Inav } from "./Inav";

const Nav = ({ calssname }:Inav) => {
    return(
        <nav className={ calssname }>
            <Row classname="row plateral">
                <span><img src={Logo} alt="Logo"/> Financial Control</span>
                <ul>
                    <li>
                        <Link 
                        href="https://www.linkedin.com/in/katarine-albuquerque/" 
                        name="Linkedin"/>
                    </li>
                    <li>
                        <Link 
                        href="https://github.com/katarine-bez-albuquerque" 
                        name="Github"/>
                    </li>
                </ul>
            </Row>            
        </nav>
    );
}

export default Nav;