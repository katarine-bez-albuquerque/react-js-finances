import { ILink } from "./ILink";

const Link = ({ href, name }:ILink) => {
    return(
        <a target="_blank" href={ href }>{ name }</a>
    );
}

export default Link;