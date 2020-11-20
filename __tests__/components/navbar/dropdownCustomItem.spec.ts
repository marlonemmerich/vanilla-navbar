import DropDownCustomItem from '../../../src/components/navbar/dropdownCustomItem';

describe('DropDownCustomItem', () => {
  const CUSTOM_ID = 'custom-id';
  const CUSTOM_ITEM_MOCK = {
    html: '<div>Html of the first one</div>',
    idElement: undefined,
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const dropdownCustomItem = new DropDownCustomItem({});
      expect(dropdownCustomItem instanceof DropDownCustomItem).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(DropDownCustomItem.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const dropdownCustomItem = new DropDownCustomItem({});
      expect(DropDownCustomItem.prototype.build).toHaveBeenCalled();
    });
  });

  describe('Build', () => {
    test('Must call the correct methods', () => {
      jest.spyOn(DropDownCustomItem.prototype, 'insertOnClickEvent');

      // eslint-disable-next-line no-unused-vars
      const dropdownCustomItem = new DropDownCustomItem(CUSTOM_ITEM_MOCK);
      expect(DropDownCustomItem.prototype.insertOnClickEvent).toHaveBeenCalled();
    });
    test('With html and idElement - htmlElementSource need to have correct elements', () => {
      const DD_CUSTOM_ITEM_WITH_ID = JSON.parse(JSON.stringify(CUSTOM_ITEM_MOCK));
      DD_CUSTOM_ITEM_WITH_ID.idElement = CUSTOM_ID;
      const dropdownCustomItem = new DropDownCustomItem(DD_CUSTOM_ITEM_WITH_ID);

      expect(dropdownCustomItem.htmlElementSource.id).toBe(CUSTOM_ID);
    });
    test('With html but without idElement - htmlElementSource need to have correct elements', () => {
      const dropdownCustomItem = new DropDownCustomItem(CUSTOM_ITEM_MOCK);

      expect(dropdownCustomItem.htmlElementSource.id).not.toBe(CUSTOM_ID);
    });
  });
});
