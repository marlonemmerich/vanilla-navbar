import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';
import {genericNavbarElementInterface} from './navbar-element';

export class DropDownCustomItem extends NavbarElement implements genericNavbarElementInterface {
    href: string;
    src: string;
    private _html: string;

    constructor(dropDown: DropDownCustomItem) {
        super(dropDown);
        Object.assign(this, dropDown);
        this.build();
    }

    get html() {
        return this._html;
    }

    set html(html) {
        this._html = html;
    }

    build(): void {
        let option1DropDown1 = document.createElement('div');
        option1DropDown1.id = Utils.generateUUID();
        option1DropDown1.innerHTML = this.html;

        this.htmlElementSource = option1DropDown1;
        this.insertOnClickEvent(this);
    }
};