export interface genericNavbarElementInterface {
    build(): void;
}

export class NavbarElement {
    private _idElement: string;
    private _hideOnDevice: string;
    private _htmlElementSource: HTMLElement;
    private _position: string = 'left';
    private _forceNavbarTop: boolean = false;
    private _clickEvent: string;
    private _customClass: string;

    get idElement(): string {
        return this._idElement;
    }

    set idElement(id) {
        this._idElement = id;
    }

    set clickEvent(clickEvent) {
        this._clickEvent = clickEvent;
    }

    get clickEvent(): string {
        return this._clickEvent;
    }

    get htmlElementSource() {
        return this._htmlElementSource;
    }

    set htmlElementSource(htmlElementSource) {
        this._htmlElementSource = htmlElementSource;
    }

    get position() {
        return this._position;
    }

    set position(position) {
        this._position = position;
    }

    get hideOnDevice() {
        return this._hideOnDevice;
    }

    set hideOnDevice(hideOnDevice) {
        this._hideOnDevice = hideOnDevice;
    }

    get forceNavbarTop() {
        return this._forceNavbarTop;
    }

    set forceNavbarTop(forceNavbarTop) {
        this._forceNavbarTop = forceNavbarTop;
    }

    get customClass() {
        return this._customClass;
    }

    set customClass(customClass) {
        this._customClass = customClass;
    }

    constructor(element: Partial<genericNavbarElementInterface>) {
        Object.assign(this, element);
    }

    getElementClasses(): string {
        let arrayElementClass = Array();

        if(this.customClass) {
            arrayElementClass.push(this.customClass);
        }

        if(this.hideOnDevice) {
            arrayElementClass.push(this.getClassToHideOnDevice());
        }

        arrayElementClass.push(this.position);

        return arrayElementClass.join(' ');
    }

    getClassToHideOnDevice(): string {
        switch (this.hideOnDevice) {
            case 'mobile':
                return ' navbar-hide-mobile';

            case 'desktop':
                return ' navbar-hide-desktop';

            default:
                return '';
        }
    }

    insertOnClickEvent(element: NavbarElement): void {
        if(element.clickEvent) {
            element.htmlElementSource.onclick = () => {
                document.dispatchEvent(new CustomEvent(element.clickEvent, {detail: this}));
            }
        }
    }
}