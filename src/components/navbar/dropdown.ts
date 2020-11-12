import Utils from '../../utils/utils';
import DropDownColumn from './dropdownColumn';
import DropDownGeneric from './dropdownGeneric';
import { genericNavbarElement } from './navbar-element';

export default class DropDown extends DropDownGeneric implements genericNavbarElement {
    text: string;

    constructor(dropDown: Partial<DropDown>) {
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
      const dropdown = document.createElement('div');
      dropdown.id = Utils.generateUUID();
      dropdown.className = `drop-down ${this.getElementClasses()}`;

      const anchorDropDown = document.createElement('a');
      anchorDropDown.id = this.idElement ? this.idElement : Utils.generateUUID();
      anchorDropDown.setAttribute('href', '#');
      anchorDropDown.className = 'center drop-down-header';
      anchorDropDown.innerHTML = this.text;

      const arrow = document.createElement('div');
      arrow.id = Utils.generateUUID();
      arrow.className = 'sort-down';
      anchorDropDown.appendChild(arrow);

      const dropDownContent = document.createElement('div');
      dropDownContent.id = Utils.generateUUID();
      dropDownContent.className = 'drop-down-content';

      this.columns.forEach((column) => {
        dropDownContent.appendChild(column.htmlElementSource);
      });

      dropdown.appendChild(anchorDropDown);
      dropdown.appendChild(dropDownContent);

      this.htmlElementContentSource = dropDownContent;

      this.htmlElementSource = dropdown;
      this.insertOnClickEvent(this);
      this.dropDownClick(this);
    }
}
