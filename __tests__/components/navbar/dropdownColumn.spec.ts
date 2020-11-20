import DropDownColumn from '../../../src/components/navbar/dropdownColumn';
import DropDownColumnContentBox from '../../../src/components/navbar/dropdownContentBox';

describe('DropDownColumn', () => {
  const DROPDOWNCONTENT_MOCK = {
    contentBoxes: [
      {
        text: 'First one',
      },
      {
        text: 'Second one',
      },
    ],
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const dropdownColumn = new DropDownColumn(DROPDOWNCONTENT_MOCK);
      expect(dropdownColumn instanceof DropDownColumn).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(DropDownColumn.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const customElement = new DropDownColumn({});
      expect(DropDownColumn.prototype.build).toHaveBeenCalled();
    });

    test('With contentBoxes - Need to have the correct parameters', () => {
      const dropdownColumn = new DropDownColumn(DROPDOWNCONTENT_MOCK);

      expect(dropdownColumn.contentBoxes.length).toBe(2);

      expect(dropdownColumn.contentBoxes[0] instanceof DropDownColumnContentBox).toBe(true);
      expect(dropdownColumn.contentBoxes[1] instanceof DropDownColumnContentBox).toBe(true);
    });

    test('Without parameters - Need to have the correct parameters', () => {
      const dropdownColumn = new DropDownColumn({});

      expect(dropdownColumn.contentBoxes.length).toBe(0);
    });
  });

  describe('Build', () => {
    test('Without columns - htmlElementSource need to have only the div of avatar', () => {
      const customElement = new DropDownColumn({});

      expect(customElement.htmlElementSource.className).toBe('drop-down-content-column-box');
      expect(customElement.htmlElementSource.tagName).toBe('SPAN');

      expect(customElement.htmlElementSource.childElementCount).toBe(1); // div for contentBoxes
      expect((customElement.htmlElementSource.getElementsByTagName('div')[0]).childElementCount).toBe(0);
    });

    test('With columns - htmlElementSource need to have correct elements', () => {
      const customElement = new DropDownColumn(DROPDOWNCONTENT_MOCK);
      expect(customElement.htmlElementSource.className).toBe('drop-down-content-column-box');
      expect(customElement.htmlElementSource.tagName).toBe('SPAN');

      expect(customElement.htmlElementSource.childElementCount).toBe(1); // div for contentBoxes
      expect((customElement.htmlElementSource.getElementsByTagName('div')[0]).childElementCount).toBe(2);
    });
  });
});
