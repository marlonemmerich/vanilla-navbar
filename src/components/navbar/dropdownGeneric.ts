import {NavbarElement} from './navbar-element';
import {DropDownColumn} from './dropdownColumn';

export class DropDownGeneric extends NavbarElement {
    private _columns: Array<DropDownColumn>;
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

    dropDownClick(dropDown: DropDownGeneric) : void {
        const listClick = function(e: MouseEvent) {
            if (!dropDown.htmlElementSource.contains((e.target as Element))) {
                dropDown.htmlElementSource.classList.remove("openned");
            }
            document.removeEventListener('click', listClick, true);
        }

        dropDown.htmlElementSource.onclick = function(event) {
            const SCROLL_WIDTH = window.innerWidth - document.documentElement.clientWidth + 10;
            let innerWidth = window.innerWidth;

            if(!dropDown.htmlElementSource.classList.contains('openned')) {
                dropDown.htmlElementSource.classList.add('openned');
                document.addEventListener('click', listClick, true);

                let dropDownContentWidth = dropDown.htmlElementContentSource.clientWidth;
                let position = dropDown.htmlElementContentSource.offsetLeft;

                if(innerWidth < (dropDownContentWidth + position)) {
                    let marginLeftToSet = (dropDownContentWidth + position + SCROLL_WIDTH) - innerWidth;

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