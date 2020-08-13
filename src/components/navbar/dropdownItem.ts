import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';

export class DropDownItem extends NavbarElement {
    href: string;
    text: string;

    constructor(dropDown: DropDownItem) {
        super(dropDown);
        Object.assign(this, dropDown);
        this.build();
    }

    build(): void {
        let option1DropDown = document.createElement('a');
        option1DropDown.id = this.idElement ? this.idElement : Utils.generateUUID();
        option1DropDown.href = this.href;
        option1DropDown.innerHTML = this.text;

        this.htmlElementSource = option1DropDown;
        this.insertOnClickEvent(this);
    }
};