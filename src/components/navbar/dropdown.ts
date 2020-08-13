import Utils from "../../utils/utils";
import {DropDownColumn} from './dropdownColumn';
import {DropDownGeneric} from './dropdownGeneric';
import {genericNavbarElementInterface} from './navbar-element';

export class DropDown extends DropDownGeneric implements genericNavbarElementInterface {
    text: string;

    constructor(dropDown: DropDown) {
        super(dropDown);
        Object.assign(this, dropDown);
        this.columns = new Array();

        if(dropDown.columns && dropDown.columns.length) {
            dropDown.columns.forEach(column => {
                let columnObject = new DropDownColumn(column);
                this.columns.push(columnObject)
            });
        }

        this.build();
    }

    build(): void {
        let dropdown = document.createElement('div');
        dropdown.id = Utils.generateUUID();
        dropdown.className = `drop-down ${this.getElementClasses()}`;

        let anchorDropDown = document.createElement('a');
        anchorDropDown.id = this.idElement ? this.idElement : Utils.generateUUID();
        anchorDropDown.setAttribute('href', '#');
        anchorDropDown.className = 'center drop-down-header';
        anchorDropDown.innerHTML = this.text;

        let arrow = document.createElement('div');
        arrow.id = Utils.generateUUID();
        arrow.className = 'sort-down';
        anchorDropDown.appendChild(arrow);

        let dropDownContent = document.createElement('div');
        dropDownContent.id = Utils.generateUUID();
        dropDownContent.className = 'drop-down-content';

        this.columns.forEach(column => {
            dropDownContent.appendChild(column.htmlElementSource);
        });

        dropdown.appendChild(anchorDropDown);
        dropdown.appendChild(dropDownContent);

        this.htmlElementContentSource = dropDownContent;

        this.htmlElementSource = dropdown;
        this.insertOnClickEvent(this);
        this.dropDownClick(this);
    }
};