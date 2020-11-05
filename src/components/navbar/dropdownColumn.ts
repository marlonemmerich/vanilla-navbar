import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';
import {DropDownColumnContentBox} from './dropdownContentBox';
import {genericNavbarElementInterface} from './navbar-element';

export class DropDownColumn extends NavbarElement implements genericNavbarElementInterface{
    private _contentBoxes: Array<DropDownColumnContentBox>;
    text: string;

    constructor(dropDownColumn: Partial<DropDownColumn>) {
        super(dropDownColumn);
        Object.assign(this, dropDownColumn);
        this.contentBoxes = Array();

        if (dropDownColumn.contentBoxes) {
            dropDownColumn.contentBoxes.forEach(contentBox => {
                let contentBoxObject = new DropDownColumnContentBox(contentBox);
                this.contentBoxes.push(contentBoxObject);
            });
        }

        this.build();
    }

    get contentBoxes() {
        return this._contentBoxes;
    }

    set contentBoxes(contentBoxes) {
        this._contentBoxes = contentBoxes;
    }

    build(): void {
        let columnDropDownContent = document.createElement('span');
        columnDropDownContent.id = Utils.generateUUID();
        columnDropDownContent.className = 'drop-down-content-column-box';

        let columnDiv = document.createElement('div');
        columnDiv.id = Utils.generateUUID();

        this.contentBoxes.forEach(contentBox => {
            columnDiv.appendChild(contentBox.htmlElementSource);
        });

        columnDropDownContent.appendChild(columnDiv);
        this.htmlElementSource = columnDropDownContent;
    }
};