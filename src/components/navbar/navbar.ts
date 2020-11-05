import Utils from "../../utils/utils";
import {NavbarElement} from './navbar-element';
import {Logo} from './logo';
import {Item} from './item';
import {DropDown} from "./dropdown";
import {Avatar} from "./avatar";
import {CustomElement} from "./customElement";
import './style.scss';

export class Navbar {
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
        return this._htmlSource;
    }

    set htmlSource(htmlSource) {
        this._htmlSource = htmlSource;
    }

    get htmlMobileSpanSource() {
        return this._htmlMobileSpanSource;
    }

    set htmlMobileSpanSource(htmlMobileSpanSource) {
        this._htmlMobileSpanSource = htmlMobileSpanSource;
    }

    get htmlBurguerMenu() {
        return this._htmlBurguerMenu;
    }

    set htmlBurguerMenu(_htmlBurguerMenu) {
        this._htmlBurguerMenu = _htmlBurguerMenu;
    }

    get navbarId() {
        return this._navbarId;
    }

    set navbarId(navbarId) {
        this._navbarId = navbarId;
    }

    get logos() {
        return this._logos;
    }

    set logos(logos) {
        this._logos = logos;
    }

    get items() {
        return this._items;
    }

    set items(items) {
        this._items = items;
    }

    get dropDowns() {
        return this._dropdowns;
    }

    set dropDowns(dropDowns) {
        this._dropdowns = dropDowns;
    }

    get avatars() {
        return this._avatars;
    }

    set avatars(avatars) {
        this._avatars = avatars;
    }

    get customElements() {
        return this._customElements;
    }

    set customElements(customElements) {
        this._customElements = customElements;
    }

    get customClass() {
        return this._customClass;
    }

    set customClass(customClass) {
        this._customClass = customClass;
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(backgroundColor) {
        this._backgroundColor = backgroundColor;
    }

    get hoverColor() {
        return this._hoverColor;
    }

    set hoverColor(hoverColor) {
        this._hoverColor = hoverColor;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    constructor(parameters: any) {
        this.logos = new Array();
        this.items = new Array();
        this.dropDowns = new Array();
        this.avatars = new Array();
        this.customElements = new Array();
        this.navbarId = parameters.navbarId ? parameters.navbarId : undefined;

        this.checkStyleParameters(parameters);

        this.buildCodeBase();
        this.buildElements(parameters);
        this.render();
    }

    checkStyleParameters(parameters: any): void {
        if(parameters.customClass) {
            this.customClass = parameters.customClass;
        };

        if(parameters.backgroundColor) {
            this.backgroundColor = parameters.backgroundColor;
        };

        if(parameters.hoverColor) {
            this.hoverColor = parameters.hoverColor;
        };

        if(parameters.color) {
            this.color = parameters.color;
        };
    }

    buildCodeBase(): void {
        this.buildHtmlSource();
        this.buildHtmlMobileSource();
        this.navbarClick(this);
    }

    buildHtmlSource(): void {
        let divNavBar = document.createElement('div');
        divNavBar.id = Utils.generateUUID();
        divNavBar.className = `body ${this.customClass}`;
        divNavBar.style.backgroundColor = this.backgroundColor;
        divNavBar.style.color = this.color;

        var onHoverClassStyle = document.createElement('style');
        onHoverClassStyle.type = 'text/css';
        onHoverClassStyle.innerHTML = `.on-hover-background { background-color: ${this.hoverColor}}`;
        divNavBar.appendChild(onHoverClassStyle);

        this.htmlSource = divNavBar;
    }

    buildHtmlMobileSource(): void {
        let spanMobile = document.createElement('span');
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

        // burguerMenu.onclick = () => {
        //     this.htmlMobileSpanSource.classList.toggle('openned');
        //     burguerMenu.classList.toggle('openned');
        // };

        this._htmlBurguerMenu = burguerMenu;

        this._htmlSource.appendChild(this._htmlBurguerMenu);
    }

    private render(): void {
        if (!this.navbarId) {
            document.querySelector(`navbar-vanilla`).appendChild(this._htmlSource);
            return;
        }
        document.querySelector(`navbar-vanilla#${this.navbarId}`).appendChild(this._htmlSource);
    }

    private buildElements(parameters: any): void {
        if(parameters.logos && parameters.logos.length) {
            parameters.logos.reverse().forEach((logo: any) => {
                let logoObject = new Logo(logo);
                this.logos.push(logoObject);

                this.appendElement(logoObject, false);
            });

        }

        if(parameters.items && parameters.items.length) {
            parameters.items.forEach((item: any) => {
                let itemObject = new Item(item);
                this.items.push(itemObject);

                this.appendElement(itemObject);
            });
        }

        if(parameters.dropDowns && parameters.dropDowns.length) {
            parameters.dropDowns.forEach((dropDown: any) => {
                let dropDownObject = new DropDown(dropDown);
                this.dropDowns.push(dropDownObject);

                this.appendElement(dropDownObject);
            });
        }

        if(parameters.avatars && parameters.avatars.length) {
            parameters.avatars.forEach((avatar: any) => {
                let avatarObject = new Avatar(avatar);
                this.avatars.push(avatarObject);

                this.appendElement(avatarObject);
            });
        }


        if(parameters.customElements && parameters.customElements.length) {
            parameters.customElements.reverse().forEach((customElement: any) => {
                let customElementObject = new CustomElement(customElement);
                this.customElements.push(customElementObject);

                this.appendElement(customElementObject);
            });
        }
    }

    private appendElement(navbarElement: NavbarElement, insertHoverEvent: boolean = true): void {
        if(insertHoverEvent) {
            navbarElement.htmlElementSource.addEventListener('mouseover', function() {
                this.classList.add('on-hover-background');
            });

            navbarElement.htmlElementSource.addEventListener('mouseout',function() {
                this.classList.remove('on-hover-background');
            });
        }

        if(navbarElement.forceNavbarTop) {
            this.htmlSource.appendChild(navbarElement.htmlElementSource);
            return;
        }

        this.htmlMobileSpanSource.appendChild(navbarElement.htmlElementSource);
        return;
    };

    navbarClick(navbar: Navbar) : void {
        const listClick = function(e: MouseEvent) {
            if ((!navbar._htmlSource.contains((e.target as Element)) && !navbar._htmlBurguerMenu.contains((e.target as Element))) ||
                ((event.target as HTMLElement) && (event.target as HTMLElement).getAttribute('href') && (event.target as HTMLElement).getAttribute('href') !== '#')) {
                navbar._htmlMobileSpanSource.classList.remove("openned");
                navbar._htmlBurguerMenu.classList.remove("openned");
                document.removeEventListener('click', listClick, true);
            }
        }

        navbar._htmlBurguerMenu.onclick = function(event) {
            if(!navbar._htmlMobileSpanSource.classList.contains('openned')) {
                navbar._htmlMobileSpanSource.classList.add('openned');
                navbar._htmlBurguerMenu.classList.add('openned');
                document.addEventListener('click', listClick, true);
            } else {
                navbar._htmlMobileSpanSource.classList.remove('openned');
                navbar._htmlBurguerMenu.classList.remove('openned');
            }
        };
    }
}