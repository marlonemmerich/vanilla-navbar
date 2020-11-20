import Logo from '../../../src/components/navbar/logo';

describe('Logo', () => {
  const CUSTOM_ID = 'custom-id';
  const CUSTOM_SRC = 'custom-text';
  const CUSTOM_HREF = 'custom-href';
  const LOGO_MOCK = {
    href: CUSTOM_HREF,
    src: CUSTOM_SRC,
    idElement: CUSTOM_ID,
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const logo = new Logo({});
      expect(logo instanceof Logo).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(Logo.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const logo = new Logo({});
      expect(Logo.prototype.build).toHaveBeenCalled();
    });
  });

  describe('Build', () => {
    test('Must call the correct methods', () => {
      jest.spyOn(Logo.prototype, 'insertOnClickEvent');

      // eslint-disable-next-line no-unused-vars
      const logo = new Logo({});
      expect(Logo.prototype.insertOnClickEvent).toHaveBeenCalled();
    });
    test('Without parameters - htmlElementSource need to have correct elements', () => {
      const logo = new Logo({});

      expect(logo.htmlElementSource.tagName).toBe('DIV');

      expect(logo.htmlElementSource.getElementsByTagName('a').length).toBe(1);
      expect((logo.htmlElementSource.getElementsByTagName('a')[0]).getAttribute('href')).toBe('/');

      expect(logo.htmlElementSource.getElementsByClassName('logo').length).toBe(1);
      expect((logo.htmlElementSource.getElementsByClassName('logo')[0]).id).not.toBe(CUSTOM_ID);
      expect((logo.htmlElementSource.getElementsByClassName('logo')[0]).getAttribute('src')).toBe('undefined');
    });
    test('With parameters - htmlElementSource need to have correct elements', () => {
      const logo = new Logo(LOGO_MOCK);

      expect(logo.htmlElementSource.tagName).toBe('DIV');

      expect(logo.htmlElementSource.getElementsByTagName('a').length).toBe(1);
      expect((logo.htmlElementSource.getElementsByTagName('a')[0]).getAttribute('href')).toBe(CUSTOM_HREF);

      expect(logo.htmlElementSource.getElementsByClassName('logo').length).toBe(1);
      expect((logo.htmlElementSource.getElementsByClassName('logo')[0]).id).toBe(CUSTOM_ID);
      expect((logo.htmlElementSource.getElementsByClassName('logo')[0]).getAttribute('src')).toBe(CUSTOM_SRC);
    });
  });
});
