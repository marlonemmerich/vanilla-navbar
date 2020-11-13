import { v4 as uuidv4 } from 'uuid';
import { NavbarElement } from './navbar-element';

export default class Item extends NavbarElement {
    href: string;

    src: string;

    text: string;

    constructor(item: Partial<Item>) {
      super(item);
      Object.assign(this, item);
      this.build();
    }

    build(): void {
      const item = document.createElement('a');
      item.id = this.idElement ? this.idElement : uuidv4();
      item.href = this.href;
      item.className = `${this.getElementClasses()}`;
      item.innerHTML = this.text;

      this.htmlElementSource = item;
      this.insertOnClickEvent(this);
    }
}
