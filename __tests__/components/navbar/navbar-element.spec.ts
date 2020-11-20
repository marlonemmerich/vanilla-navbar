import { NavbarElement } from '../../../src/components/navbar/navbar-element';

describe('NavbarElement', () => {
  const CUSTOM_ID = 'custom-id';
  const CUSTOM_HIDE_ON_DEVICE = 'mobile';
  const CUSTOM_POSITION = 'right';
  const CUSTOM_FORCE_NAVBAR = true;
  const CUSTOM_CLICK_EVENT = 'custom-href';
  const CUSTOM_CLASS = 'custom-href';
  const NAVBAR_MOCK = {
    idElement: CUSTOM_ID,
    hideOnDevice: CUSTOM_HIDE_ON_DEVICE,
    position: CUSTOM_POSITION,
    forceNavbarTop: CUSTOM_FORCE_NAVBAR,
    clickEvent: CUSTOM_CLICK_EVENT,
    customClass: CUSTOM_CLASS,
    build() {},
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const navbarElement = new NavbarElement({});
      expect(navbarElement instanceof NavbarElement).toBe(true);
    });

    test('With paramerters - need to set correct values', () => {
      const navbarElement = new NavbarElement({});
      expect(navbarElement.idElement).toBe(undefined);
      expect(navbarElement.hideOnDevice).toBe(undefined);
      expect(navbarElement.position).toBe('left');
      expect(navbarElement.forceNavbarTop).toBe(false);
      expect(navbarElement.clickEvent).toBe(undefined);
      expect(navbarElement.customClass).toBe(undefined);
    });

    test('Without paramerters - need to set correct default values', () => {
      const navbarElement = new NavbarElement(NAVBAR_MOCK);
      expect(navbarElement.idElement).toBe(CUSTOM_ID);
      expect(navbarElement.hideOnDevice).toBe(CUSTOM_HIDE_ON_DEVICE);
      expect(navbarElement.position).toBe(CUSTOM_POSITION);
      expect(navbarElement.forceNavbarTop).toBe(CUSTOM_FORCE_NAVBAR);
      expect(navbarElement.clickEvent).toBe(CUSTOM_CLICK_EVENT);
      expect(navbarElement.customClass).toBe(CUSTOM_CLASS);
    });
  });

  describe('getElementClasses', () => {
    test('Without customClass and hideOnDevice - need to return only position', () => {
      const navbarElement = new NavbarElement({});
      expect(navbarElement.getElementClasses()).toBe('left');
    });

    test('Without customClass - need to return customClass and position', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.customClass = CUSTOM_CLASS;
      expect(navbarElement.getElementClasses()).toBe(`${CUSTOM_CLASS} left`);
    });

    test('With customClass and hideOnDevice - need to return with customClass, hideOnDevice and position', () => {
      const navbarElement = new NavbarElement({});

      jest.spyOn(navbarElement, 'getClassToHideOnDevice');

      navbarElement.customClass = CUSTOM_CLASS;
      navbarElement.hideOnDevice = CUSTOM_HIDE_ON_DEVICE;
      expect(navbarElement.getElementClasses()).toBe(`${CUSTOM_CLASS}  navbar-hide-mobile left`);
      expect(navbarElement.getClassToHideOnDevice).toHaveBeenCalled();
    });
  });

  describe('getClassToHideOnDevice', () => {
    test('need to give correct value for mobile', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.hideOnDevice = 'mobile';
      expect(navbarElement.getClassToHideOnDevice()).toBe(' navbar-hide-mobile');
    });
    test('need to give correct value for desktop', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.hideOnDevice = 'desktop';
      expect(navbarElement.getClassToHideOnDevice()).toBe(' navbar-hide-desktop');
    });
    test('need to give correct value for default', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.hideOnDevice = 'no-one';
      expect(navbarElement.getClassToHideOnDevice()).toBe('');
    });
  });

  describe('insertOnClickEvent', () => {
    test('element without clickEvent - no one calls are expected', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.htmlElementSource = document.createElement('div');
      jest.spyOn(navbarElement.htmlElementSource, 'addEventListener');
      navbarElement.insertOnClickEvent(navbarElement);
      expect(navbarElement.htmlElementSource.addEventListener).not.toHaveBeenCalled();
    });

    test('element with clickEvent - need to get correct calls', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.clickEvent = CUSTOM_CLICK_EVENT;
      navbarElement.htmlElementSource = document.createElement('div');
      jest.spyOn(navbarElement.htmlElementSource, 'addEventListener');
      navbarElement.insertOnClickEvent(navbarElement);

      expect(navbarElement.htmlElementSource.addEventListener).toHaveBeenCalled();
    });

    test('click on htmlElementSource of the element - need to get correct call', () => {
      const navbarElement = new NavbarElement({});
      navbarElement.clickEvent = CUSTOM_CLICK_EVENT;
      navbarElement.htmlElementSource = document.createElement('div');
      navbarElement.insertOnClickEvent(navbarElement);
      jest.spyOn(document, 'dispatchEvent');
      navbarElement.htmlElementSource.click();

      expect(document.dispatchEvent).toHaveBeenCalled();
    });
  });
});
