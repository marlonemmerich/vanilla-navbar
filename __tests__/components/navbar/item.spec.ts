import Item from '../../../src/components/navbar/item';

describe('Item', () => {
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
      const item = new Item({});
      expect(item instanceof Item).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(Item.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const item = new Item({});
      expect(Item.prototype.build).toHaveBeenCalled();
    });
  });

  describe('Build', () => {
    test('Must call the correct methods', () => {
      jest.spyOn(Item.prototype, 'insertOnClickEvent');

      // eslint-disable-next-line no-unused-vars
      const item = new Item({});
      expect(Item.prototype.insertOnClickEvent).toHaveBeenCalled();
    });
    test('Without parameters - htmlElementSource need to have correct elements', () => {
      const item = new Item({});

      expect(item.htmlElementSource.id).not.toBe(CUSTOM_ID);
      expect(item.htmlElementSource.tagName).toBe('A');
      expect(item.htmlElementSource.getAttribute('href')).not.toBe(undefined);
      expect(item.htmlElementSource.innerHTML).not.toBe(undefined);
    });
    test('With parameters - htmlElementSource need to have correct elements', () => {
      const item = new Item(ITEM_MOCK);

      expect(item.htmlElementSource.id).toBe(CUSTOM_ID);
      expect(item.htmlElementSource.tagName).toBe('A');
      expect(item.htmlElementSource.getAttribute('href')).toBe(CUSTOM_HREF);
      expect(item.htmlElementSource.innerHTML).toBe(CUSTOM_TEXT);
    });
  });
});
