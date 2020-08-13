import Utils from "../../utils/utils";
import {DropDownColumn} from './dropdownColumn';
import {DropDownGeneric} from './dropdownGeneric';
import {genericNavbarElementInterface} from './navbar-element';

export class Avatar extends DropDownGeneric implements genericNavbarElementInterface {
    src: string;
    text: string;

    constructor(dropDown: Avatar) {
        super(dropDown);
        Object.assign(this, dropDown);
        this.columns = new Array();

        if(dropDown.columns) {
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

        const avatar = document.createElement('img');
        avatar.id = this.idElement ? this.idElement : Utils.generateUUID();
        avatar.src = this.src;
        avatar.className = "avatar";

        const divAvatar = document.createElement('div');
        divAvatar.id = Utils.generateUUID();
        divAvatar.className = 'div-avatar center drop-down-header';

        divAvatar.appendChild(avatar);
        dropdown.appendChild(divAvatar);


        if(this.columns.length) {
            let arrow = document.createElement('div');
            arrow.id = Utils.generateUUID();
            arrow.className = 'sort-down';
            divAvatar.appendChild(arrow);

            let dropDownContent = document.createElement('div');
            dropDownContent.id = Utils.generateUUID();
            dropDownContent.className = 'drop-down-content';

            this.columns.forEach(column => {
                dropDownContent.appendChild(column.htmlElementSource);
            });

            dropdown.appendChild(dropDownContent);

            this.htmlElementContentSource = dropDownContent;
        }

        this.htmlElementSource = dropdown;
        this.insertOnClickEvent(this);
        this.dropDownClick(this);
    }
};