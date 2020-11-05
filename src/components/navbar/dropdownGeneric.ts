import {NavbarElement} from './navbar-element';
import {DropDownColumn} from './dropdownColumn';

export class DropDownGeneric extends NavbarElement {
    private _columns: Array<Partial<DropDownColumn>>;
    private _classesToPreventCloseOnClick: Array<String>;
    private _htmlElementContentSource: HTMLElement;

    get columns() {
        return this._columns;
    }

    set columns(columns) {
        this._columns = columns;
    }

    get htmlElementContentSource() {
        return this._htmlElementContentSource;
    }

    set htmlElementContentSource(htmlElementContentSource) {
        this._htmlElementContentSource = htmlElementContentSource;
    }

    get classesToPreventCloseOnClick() {
        return this._classesToPreventCloseOnClick;
    }

    set classesToPreventCloseOnClick(classesToPreventCloseOnClick) {
        this._classesToPreventCloseOnClick = classesToPreventCloseOnClick;
    }

    preventClose(event: MouseEvent) : boolean {
        if(!this.classesToPreventCloseOnClick) {
            return false;
        }

        var arrayClassClickedElement = (event.target as Element).className.split(' ');

        for(let indexArrayClassesClickedElmnt = 0; indexArrayClassesClickedElmnt < arrayClassClickedElement.length; indexArrayClassesClickedElmnt++) {
            for(let indexArrayClasses = 0; indexArrayClasses < this.classesToPreventCloseOnClick.length; indexArrayClasses++) {
                if(this.classesToPreventCloseOnClick[indexArrayClasses] === arrayClassClickedElement[indexArrayClassesClickedElmnt]) {
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
                if(!this.preventClose(e)) {
                    dropDown.htmlElementSource.classList.remove("openned");
                    dropDown.htmlElementContentSource.style.marginLeft = '0px';
                    document.removeEventListener('click', listNextClick, true);
                }
            }
        }

        dropDown.htmlElementSource.onclick = (event) => {
            let scrollWidth = window.innerWidth - document.documentElement.clientWidth + 10;
            let innerWidth = window.innerWidth;

            if(!dropDown.htmlElementSource.classList.contains('openned')) {
                dropDown.htmlElementSource.classList.add('openned');
                document.addEventListener('click', listNextClick, true);

                let dropDownContentWidth = dropDown.htmlElementContentSource.clientWidth;
                let position = dropDown.htmlElementContentSource.offsetLeft;

                if(innerWidth < (dropDownContentWidth + position)) {
                    let marginLeftToSet = (dropDownContentWidth + position + scrollWidth) - innerWidth;

                    dropDown.htmlElementContentSource.style.marginLeft = `-${marginLeftToSet}px`;
                }
            } else {
                dropDown.htmlElementSource.classList.remove("openned");
                dropDown.htmlElementContentSource.style.marginLeft = '0px';
            }

            if((event.target as HTMLElement) && (event.target as HTMLElement).getAttribute('href') === '#') {
                event.preventDefault();
            }
        };
    }
};