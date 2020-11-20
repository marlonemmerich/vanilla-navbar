import DropDown from '../../../src/components/navbar/dropdown';
import DropDownColumn from '../../../src/components/navbar/dropdownColumn';

describe('DropDown', () => {
  const CUSTOM_ID = 'custom-id';
  const DROPDOWN_HEADER_TEXT = 'Header text';
  const COMPLETE_MOCK_WITH_ID = {
    idElement: CUSTOM_ID,
    text: undefined,
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
  };

  const COMPLETE_MOCK_WITHOUT_ID = {
    idElement: undefined,
    text: undefined,
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
  };

  describe('Constructor', () => {
    test('Need to be a instance of CustomElement', () => {
      const dropdown = new DropDown(COMPLETE_MOCK_WITH_ID);
      expect(dropdown instanceof DropDown).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(DropDown.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const customElement = new DropDown({});
      expect(DropDown.prototype.build).toHaveBeenCalled();
    });

    test('With id, text and with columns - Need to have the correct parameters', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITH_ID };
      completeMockWithId.idElement = CUSTOM_ID;
      completeMockWithId.text = DROPDOWN_HEADER_TEXT;
      const dropdown = new DropDown(completeMockWithId);

      expect(dropdown.columns.length).toBe(2);
      expect(dropdown.text).toBe(DROPDOWN_HEADER_TEXT);

      expect(dropdown.columns[0] instanceof DropDownColumn).toBe(true);
      expect(dropdown.columns[1] instanceof DropDownColumn).toBe(true);

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).id).toBe(CUSTOM_ID);
    });

    test('Without id, text and with columns - Need to have the correct parameters', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITHOUT_ID };
      const dropdown = new DropDown(completeMockWithId);

      expect(dropdown.columns.length).toBe(2);
      expect(dropdown.text).toBe(undefined);

      expect(dropdown.columns[0] instanceof DropDownColumn).toBe(true);
      expect(dropdown.columns[1] instanceof DropDownColumn).toBe(true);

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).id).not.toBe(CUSTOM_ID);
    });

    test('Without parameters - Need to have the correct parameters', () => {
      const dropdown = new DropDown({});

      expect(dropdown.columns.length).toBe(0);
      expect(dropdown.idElement).toBe(undefined);

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).id).not.toBe(CUSTOM_ID);
    });
  });

  describe('Build', () => {
    test('Must call the correct methods', () => {
      jest.spyOn(DropDown.prototype, 'insertOnClickEvent');
      jest.spyOn(DropDown.prototype, 'dropDownClick');

      // eslint-disable-next-line no-unused-vars
      const customElement = new DropDown({});
      expect(DropDown.prototype.insertOnClickEvent).toHaveBeenCalled();
      expect(DropDown.prototype.dropDownClick).toHaveBeenCalled();
    });

    test('With id and text - Need to have builded correctly htmlElementSource', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITH_ID };
      completeMockWithId.idElement = CUSTOM_ID;
      completeMockWithId.text = DROPDOWN_HEADER_TEXT;
      const dropdown = new DropDown(completeMockWithId);

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).id).toBe(CUSTOM_ID);
      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).innerHTML.includes(DROPDOWN_HEADER_TEXT)).toBe(true);
    });

    test('Without id and text - Need to have builded correctly htmlElementSource', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITHOUT_ID };
      const dropdown = new DropDown(completeMockWithId);

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).id).not.toBe(CUSTOM_ID);
      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).innerHTML.includes(DROPDOWN_HEADER_TEXT)).toBe(false);
    });

    test('Without parameters - Need to have builded correctly htmlElementSource', () => {
      const dropdown = new DropDown({});

      expect((dropdown.htmlElementSource.getElementsByClassName('drop-down-header')[0]).innerHTML.includes(DROPDOWN_HEADER_TEXT)).toBe(false);
    });

    test('Without columns - htmlElementSource need to have only the div of avatar', () => {
      const customElement = new DropDown({});

      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-content')[0]).childElementCount).toBe(0);
      expect(customElement.htmlElementSource.classList.contains('drop-down')).toBe(true);

      expect(customElement.htmlElementSource.classList.length).toBe(2);
      expect(customElement.htmlElementSource.tagName).toBe('DIV');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-header').length).toBe(1);
      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-header')[0]).tagName).toBe('A');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // with div to the elements
      expect(customElement.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // with sort down element
      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(0); // without elements
    });

    test('With columns - htmlElementSource need to have correct elements', () => {
      const customElement = new DropDown(COMPLETE_MOCK_WITHOUT_ID);

      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-content')[0]).childElementCount).toBe(2);
      expect(customElement.htmlElementSource.classList.contains('drop-down')).toBe(true);

      expect(customElement.htmlElementSource.classList.length).toBe(2);
      expect(customElement.htmlElementSource.tagName).toBe('DIV');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-header').length).toBe(1);
      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-header')[0]).tagName).toBe('A');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // with div to the elements
      expect(customElement.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // with sort down element
      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(2); // with elements
    });
  });
});
