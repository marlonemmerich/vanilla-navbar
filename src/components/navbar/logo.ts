import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';
import {genericNavbarElementInterface} from './navbar-element';

export class Logo extends NavbarElement implements genericNavbarElementInterface{
    src: string;
    href: string = '/';

    constructor(logo: any) {
        super(logo);
        this.forceNavbarTop = true;
        Object.assign(this, logo);
        this.build();
    }

    build(): void {
        let divLogo = document.createElement('div');
        divLogo.id = Utils.generateUUID();
        divLogo.className = `div-logo ${this.getElementClasses()}`;

        let anchorLogo = document.createElement('a');
        anchorLogo.href = this.href;

        let logo = document.createElement('img');
        logo.id = Utils.generateUUID();
        logo.src = this.src;
        logo.className = 'logo';

        anchorLogo.appendChild(logo);

        divLogo.appendChild(anchorLogo);
        this.htmlElementSource = divLogo;
        this.insertOnClickEvent(this);
    }
};