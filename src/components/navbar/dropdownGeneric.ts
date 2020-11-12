import { NavbarElement } from './navbar-element';
import DropDownColumn from './dropdownColumn';

export default class DropDownGeneric extends NavbarElement {
    private _columns: Array<Partial<DropDownColumn>>;

    private _classesToPreventCloseOnClick: Array<String>;

    private _htmlElementContentSource: HTMLElement;

    get columns() {
      // eslint-disable-next-line no-underscore-dangle
      return this._columns;
    }

    set columns(columns) {
      // eslint-disable-next-line no-underscore-dangle
      this._columns = columns;
    }

    get htmlElementContentSource() {
      // eslint-disable-next-line no-underscore-dangle
      return this._htmlElementContentSource;
    }

    set htmlElementContentSource(htmlElementContentSource) {
      // eslint-disable-next-line no-underscore-dangle
      this._htmlElementContentSource = htmlElementContentSource;
    }

    get classesToPreventCloseOnClick() {
      // eslint-disable-next-line no-underscore-dangle
      return this._classesToPreventCloseOnClick;
    }

    set classesToPreventCloseOnClick(classesToPreventCloseOnClick) {
      // eslint-disable-next-line no-underscore-dangle
      this._classesToPreventCloseOnClick = classesToPreventCloseOnClick;
    }

    preventClose(event: MouseEvent) : boolean {
      if (!this.classesToPreventCloseOnClick) {
        return false;
      }

      const arrayClassClickedElement = (event.target as Element).className.split(' ');

      for (let indexArrayClassesClickedElmnt = 0;
        indexArrayClassesClickedElmnt < arrayClassClickedElement.length;
        indexArrayClassesClickedElmnt += 1) {
        for (let indexArrayClasses = 0;
          indexArrayClasses < this.classesToPreventCloseOnClick.length;
          indexArrayClasses += 1) {
          if (this.classesToPreventCloseOnClick[indexArrayClasses]
            === arrayClassClickedElement[indexArrayClassesClickedElmnt]) {
            return true;
          }
        }
      }

      return false;
    }

    dropDownClick(dropDown: DropDownGeneric) : void {
      const listNextClick = (e: MouseEvent) => {
        /*
            onclick event will run only with the click occurs in the dropdown
            this verification will check the next click only if is not in the dropdown
        */
        if (!dropDown.htmlElementSource.contains((e.target as Element))) {
          if (!this.preventClose(e)) {
            dropDown.htmlElementSource.classList.remove('openned');
            dropDown.htmlElementContentSource.style.setProperty('margin-left', '0px');
            document.removeEventListener('click', listNextClick, true);
          }
        }
      };

      // dropDown.htmlElementSource.onclick = (event) => {
      dropDown.htmlElementSource.addEventListener('click', (event) => {
        const scrollWidth = window.innerWidth - document.documentElement.clientWidth + 10;
        const { innerWidth } = window;

        if (!dropDown.htmlElementSource.classList.contains('openned')) {
          dropDown.htmlElementSource.classList.add('openned');
          document.addEventListener('click', listNextClick, true);

          const dropDownContentWidth = dropDown.htmlElementContentSource.clientWidth;
          const position = dropDown.htmlElementContentSource.offsetLeft;

          if (innerWidth < (dropDownContentWidth + position)) {
            const marginLeftToSet = (dropDownContentWidth + position + scrollWidth) - innerWidth;

            dropDown.htmlElementContentSource.style.setProperty('margin-left', `-${marginLeftToSet}px`);
          }
        } else {
          dropDown.htmlElementSource.classList.remove('openned');
          dropDown.htmlElementContentSource.style.setProperty('margin-left', '0px');
        }

        if ((event.target as HTMLElement) && (event.target as HTMLElement).getAttribute('href') === '#') {
          event.preventDefault();
        }
      });
    }
}
