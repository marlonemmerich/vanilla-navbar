import { Utils } from '../../utils/utils';
import DropDownColumn from './dropdownColumn';
import DropDownGeneric from './dropdownGeneric';
import { genericNavbarElement } from './navbar-element';

export default class Avatar extends DropDownGeneric implements genericNavbarElement {
    src: string;

    constructor(avatar: Partial<Avatar>) {
      super(avatar);
      Object.assign(this, avatar);
      this.columns = [];

      if (avatar.columns) {
        avatar.columns.forEach((column) => {
          const columnObject = new DropDownColumn(column);
          this.columns.push(columnObject);
        });
      }
      this.build();
    }

    build(): void {
      const dropdown = document.createElement('div');
      dropdown.id = Utils.uuidv4();
      dropdown.className = `drop-down ${this.getElementClasses()}`;

      const avatar = document.createElement('img');
      avatar.id = this.idElement ? this.idElement : Utils.uuidv4();
      avatar.src = this.src;
      avatar.className = 'avatar';

      const divAvatar = document.createElement('div');
      divAvatar.id = Utils.uuidv4();
      divAvatar.className = 'div-avatar center drop-down-header';

      divAvatar.appendChild(avatar);
      dropdown.appendChild(divAvatar);

      if (this.columns.length) {
        const arrow = document.createElement('div');
        arrow.id = Utils.uuidv4();
        arrow.className = 'sort-down';
        divAvatar.appendChild(arrow);

        const dropDownContent = document.createElement('div');
        dropDownContent.id = Utils.uuidv4();
        dropDownContent.className = 'drop-down-content';

        this.columns.forEach((column) => {
          dropDownContent.appendChild(column.htmlElementSource);
        });

        dropdown.appendChild(dropDownContent);

        this.htmlElementContentSource = dropDownContent;
      }

      this.htmlElementSource = dropdown;
      this.insertOnClickEvent(this);
      this.dropDownClick(this);
    }
}
