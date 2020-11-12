export interface genericNavbarElement {
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
      // eslint-disable-next-line no-underscore-dangle
      return this._idElement;
    }

    set idElement(id) {
      // eslint-disable-next-line no-underscore-dangle
      this._idElement = id;
    }

    set clickEvent(clickEvent) {
      // eslint-disable-next-line no-underscore-dangle
      this._clickEvent = clickEvent;
    }

    get clickEvent(): string {
      // eslint-disable-next-line no-underscore-dangle
      return this._clickEvent;
    }

    get htmlElementSource() {
      // eslint-disable-next-line no-underscore-dangle
      return this._htmlElementSource;
    }

    set htmlElementSource(htmlElementSource) {
      // eslint-disable-next-line no-underscore-dangle
      this._htmlElementSource = htmlElementSource;
    }

    get position() {
      // eslint-disable-next-line no-underscore-dangle
      return this._position;
    }

    set position(position) {
      // eslint-disable-next-line no-underscore-dangle
      this._position = position;
    }

    get hideOnDevice() {
      // eslint-disable-next-line no-underscore-dangle
      return this._hideOnDevice;
    }

    set hideOnDevice(hideOnDevice) {
      // eslint-disable-next-line no-underscore-dangle
      this._hideOnDevice = hideOnDevice;
    }

    get forceNavbarTop() {
      // eslint-disable-next-line no-underscore-dangle
      return this._forceNavbarTop;
    }

    set forceNavbarTop(forceNavbarTop) {
      // eslint-disable-next-line no-underscore-dangle
      this._forceNavbarTop = forceNavbarTop;
    }

    get customClass() {
      // eslint-disable-next-line no-underscore-dangle
      return this._customClass;
    }

    set customClass(customClass) {
      // eslint-disable-next-line no-underscore-dangle
      this._customClass = customClass;
    }

    constructor(element: Partial<genericNavbarElement>) {
      Object.assign(this, element);
    }

    getElementClasses(): string {
      const arrayElementClass = [];

      if (this.customClass) {
        arrayElementClass.push(this.customClass);
      }

      if (this.hideOnDevice) {
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
      if (element.clickEvent) {
        element.htmlElementSource.addEventListener('click', () => {
          document.dispatchEvent(new CustomEvent(element.clickEvent, { detail: this }));
        });
      }
    }
}
