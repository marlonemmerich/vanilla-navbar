import DropDownGeneric from '../../../src/components/navbar/dropdownGeneric';

describe('DropDownGeneric', () => {
  const CUSTOM_CLASS = 'custom-class';

  describe('preventClose', () => {
    test('Without classesToPreventCloseOnClick - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});

      const event = new MouseEvent('click');
      expect(dropdownGeneric.preventClose(event)).toBe(false);
    });

    test('With classesToPreventCloseOnClick - event without class on target - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { className: '' } });

      expect(dropdownGeneric.preventClose(event)).toBe(false);
    });

    test('With classesToPreventCloseOnClick - event without class on target - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { } });

      expect(dropdownGeneric.preventClose(event)).toBe(false);
    });

    test('With classesToPreventCloseOnClick - event target with 1 and different class - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { className: 'class-a' } });

      expect(dropdownGeneric.preventClose(event)).toBe(false);
    });

    test('With classesToPreventCloseOnClick - event target with 1 and equal class - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { className: CUSTOM_CLASS } });

      expect(dropdownGeneric.preventClose(event)).toBe(true);
    });

    test('With classesToPreventCloseOnClick - event target with different classes - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { className: 'class-a class-b' } });

      expect(dropdownGeneric.preventClose(event)).toBe(false);
    });

    test('With classesToPreventCloseOnClick - event target with same class - prevent close return false', () => {
      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.classesToPreventCloseOnClick = [];
      dropdownGeneric.classesToPreventCloseOnClick.push(CUSTOM_CLASS);

      const event = new MouseEvent('click');
      Object.defineProperty(event, 'target', { writable: false, value: { className: `class-a ${CUSTOM_CLASS}` } });

      expect(dropdownGeneric.preventClose(event)).toBe(true);
    });
  });

  describe('dropDownClick', () => {
    afterEach(() => {
      jest.resetAllMocks();
      // jest.spyOn(document, 'removeEventListener');
      // jest.spyOn(document, 'addEventListener');
    });
    test('listener on click - without "openned" class - second click in an element out of dropdown - preventClose returns true - need to make correct calls', () => {
      jest.spyOn(document, 'removeEventListener');
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_OUT_OF_MENU = document.createElement('div');

      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.preventClose = jest.fn(() => true);

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      dropdownGeneric.dropDownClick(dropdownGeneric);

      (document.getElementsByTagName('body')[0]).appendChild(HTML_ELEMENT_OUT_OF_MENU);

      dropdownGeneric.htmlElementSource.click();
      HTML_ELEMENT_OUT_OF_MENU.click();

      expect(document.removeEventListener).not.toHaveBeenCalled();
    });
    test('listener on click - without "openned" class - second click in an element out of dropdown - preventClose returns true - need to make correct calls', () => {
      jest.spyOn(document, 'removeEventListener');
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('div');
      const HTML_CONTAINER_SOURCE_MOCK = document.createElement('button');
      HTML_ELEMENT_SOURCE_MOCK.appendChild(HTML_CONTAINER_SOURCE_MOCK);

      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.preventClose = jest.fn(() => true);

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      dropdownGeneric.dropDownClick(dropdownGeneric);

      (document.getElementsByTagName('body')[0]).appendChild(HTML_ELEMENT_SOURCE_MOCK);

      dropdownGeneric.htmlElementSource.click();
      HTML_CONTAINER_SOURCE_MOCK.click();
    });
    test('listener on click - without "openned" class - second click in an element out of dropdown - preventClose returns false - need to set correct parameters and calls', () => {
      jest.spyOn(document, 'removeEventListener');
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('span');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('span');
      const HTML_ELEMENT_OUT_OF_MENU = document.createElement('span');

      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.preventClose = jest.fn(() => false);

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      dropdownGeneric.dropDownClick(dropdownGeneric);

      (document.getElementsByTagName('body')[0]).appendChild(HTML_ELEMENT_OUT_OF_MENU);

      dropdownGeneric.htmlElementSource.click();
      HTML_ELEMENT_OUT_OF_MENU.click();

      expect(dropdownGeneric.htmlElementContentSource.style.getPropertyValue('margin-left')).toBe('0px');
      expect(document.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function), true);
    });
    test('listener on click - without "openned" class - htmlElementContentSource with clientWidth plus offsetLeft more than window.innerWidth - need to adjust position', () => {
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('div');
      const MOCKED_WINDOW_INNER_WIDTH = 1000;
      const MOCKED_DOCUMENT_CLIENT_WITH = 1000;
      const MOCKED_CLIENT_WIDTH = 1000;
      const MOCKED_OFFSET_LEFT = 1010;
      const MARGIN_TO_LEFT = 1020;

      const dropdownGeneric = new DropDownGeneric({});

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      // Width mocks
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: MOCKED_WINDOW_INNER_WIDTH });
      Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, configurable: true, value: MOCKED_DOCUMENT_CLIENT_WITH });

      Object.defineProperty(dropdownGeneric.htmlElementContentSource, 'clientWidth', { writable: true, configurable: true, value: MOCKED_CLIENT_WIDTH });
      Object.defineProperty(dropdownGeneric.htmlElementContentSource, 'offsetLeft', { writable: true, configurable: true, value: MOCKED_OFFSET_LEFT });

      dropdownGeneric.dropDownClick(dropdownGeneric);

      dropdownGeneric.htmlElementSource.click();

      expect(dropdownGeneric.htmlElementContentSource.style.getPropertyValue('margin-left')).toBe(`-${MARGIN_TO_LEFT}px`);
    });
    test('listener on click - without "openned" class - need to be correct values and calls', () => {
      jest.spyOn(document, 'addEventListener');
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('div');

      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;
      dropdownGeneric.dropDownClick(dropdownGeneric);

      dropdownGeneric.htmlElementSource.click();

      expect(dropdownGeneric.htmlElementSource.className.includes('openned')).toBe(true);
      expect(document.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), true);
    });
    test('listener on click - with "openned" class - need to set correct parameters and calls', () => {
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('div');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('div');
      HTML_ELEMENT_SOURCE_MOCK.className = 'openned';
      const HTML_ELEMENT_OUT_OF_MENU = document.createElement('div');

      const dropdownGeneric = new DropDownGeneric({});
      dropdownGeneric.preventClose = jest.fn(() => false);

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      dropdownGeneric.dropDownClick(dropdownGeneric);

      (document.getElementsByTagName('body')[0]).appendChild(HTML_ELEMENT_OUT_OF_MENU);

      dropdownGeneric.htmlElementSource.click();

      expect(dropdownGeneric.htmlElementContentSource.style.getPropertyValue('margin-left')).toBe('0px');
      expect(dropdownGeneric.htmlElementSource.className.includes('openned')).toBe(false);
    });
    test('listener on click - without "openned" class - htmlElementContentSource with clientWidth plus offsetLeft equal less than window.innerWidth - need to adjust position', () => {
      jest.spyOn(document, 'removeEventListener').mockImplementation();
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('span');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('span');
      const MOCKED_WINDOW_INNER_WIDTH = 1000;
      const MOCKED_DOCUMENT_CLIENT_WITH = 1000;
      const MOCKED_CLIENT_WIDTH = 500;
      const MOCKED_OFFSET_LEFT = 500;

      const dropdownGeneric = new DropDownGeneric({});

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: MOCKED_WINDOW_INNER_WIDTH });
      Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, configurable: true, value: MOCKED_DOCUMENT_CLIENT_WITH });

      Object.defineProperty(dropdownGeneric.htmlElementContentSource, 'clientWidth', { writable: true, configurable: true, value: MOCKED_CLIENT_WIDTH });
      Object.defineProperty(dropdownGeneric.htmlElementContentSource, 'offsetLeft', { writable: true, configurable: true, value: MOCKED_OFFSET_LEFT });

      dropdownGeneric.dropDownClick(dropdownGeneric);

      dropdownGeneric.htmlElementSource.click();

      expect(dropdownGeneric.htmlElementContentSource.style.getPropertyValue('margin-left')).toBe('');
      document.getElementsByTagName('html')[0].innerHTML = '';
    });
    test('listener on click - click on "a" element and with # target', () => {
      jest.spyOn(MouseEvent.prototype, 'preventDefault'); // = callback;
      // Mocks
      const HTML_ELEMENT_CONTENT_SOURCE_MOCK = document.createElement('a');
      HTML_ELEMENT_CONTENT_SOURCE_MOCK.setAttribute('href', '#');
      const HTML_ELEMENT_SOURCE_MOCK = document.createElement('a');
      HTML_ELEMENT_SOURCE_MOCK.setAttribute('href', '#');

      const dropdownGeneric = new DropDownGeneric({});

      dropdownGeneric.htmlElementContentSource = HTML_ELEMENT_CONTENT_SOURCE_MOCK;
      dropdownGeneric.htmlElementSource = HTML_ELEMENT_SOURCE_MOCK;

      dropdownGeneric.dropDownClick(dropdownGeneric);

      const callback = jest.fn();
      MouseEvent.prototype.stopPropagation = callback;

      dropdownGeneric.htmlElementSource.click();

      expect(MouseEvent.prototype.preventDefault).toHaveBeenCalled();
    });
  });
});
