import Utils from '../../utils/utils';
import { NavbarElement } from './navbar-element';
import Logo from './logo';
import Item from './item';
import DropDown from './dropdown';
import Avatar from './avatar';
import CustomElement from './customElement';
import './style.scss';

export default class Navbar {
    private _htmlSource: HTMLElement;

    private _htmlMobileSpanSource: HTMLElement;

    private _htmlBurguerMenu: HTMLElement;

    private _navbarId: string;

    private _customClass: string = '';

    private _backgroundColor: string = '';

    private _hoverColor: string = '';

    private _color: string = 'white';

    private _logos: Array<Partial<Logo>>;

    private _items: Array<Item>;

    private _dropdowns: Array<DropDown>;

    private _avatars: Array<Avatar>;

    private _customElements: Array<CustomElement>;

    get htmlSource() {
      // eslint-disable-next-line no-underscore-dangle
      return this._htmlSource;
    }

    set htmlSource(htmlSource) {
      // eslint-disable-next-line no-underscore-dangle
      this._htmlSource = htmlSource;
    }

    get htmlMobileSpanSource() {
      // eslint-disable-next-line no-underscore-dangle
      return this._htmlMobileSpanSource;
    }

    set htmlMobileSpanSource(htmlMobileSpanSource) {
      // eslint-disable-next-line no-underscore-dangle
      this._htmlMobileSpanSource = htmlMobileSpanSource;
    }

    get htmlBurguerMenu() {
      // eslint-disable-next-line no-underscore-dangle
      return this._htmlBurguerMenu;
    }

    set htmlBurguerMenu(_htmlBurguerMenu) {
      // eslint-disable-next-line no-underscore-dangle
      this._htmlBurguerMenu = _htmlBurguerMenu;
    }

    get navbarId() {
      // eslint-disable-next-line no-underscore-dangle
      return this._navbarId;
    }

    set navbarId(navbarId) {
      // eslint-disable-next-line no-underscore-dangle
      this._navbarId = navbarId;
    }

    get logos() {
      // eslint-disable-next-line no-underscore-dangle
      return this._logos;
    }

    set logos(logos) {
      // eslint-disable-next-line no-underscore-dangle
      this._logos = logos;
    }

    get items() {
      // eslint-disable-next-line no-underscore-dangle
      return this._items;
    }

    set items(items) {
      // eslint-disable-next-line no-underscore-dangle
      this._items = items;
    }

    get dropDowns() {
      // eslint-disable-next-line no-underscore-dangle
      return this._dropdowns;
    }

    set dropDowns(dropDowns) {
      // eslint-disable-next-line no-underscore-dangle
      this._dropdowns = dropDowns;
    }

    get avatars() {
      // eslint-disable-next-line no-underscore-dangle
      return this._avatars;
    }

    set avatars(avatars) {
      // eslint-disable-next-line no-underscore-dangle
      this._avatars = avatars;
    }

    get customElements() {
      // eslint-disable-next-line no-underscore-dangle
      return this._customElements;
    }

    set customElements(customElements) {
      // eslint-disable-next-line no-underscore-dangle
      this._customElements = customElements;
    }

    get customClass() {
      // eslint-disable-next-line no-underscore-dangle
      return this._customClass;
    }

    set customClass(customClass) {
      // eslint-disable-next-line no-underscore-dangle
      this._customClass = customClass;
    }

    get backgroundColor() {
      // eslint-disable-next-line no-underscore-dangle
      return this._backgroundColor;
    }

    set backgroundColor(backgroundColor) {
      // eslint-disable-next-line no-underscore-dangle
      this._backgroundColor = backgroundColor;
    }

    get hoverColor() {
      // eslint-disable-next-line no-underscore-dangle
      return this._hoverColor;
    }

    set hoverColor(hoverColor) {
      // eslint-disable-next-line no-underscore-dangle
      this._hoverColor = hoverColor;
    }

    get color() {
      // eslint-disable-next-line no-underscore-dangle
      return this._color;
    }

    set color(color) {
      // eslint-disable-next-line no-underscore-dangle
      this._color = color;
    }

    constructor(parameters: any) {
      this.logos = [];
      this.items = [];
      this.dropDowns = [];
      this.avatars = [];
      this.customElements = [];
      this.navbarId = parameters.navbarId ? parameters.navbarId : undefined;

      this.checkStyleParameters(parameters);

      this.buildCodeBase();
      this.buildElements(parameters);
      this.render();
    }

    checkStyleParameters(parameters: any): void {
      if (parameters.customClass) {
        this.customClass = parameters.customClass;
      }

      if (parameters.backgroundColor) {
        this.backgroundColor = parameters.backgroundColor;
      }

      if (parameters.hoverColor) {
        this.hoverColor = parameters.hoverColor;
      }

      if (parameters.color) {
        this.color = parameters.color;
      }
    }

    buildCodeBase(): void {
      this.buildHtmlSource();
      this.buildHtmlMobileSource();
      this.navbarClick(this);
    }

    buildHtmlSource(): void {
      const divNavBar = document.createElement('div');
      divNavBar.id = Utils.generateUUID();
      divNavBar.className = `body ${this.customClass}`;
      divNavBar.style.backgroundColor = this.backgroundColor;
      divNavBar.style.color = this.color;

      const onHoverClassStyle = document.createElement('style');
      onHoverClassStyle.type = 'text/css';
      onHoverClassStyle.innerHTML = `.on-hover-background { background-color: ${this.hoverColor}}`;
      divNavBar.appendChild(onHoverClassStyle);

      this.htmlSource = divNavBar;
    }

    buildHtmlMobileSource(): void {
      const spanMobile = document.createElement('span');
      spanMobile.id = Utils.generateUUID();
      spanMobile.className = 'navbar-menu-mobile';

      this.htmlMobileSpanSource = spanMobile;
      this.htmlSource.appendChild(this.htmlMobileSpanSource);
      this.buildBurguerMenu();
    }

    buildBurguerMenu(): void {
      const burguerMenu = document.createElement('span');
      burguerMenu.className = 'burguer-menu right';

      const bar1 = document.createElement('div');
      bar1.className = 'bar1';
      bar1.style.backgroundColor = this.color;
      const bar2 = document.createElement('div');
      bar2.style.backgroundColor = this.color;
      bar2.className = 'bar2';
      const bar3 = document.createElement('div');
      bar3.style.backgroundColor = this.color;
      bar3.className = 'bar3';

      burguerMenu.appendChild(bar1);
      burguerMenu.appendChild(bar2);
      burguerMenu.appendChild(bar3);

      this.htmlBurguerMenu = burguerMenu;

      // eslint-disable-next-line no-underscore-dangle
      this._htmlSource.appendChild(this._htmlBurguerMenu);
    }

    private render(): void {
      if (!this.navbarId) {
        document.querySelector('navbar-vanilla').appendChild(this.htmlSource);
        return;
      }
      document.querySelector(`navbar-vanilla#${this.navbarId}`).appendChild(this.htmlSource);
    }

    private buildElements(parameters: any): void {
      if (parameters.logos && parameters.logos.length) {
        parameters.logos.reverse().forEach((logo: any) => {
          const logoObject = new Logo(logo);
          this.logos.push(logoObject);

          this.appendElement(logoObject, false);
        });
      }

      if (parameters.items && parameters.items.length) {
        parameters.items.forEach((item: any) => {
          const itemObject = new Item(item);
          this.items.push(itemObject);

          this.appendElement(itemObject);
        });
      }

      if (parameters.dropDowns && parameters.dropDowns.length) {
        parameters.dropDowns.forEach((dropDown: any) => {
          const dropDownObject = new DropDown(dropDown);
          this.dropDowns.push(dropDownObject);

          this.appendElement(dropDownObject);
        });
      }

      if (parameters.avatars && parameters.avatars.length) {
        parameters.avatars.forEach((avatar: any) => {
          const avatarObject = new Avatar(avatar);
          this.avatars.push(avatarObject);

          this.appendElement(avatarObject);
        });
      }

      if (parameters.customElements && parameters.customElements.length) {
        parameters.customElements.reverse().forEach((customElement: any) => {
          const customElementObject = new CustomElement(customElement);
          this.customElements.push(customElementObject);

          this.appendElement(customElementObject);
        });
      }
    }

    private appendElement(navbarElement: NavbarElement, insertHoverEvent: boolean = true): void {
      if (insertHoverEvent) {
        navbarElement.htmlElementSource.addEventListener('mouseover', function addClass() {
          this.classList.add('on-hover-background');
        });

        navbarElement.htmlElementSource.addEventListener('mouseout', function removeClass() {
          this.classList.remove('on-hover-background');
        });
      }

      if (navbarElement.forceNavbarTop) {
        this.htmlSource.appendChild(navbarElement.htmlElementSource);
        return;
      }

      this.htmlMobileSpanSource.appendChild(navbarElement.htmlElementSource);
    }

    navbarClick(navbar: Navbar) : void {
      const listClick = function test(e: MouseEvent) {
        if ((!navbar.htmlSource.contains((e.target as Element))
          && !navbar.htmlBurguerMenu.contains((e.target as Element)))
                || ((e.target as HTMLElement) && (e.target as HTMLElement).getAttribute('href') && (e.target as HTMLElement).getAttribute('href') !== '#')) {
          navbar.htmlMobileSpanSource.classList.remove('openned');
          navbar.htmlBurguerMenu.classList.remove('openned');
          document.removeEventListener('click', listClick, true);
        }
      };

      this.htmlBurguerMenu.onclick = () => {
        if (!this.htmlMobileSpanSource.classList.contains('openned')) {
          this.htmlMobileSpanSource.classList.add('openned');
          this.htmlBurguerMenu.classList.add('openned');
          document.addEventListener('click', listClick, true);
        } else {
          this.htmlMobileSpanSource.classList.remove('openned');
          this.htmlBurguerMenu.classList.remove('openned');
        }
      };
    }
}
