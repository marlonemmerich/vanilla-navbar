import { v4 as uuidv4 } from 'uuid';
import { NavbarElement, genericNavbarElement } from './navbar-element';
import DropDownItem from './dropdownItem';
import DropDownCustomItem from './dropdownCustomItem';

export default class DropDownColumnContentBox extends NavbarElement
  implements genericNavbarElement {
    text: string;

    private _items: Array<Partial<DropDownItem|DropDownCustomItem>>;

    private _withCustomItems: boolean = false;

    constructor(contentBoxes: any) {
      super(contentBoxes);
      Object.assign(this, contentBoxes);
      this.items = [];

      if (contentBoxes.items && contentBoxes.items.length) {
        contentBoxes.items.forEach((item: any) => {
          const itemObject = new DropDownItem(item);
          this.items.push(itemObject);
        });
      } else if (contentBoxes.customItems && contentBoxes.customItems) {
        contentBoxes.customItems.forEach((customItems: any) => {
          const customItemObject = new DropDownCustomItem(customItems);
          this.items.push(customItemObject);
          this.withCustomItems = true;
        });
      }

      this.build();
    }

    get items() {
      // eslint-disable-next-line no-underscore-dangle
      return this._items;
    }

    set items(items) {
      // eslint-disable-next-line no-underscore-dangle
      this._items = items;
    }

    get withCustomItems() {
      // eslint-disable-next-line no-underscore-dangle
      return this._withCustomItems;
    }

    set withCustomItems(withCustomItems) {
      // eslint-disable-next-line no-underscore-dangle
      this._withCustomItems = withCustomItems;
    }

    build(): void {
      const divColumnContentBox = document.createElement('div');
      divColumnContentBox.id = uuidv4();

      if (this.text && !this.withCustomItems) {
        const spanContentBox = document.createElement('span');
        spanContentBox.className = 'content-column-header';
        spanContentBox.innerHTML = this.text;
        spanContentBox.id = this.idElement ? this.idElement : uuidv4();
        divColumnContentBox.appendChild(spanContentBox);
      }

      const spanScope = document.createElement('div');
      spanScope.className = 'content-column-scope';

      this.items.forEach((item) => {
        spanScope.appendChild(item.htmlElementSource);
      });

      divColumnContentBox.appendChild(spanScope);
      this.htmlElementSource = divColumnContentBox;
    }
}
