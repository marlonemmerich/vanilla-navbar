import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';

export class Item extends NavbarElement {
    href: string;
    src: string;
    text: string;

    constructor(item: Partial<Item>) {
        super(item);
        Object.assign(this, item);
        this.build();
    }

    build(): void {
        let item = document.createElement('a');
        item.id = this.idElement ? this.idElement : Utils.generateUUID();
        item.href = this.href;
        item.className = `${this.getElementClasses()}`;
        item.innerHTML = this.text;

        this.htmlElementSource = item;
        this.insertOnClickEvent(this);
    }
};