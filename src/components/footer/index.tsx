import Column from "../column";
import { Ifooter } from "./Ifooter";

const Footer = ({ classname }:Ifooter) => {
    return(
        <footer className={ classname }>
            <Column classname="column p">
                <h6>@Financial Control 2024</h6>
                <h6>All rights reserved.</h6>
            </Column>            
        </footer>
    );
}

export default Footer;