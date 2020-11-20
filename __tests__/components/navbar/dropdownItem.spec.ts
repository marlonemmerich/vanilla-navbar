import DropDownItem from '../../../src/components/navbar/dropdownItem';

describe('DropDownItem', () => {
  const CUSTOM_ID = 'custom-id';
  const CUSTOM_TEXT = 'custom-text';
  const CUSTOM_HREF = 'custom-href';
  const ITEM_MOCK = {
    href: CUSTOM_HREF,
    text: CUSTOM_TEXT,
    idElement: CUSTOM_ID,
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const dropdownItem = new DropDownItem({});
      expect(dropdownItem instanceof DropDownItem).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(DropDownItem.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const dropdownItem = new DropDownItem({});
      expect(DropDownItem.prototype.build).toHaveBeenCalled();
    });
  });

  describe('Build', () => {
    test('Must call the correct methods', () => {
      jest.spyOn(DropDownItem.prototype, 'insertOnClickEvent');

      // eslint-disable-next-line no-unused-vars
      const dropdownItem = new DropDownItem({});
      expect(DropDownItem.prototype.insertOnClickEvent).toHaveBeenCalled();
    });
    test('With html and idElement - htmlElementSource need to have correct elements', () => {
      const dropdownItem = new DropDownItem(ITEM_MOCK);

      expect(dropdownItem.htmlElementSource.id).toBe(CUSTOM_ID);
      expect(dropdownItem.htmlElementSource.tagName).toBe('A');
      expect(dropdownItem.htmlElementSource.getAttribute('href')).toBe(CUSTOM_HREF);
      expect(dropdownItem.htmlElementSource.innerHTML).toBe(CUSTOM_TEXT);
    });
    test('With html but without idElement - htmlElementSource need to have correct elements', () => {
      const dropdownItem = new DropDownItem({});

      expect(dropdownItem.htmlElementSource.id).not.toBe(CUSTOM_ID);
      expect(dropdownItem.htmlElementSource.tagName).toBe('A');
      expect(dropdownItem.htmlElementSource.getAttribute('href')).not.toBe(CUSTOM_HREF);
      expect(dropdownItem.htmlElementSource.innerHTML).not.toBe(CUSTOM_TEXT);
    });
  });
});
