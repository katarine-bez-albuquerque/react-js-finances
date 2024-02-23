import { ChangeEvent } from "react";

export interface Iinput {
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
}