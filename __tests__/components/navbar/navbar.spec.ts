import Navbar from '../../../src/components/navbar/navbar';
import Logo from '../../../src/components/navbar/logo';
import Item from '../../../src/components/navbar/item';
import DropDown from '../../../src/components/navbar/dropdown';
import Avatar from '../../../src/components/navbar/avatar';
import CustomElement from '../../../src/components/navbar/customElement';

describe('Navbar', () => {
  const LOGOS = [
    {
      src: 'first-logo-src',
    },
    {
      src: 'second-logo-src',
    },
  ];

  const ITEMS = [
    {
      text: 'first-item-text',
      src: 'first-item-src',
    },
    {
      text: 'second-item-text',
      src: 'second-item-src',
    },
  ];

  const DROP_DOWNS = [
    {
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
      ],
    },
    {
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
      ],
    },
  ];

  const AVATARS = [
    {
      src: 'first-avatar-src',
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
      ],
    },
    {
      src: 'first-avatar-src',
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
      ],
    },
  ];

  const CUSTOM_ELEMENTS = [
    {
      html: '<div>',
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Second contentBox',
            },
          ],
        },
      ],
    },
    {
      html: '<div>',
      columns: [
        {
          contentBoxes: [
            {
              text: 'First contentBox',
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Second contentBox',
            },
          ],
        },
      ],
    },
  ];

  const CUSTOM_NAVBAR_ID = 'custom-id';
  const CUSTOM_CLASSS = 'custom-class';
  const CUSTOM_BACKGROUND = '#00000';
  const CUSTOM_HOVER_COLOR = '#11111';
  const CUSTOM_COLOR = '#22222';

  const NAVBAR_MOCK = {
    navbarId: CUSTOM_NAVBAR_ID,
    customClass: CUSTOM_CLASSS,
    backgroundColor: CUSTOM_BACKGROUND,
    hoverColor: CUSTOM_HOVER_COLOR,
    color: CUSTOM_COLOR,
    logos: LOGOS,
    items: ITEMS,
    dropDowns: DROP_DOWNS,
    avatars: AVATARS,
    customElements: CUSTOM_ELEMENTS,
  };

  const NAVBAR_ELEMENT = document.createElement('navbar-vanilla');
  NAVBAR_ELEMENT.id = CUSTOM_NAVBAR_ID;

  beforeEach(() => {
    (document.getElementsByTagName('body')[0]).appendChild(NAVBAR_ELEMENT);
    jest.clearAllMocks();
    jest.resetModules();
  });
  afterEach(() => {
    (document.getElementsByTagName('body')[0]).removeChild(NAVBAR_ELEMENT);
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const navbar = new Navbar({});
      expect(navbar instanceof Navbar).toBe(true);
    });

    test('Without parameters - need to set correct values', () => {
      const navbar = new Navbar({});
      expect(navbar.navbarId).toBe(undefined);
      expect(navbar.customClass).toBe('');
      expect(navbar.backgroundColor).toBe('');
      expect(navbar.hoverColor).toBe('');
      expect(navbar.color).toEqual('white');
      expect(navbar.logos).toEqual([]);
      expect(navbar.items).toEqual([]);
      expect(navbar.dropDowns).toEqual([]);
      expect(navbar.avatars).toEqual([]);
      expect(navbar.customElements).toEqual([]);
    });

    test('With parameters - need to set correct default values', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      expect(navbar.navbarId).toBe(CUSTOM_NAVBAR_ID);
      expect(navbar.customClass).toBe(CUSTOM_CLASSS);
      expect(navbar.backgroundColor).toBe(CUSTOM_BACKGROUND);
      expect(navbar.hoverColor).toBe(CUSTOM_HOVER_COLOR);
      expect(navbar.color).toBe(CUSTOM_COLOR);

      expect(navbar.logos.length).toEqual(2);
      expect(navbar.logos[0] instanceof Logo).toEqual(true);
      expect(navbar.logos[1] instanceof Logo).toEqual(true);

      expect(navbar.items.length).toEqual(2);
      expect(navbar.items[0] instanceof Item).toEqual(true);
      expect(navbar.items[1] instanceof Item).toEqual(true);

      expect(navbar.dropDowns.length).toEqual(2);
      expect(navbar.dropDowns[0] instanceof DropDown).toEqual(true);
      expect(navbar.dropDowns[1] instanceof DropDown).toEqual(true);

      expect(navbar.avatars.length).toEqual(2);
      expect(navbar.avatars[0] instanceof Avatar).toEqual(true);
      expect(navbar.avatars[1] instanceof Avatar).toEqual(true);

      expect(navbar.customElements.length).toEqual(2);
      expect(navbar.customElements[0] instanceof CustomElement).toEqual(true);
      expect(navbar.customElements[1] instanceof CustomElement).toEqual(true);
    });

    test('With parameters - logos - mouseover - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOver = new MouseEvent('mouseover');
      (navbar.logos[0].htmlElementSource).dispatchEvent(eventMouseOver);
      expect((navbar.logos[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });

    test('With parameters - items - mouseover and mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOver = new MouseEvent('mouseover');
      (navbar.items[0].htmlElementSource).dispatchEvent(eventMouseOver);
      expect((navbar.items[0]).htmlElementSource.className.includes('on-hover-background')).toBe(true);
    });

    test('With parameters - items - mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOut = new MouseEvent('mouseout');
      (navbar.items[0].htmlElementSource).dispatchEvent(eventMouseOut);
      expect((navbar.items[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });

    test('With parameters - dropDowns - mouseover and mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOver = new MouseEvent('mouseover');
      (navbar.dropDowns[0].htmlElementSource).dispatchEvent(eventMouseOver);
      expect((navbar.dropDowns[0]).htmlElementSource.className.includes('on-hover-background')).toBe(true);
    });

    test('With parameters - dropDowns - mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOut = new MouseEvent('mouseout');
      (navbar.dropDowns[0].htmlElementSource).dispatchEvent(eventMouseOut);
      expect((navbar.dropDowns[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });

    test('With parameters - avatars - mouseover and mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOver = new MouseEvent('mouseover');
      (navbar.avatars[0].htmlElementSource).dispatchEvent(eventMouseOver);
      expect((navbar.avatars[0]).htmlElementSource.className.includes('on-hover-background')).toBe(true);
    });

    test('With parameters - avatars - mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOut = new MouseEvent('mouseout');
      (navbar.avatars[0].htmlElementSource).dispatchEvent(eventMouseOut);
      expect((navbar.avatars[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });

    test('With parameters - customElements - mouseover and mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOver = new MouseEvent('mouseover');
      (navbar.customElements[0].htmlElementSource).dispatchEvent(eventMouseOver);
      expect((navbar.customElements[0]).htmlElementSource.className.includes('on-hover-background')).toBe(true);
    });

    test('With parameters - customElements - mouseout events - need to set correct class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOut = new MouseEvent('mouseout');
      (navbar.customElements[0].htmlElementSource).dispatchEvent(eventMouseOut);
      expect((navbar.customElements[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });

    test('Click on BurguerMenu - with "openned" class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      const eventMouseOut = new MouseEvent('mouseout');
      (navbar.customElements[0].htmlElementSource).dispatchEvent(eventMouseOut);
      expect((navbar.customElements[0]).htmlElementSource.className.includes('on-hover-background')).toBe(false);
    });
    test('Click on BurguerMenu - with "openned" class', () => {
      const navbar = new Navbar(NAVBAR_MOCK);
      navbar.htmlBurguerMenu.className = 'openned';
      navbar.htmlMobileSpanSource.className = 'openned';

      navbar.htmlBurguerMenu.click();

      expect(navbar.htmlBurguerMenu.className.includes('oppened')).toBe(false);
      expect(navbar.htmlMobileSpanSource.className.includes('oppened')).toBe(false);
    });
    //
    test('Click on BurguerMenu - second click - need correct calls according with situation', () => {
      const navbar = new Navbar(NAVBAR_MOCK);

      jest.spyOn(document, 'removeEventListener');

      const ELEMENT_INSIDE_MENU = document.createElement('div');
      ELEMENT_INSIDE_MENU.className = 'inside-element';

      const ELEMENT_OUTSIDE_MENU = document.createElement('div');
      ELEMENT_OUTSIDE_MENU.className = 'outside-element';

      const ANCHOR_INSIDE_HREF_HASHTAG_MENU = document.createElement('a');
      ANCHOR_INSIDE_HREF_HASHTAG_MENU.href = '#';

      const ANCHOR_OUTSIDE_HREF_HASHTAG_MENU = document.createElement('a');
      ANCHOR_OUTSIDE_HREF_HASHTAG_MENU.href = '#';

      navbar.htmlBurguerMenu.appendChild(ELEMENT_INSIDE_MENU);
      navbar.htmlBurguerMenu.appendChild(ANCHOR_INSIDE_HREF_HASHTAG_MENU);

      (document.getElementsByTagName('body')[0]).appendChild(ELEMENT_OUTSIDE_MENU);
      (document.getElementsByTagName('body')[0]).appendChild(ANCHOR_OUTSIDE_HREF_HASHTAG_MENU);

      navbar.htmlBurguerMenu.click();
      ELEMENT_INSIDE_MENU.click();
      expect(document.removeEventListener).not.toHaveBeenCalled();
      navbar.htmlBurguerMenu.click();

      navbar.htmlBurguerMenu.click();
      ANCHOR_INSIDE_HREF_HASHTAG_MENU.click();
      expect(document.removeEventListener).not.toHaveBeenCalled();
      navbar.htmlBurguerMenu.click();

      navbar.htmlBurguerMenu.click();
      ELEMENT_OUTSIDE_MENU.click();
      expect(document.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function), true);
    });
  });
});
