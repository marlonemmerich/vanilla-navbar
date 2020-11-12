import Utils from '../../utils/utils';
import { NavbarElement, genericNavbarElement } from './navbar-element';

export default class DropDownCustomItem extends NavbarElement implements genericNavbarElement {
    href: string;

    src: string;

    private _html: string;

    constructor(dropDown: Partial<DropDownCustomItem>) {
      super(dropDown);
      Object.assign(this, dropDown);
      this.build();
    }

    get html() {
      // eslint-disable-next-line no-underscore-dangle
      return this._html;
    }

    set html(html) {
      // eslint-disable-next-line no-underscore-dangle
      this._html = html;
    }

    build(): void {
      const option1DropDown1 = document.createElement('div');
      option1DropDown1.id = this.idElement ? this.idElement : Utils.generateUUID();
      option1DropDown1.innerHTML = this.html;

      this.htmlElementSource = option1DropDown1;
      this.insertOnClickEvent(this);
    }
}
