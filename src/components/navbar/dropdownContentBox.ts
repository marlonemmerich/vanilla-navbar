import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';
import {DropDownItem} from './dropdownItem';
import {DropDownCustomItem} from './dropdownCustomItem';
import {genericNavbarElementInterface} from './navbar-element';

export class DropDownColumnContentBox extends NavbarElement implements genericNavbarElementInterface {
    text: string;
    private _items: Array<DropDownItem|DropDownCustomItem>;
    private _withCustomItems: boolean = false;

    constructor(contentBoxes: any) {
        super(contentBoxes);
        Object.assign(this, contentBoxes);
        this.items = Array();

        if(contentBoxes.items && contentBoxes.items.length) {
            contentBoxes.items.forEach((item: any) => {
                let itemObject = new DropDownItem(item);
                this.items.push(itemObject);
            });
        } else if(contentBoxes.customItems && contentBoxes.customItems) {
            contentBoxes.customItems.forEach((customItems: any) => {
                let customItemObject = new DropDownCustomItem(customItems);
                this.items.push(customItemObject);
                this.withCustomItems = true;
            });
        }

        this.build();
    }

    get items() {
        return this._items;
    }

    set items(items) {
        this._items = items;
    }

    get withCustomItems() {
        return this._withCustomItems;
    }

    set withCustomItems(withCustomItems) {
        this._withCustomItems = withCustomItems;
    }

    build(): void {
        let divColumnContentBox = document.createElement('div');
        divColumnContentBox.id = Utils.generateUUID();

        if(this.text && !this.withCustomItems) {
            let spanContentBox = document.createElement('span');
            spanContentBox.className = 'content-column-header';
            spanContentBox.innerHTML = this.text;
            divColumnContentBox.appendChild(spanContentBox);
        }

        let spanScope = document.createElement('div');
        spanScope.className = 'content-column-scope';

        this.items.forEach(item => {
            spanScope.appendChild(item.htmlElementSource)
        });

        divColumnContentBox.appendChild(spanScope);
        this.htmlElementSource = divColumnContentBox;
    }
};