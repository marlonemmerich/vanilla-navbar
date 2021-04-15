import { Utils } from '../../utils/utils';
import { NavbarElement, genericNavbarElement } from './navbar-element';

export default class Logo extends NavbarElement implements genericNavbarElement {
    src: string;

    href: string = '/';

    constructor(logo: Partial<Logo>) {
      super(logo);
      this.forceNavbarTop = true;
      Object.assign(this, logo);
      this.build();
    }

    build(): void {
      const divLogo = document.createElement('div');
      divLogo.id = Utils.uuidv4();
      divLogo.className = `div-logo ${this.getElementClasses()}`;

      const anchorLogo = document.createElement('a');
      anchorLogo.href = this.href;

      const logo = document.createElement('img');
      logo.id = this.idElement ? this.idElement : Utils.uuidv4();
      logo.src = this.src;
      logo.className = 'logo';

      anchorLogo.appendChild(logo);

      divLogo.appendChild(anchorLogo);
      this.htmlElementSource = divLogo;
      this.insertOnClickEvent(this);
    }
}
