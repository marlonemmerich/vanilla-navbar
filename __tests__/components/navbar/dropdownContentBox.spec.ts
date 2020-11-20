import DropDownColumnContentBox from '../../../src/components/navbar/dropdownContentBox';
import DropDownItem from '../../../src/components/navbar/dropdownItem';
import DropDownCustomItem from '../../../src/components/navbar/dropdownCustomItem';

describe('DropDownColumnContentBox', () => {
  const CUSTOM_ID = 'custom-id';
  const DROPDOWNCONTENT_ITEM_MOCK = {
    idElement: undefined,
    text: undefined,
    items: [
      {
        href: 'https://github.com/first-one',
        text: 'First one',
      },
      {
        href: 'https://github.com/second-one',
        text: 'Second one',
      },
    ],
  };

  const DROPDOWNCONTENT_CUSTOM_ITEM_MOCK = {
    idElement: undefined,
    text: undefined,
    customItems: [
      {
        html: '<div>Html of the first one</div>',
      },
      {
        html: '<div>Html of the second one</div>',
      },
    ],
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const dropdownContentBox = new DropDownColumnContentBox({});
      expect(dropdownContentBox instanceof DropDownColumnContentBox).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(DropDownColumnContentBox.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const customElement = new DropDownColumnContentBox({});
      expect(DropDownColumnContentBox.prototype.build).toHaveBeenCalled();
    });

    test('With contentBoxes of DropDownItem- Need to have the correct parameters', () => {
      const dropdownContentBox = new DropDownColumnContentBox(DROPDOWNCONTENT_ITEM_MOCK);

      expect(dropdownContentBox.items.length).toBe(2);

      expect(dropdownContentBox.items[0] instanceof DropDownItem).toBe(true);
      expect(dropdownContentBox.items[1] instanceof DropDownItem).toBe(true);
      expect(dropdownContentBox.withCustomItems).toBe(false);
    });

    test('With contentBoxes of DropDownCustomItem- Need to have the correct parameters', () => {
      const dropdownContentBox = new DropDownColumnContentBox(DROPDOWNCONTENT_CUSTOM_ITEM_MOCK);

      expect(dropdownContentBox.items.length).toBe(2);

      expect(dropdownContentBox.items[0] instanceof DropDownCustomItem).toBe(true);
      expect(dropdownContentBox.items[1] instanceof DropDownCustomItem).toBe(true);
      expect(dropdownContentBox.withCustomItems).toBe(true);
    });

    test('Without parameters - Need to have the correct parameters', () => {
      const dropdownContentBox = new DropDownColumnContentBox({});

      expect(dropdownContentBox.items.length).toBe(0);
      expect(dropdownContentBox.withCustomItems).toBe(false);
    });
  });

  describe('Build', () => {
    test('With text and not without customItems - htmlElementSource need to have content-column-header', () => {
      const DD_ITEM_MOCK_WITH_TEXT = JSON.parse(JSON.stringify(DROPDOWNCONTENT_ITEM_MOCK));
      DD_ITEM_MOCK_WITH_TEXT.text = 'Dropdown Content';
      const dropdownContentBox = new DropDownColumnContentBox(DD_ITEM_MOCK_WITH_TEXT);

      expect(dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-header').length).toBe(1);
      expect((dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-header')[0]).tagName).toBe('SPAN');
    });

    test('Without textcustomItems - htmlElementSource dont need to have content-column-header', () => {
      const dropdownContentBox = new DropDownColumnContentBox(DROPDOWNCONTENT_ITEM_MOCK);

      expect(dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-header').length).toBe(0);
    });

    test('With text and customItems - htmlElementSource dont need to have content-column-header', () => {
      const DD_CUSTOM_MOCK_WITH_TEXT = JSON.parse(JSON.stringify(DROPDOWNCONTENT_CUSTOM_ITEM_MOCK));
      DD_CUSTOM_MOCK_WITH_TEXT.text = 'Dropdown Content';
      const dropdownContentBox = new DropDownColumnContentBox(DD_CUSTOM_MOCK_WITH_TEXT);

      expect(dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-header').length).toBe(0);
    });

    test('With text, without customItems and with idElement - spanContentBox need to have correct id', () => {
      const DD_ITEM_MOCK_TEXT_ID = JSON.parse(JSON.stringify(DROPDOWNCONTENT_ITEM_MOCK));
      DD_ITEM_MOCK_TEXT_ID.text = 'Dropdown Content';
      DD_ITEM_MOCK_TEXT_ID.idElement = CUSTOM_ID;
      const dropdownContentBox = new DropDownColumnContentBox(DD_ITEM_MOCK_TEXT_ID);

      expect((dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-header')[0]).id).toBe(CUSTOM_ID);
    });

    test('With customItems - htmlElementSource need to have correct elements', () => {
      const dropdownContentBox = new DropDownColumnContentBox(DROPDOWNCONTENT_CUSTOM_ITEM_MOCK);

      expect(dropdownContentBox.htmlElementSource.childElementCount).toBe(1);
      expect((dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-scope')[0]).childElementCount).toBe(2);
    });

    test('With items - htmlElementSource need to have correct elements', () => {
      const dropdownContentBox = new DropDownColumnContentBox(DROPDOWNCONTENT_ITEM_MOCK);

      expect(dropdownContentBox.htmlElementSource.childElementCount).toBe(1);
      expect((dropdownContentBox.htmlElementSource.getElementsByClassName('content-column-scope')[0]).childElementCount).toBe(2);
    });
  });
});
