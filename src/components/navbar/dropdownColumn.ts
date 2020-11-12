import Utils from '../../utils/utils';
import { NavbarElement, genericNavbarElement } from './navbar-element';
import DropDownColumnContentBox from './dropdownContentBox';

export default class DropDownColumn extends NavbarElement implements genericNavbarElement {
    private _contentBoxes: Array<Partial<DropDownColumnContentBox>>;

    constructor(dropDownColumn: Partial<DropDownColumn>) {
      super(dropDownColumn);
      Object.assign(this, dropDownColumn);
      this.contentBoxes = [];

      if (dropDownColumn.contentBoxes) {
        dropDownColumn.contentBoxes.forEach((contentBox) => {
          const contentBoxObject = new DropDownColumnContentBox(contentBox);
          this.contentBoxes.push(contentBoxObject);
        });
      }

      this.build();
    }

    get contentBoxes() {
      // eslint-disable-next-line no-underscore-dangle
      return this._contentBoxes;
    }

    set contentBoxes(contentBoxes) {
      // eslint-disable-next-line no-underscore-dangle
      this._contentBoxes = contentBoxes;
    }

    build(): void {
      const columnDropDownContent = document.createElement('span');
      columnDropDownContent.id = Utils.generateUUID();
      columnDropDownContent.className = 'drop-down-content-column-box';

      const columnDiv = document.createElement('div');
      columnDiv.id = Utils.generateUUID();

      this.contentBoxes.forEach((contentBox) => {
        columnDiv.appendChild(contentBox.htmlElementSource);
      });

      columnDropDownContent.appendChild(columnDiv);
      this.htmlElementSource = columnDropDownContent;
    }
}
