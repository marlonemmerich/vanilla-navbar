import { v4 as uuidv4 } from 'uuid';
import DropDownColumn from './dropdownColumn';
import DropDownGeneric from './dropdownGeneric';
import { genericNavbarElement } from './navbar-element';

export default class CustomElement extends DropDownGeneric implements genericNavbarElement {
    html: string;

    constructor(dropDown: Partial<CustomElement>) {
      super(dropDown);
      Object.assign(this, dropDown);
      this.columns = [];

      if (dropDown.columns && dropDown.columns.length) {
        dropDown.columns.forEach((column) => {
          const columnObject = new DropDownColumn(column);
          this.columns.push(columnObject);
        });
      }
      this.build();
    }

    build(): void {
      const divCustomElement = document.createElement('div');
      divCustomElement.id = this.idElement ? this.idElement : uuidv4();
      divCustomElement.className = `navbar-vanilla-custom-element drop-down ${this.getElementClasses()}`;
      divCustomElement.innerHTML = this.html;

      if (this.columns.length) {
        const arrow = document.createElement('div');
        arrow.id = uuidv4();
        arrow.className = 'sort-down';
        divCustomElement.appendChild(arrow);

        const dropDownContent = document.createElement('div');
        dropDownContent.id = uuidv4();
        dropDownContent.className = 'drop-down-content';

        this.columns.forEach((column) => {
          dropDownContent.appendChild(column.htmlElementSource);
        });

        divCustomElement.appendChild(dropDownContent);
        this.htmlElementContentSource = dropDownContent;
      }

      this.htmlElementSource = divCustomElement;
      this.insertOnClickEvent(this);
      if (this.htmlElementContentSource) {
        this.dropDownClick(this);
      }
    }
}
