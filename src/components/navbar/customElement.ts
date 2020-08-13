import Utils from "../../utils/utils";
import {DropDownColumn} from './dropdownColumn';
import {DropDownGeneric} from './dropdownGeneric';
import {genericNavbarElementInterface} from './navbar-element';

export class CustomElement extends DropDownGeneric implements genericNavbarElementInterface {
    html: string;

    constructor(dropDown: CustomElement) {
        super(dropDown);
        Object.assign(this, dropDown);
        this.columns = new Array();

        if(dropDown.columns && dropDown.columns.length) {
            dropDown.columns.forEach(column => {
                let columnObject = new DropDownColumn(column);
                this.columns.push(columnObject);
            });
        }
        this.build();
    }

    build(): void {
        const divCustomElement = document.createElement('div');
        divCustomElement.id = this.idElement ? this.idElement : Utils.generateUUID();
        divCustomElement.className = `navbar-vanilla-custom-element drop-down ${this.getElementClasses()}`;
        divCustomElement.innerHTML = this.html;

        if(this.columns.length) {
            let arrow = document.createElement('div');
            arrow.id = Utils.generateUUID();
            arrow.className = 'sort-down';
            divCustomElement.appendChild(arrow);

            let dropDownContent = document.createElement('div');
            dropDownContent.id = Utils.generateUUID();
            dropDownContent.className = 'drop-down-content';

            this.columns.forEach(column => {
                dropDownContent.appendChild(column.htmlElementSource);
            });

            divCustomElement.appendChild(dropDownContent);
            this.htmlElementContentSource = dropDownContent;
        }


        this.htmlElementSource = divCustomElement;
        this.insertOnClickEvent(this);
        if(this.htmlElementContentSource) {
            this.dropDownClick(this);
        }
    }
};