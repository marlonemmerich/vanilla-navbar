import Utils from '../../utils/utils';
import { NavbarElement } from './navbar-element';

export default class DropDownItem extends NavbarElement {
    href: string;

    text: string;

    constructor(dropDown: Partial<DropDownItem>) {
      super(dropDown);
      Object.assign(this, dropDown);
      this.build();
    }

    build(): void {
      const option1DropDown = document.createElement('a');
      option1DropDown.id = this.idElement ? this.idElement : Utils.generateUUID();
      option1DropDown.href = this.href;
      option1DropDown.innerHTML = this.text;

      this.htmlElementSource = option1DropDown;
      this.insertOnClickEvent(this);
    }
}
