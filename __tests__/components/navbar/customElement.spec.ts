import CustomElement from '../../../src/components/navbar/customElement';
import DropDownColumn from '../../../src/components/navbar/dropdownColumn';

describe('CustomElement', () => {
  const CUSTOM_ID = 'custom-id';
  const CUSTOM_HTML = '<div>First div</div>';
  const COMPLETE_MOCK_WITH_HTML = {
    idElement: undefined,
    html: CUSTOM_HTML,
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

  const COMPLETE_MOCK_WITHOUT_HTML = {
    idElement: undefined,
    html: undefined,
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
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);
      expect(customElement instanceof CustomElement).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(CustomElement.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);
      expect(CustomElement.prototype.build).toHaveBeenCalled();
    });

    test('With id and with columns and html - Need to have the correct parameters', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITH_HTML };
      completeMockWithId.idElement = CUSTOM_ID;
      const customElement = new CustomElement(completeMockWithId);

      expect(customElement.html).toBe(CUSTOM_HTML);
      expect(customElement.columns[0] instanceof DropDownColumn).toBe(true);
      expect(customElement.columns[1] instanceof DropDownColumn).toBe(true);
    });

    test('Without id and with columns and html - Need to have the correct parameters', () => {
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);

      expect(customElement.columns.length).toBe(2);
      expect(customElement.html).toBe(CUSTOM_HTML);
      expect(customElement.columns[0] instanceof DropDownColumn).toBe(true);
      expect(customElement.columns[1] instanceof DropDownColumn).toBe(true);
    });

    test('Without parameters - Need to have the correct parameters', () => {
      const customElement = new CustomElement({});

      expect(customElement.columns.length).toBe(0);
      expect(customElement.html).toBe(undefined);
    });
  });

  describe('Build', () => {
    test('Without parameters - Must call the correct methods', () => {
      jest.spyOn(CustomElement.prototype, 'insertOnClickEvent');
      jest.spyOn(CustomElement.prototype, 'dropDownClick');

      // eslint-disable-next-line no-unused-vars
      const customElement = new CustomElement({});

      expect(CustomElement.prototype.insertOnClickEvent).toHaveBeenCalled();
      expect(CustomElement.prototype.dropDownClick).not.toHaveBeenCalled();
    });

    test('With parameters - Must call the correct methods', () => {
      jest.spyOn(CustomElement.prototype, 'insertOnClickEvent');
      jest.spyOn(CustomElement.prototype, 'dropDownClick');

      // eslint-disable-next-line no-unused-vars
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);
      expect(CustomElement.prototype.insertOnClickEvent).toHaveBeenCalled();
      expect(CustomElement.prototype.dropDownClick).toHaveBeenCalled();
    });

    test('Without columns and html - htmlElementSource need to have only the div of avatar', () => {
      const customElement = new CustomElement({});
      expect(customElement.htmlElementSource.childElementCount).toBe(0);
      expect(customElement.htmlElementSource.classList.contains('navbar-vanilla-custom-element')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('drop-down')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('left')).toBe(true);
      expect(customElement.htmlElementSource.classList.length).toBe(3);
      expect(customElement.htmlElementSource.tagName).toBe('DIV');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(0); // without div to the elements
      expect(customElement.htmlElementSource.getElementsByClassName('sort-down').length).toBe(0); // without sort down element
      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(0); // without elements
    });

    test('With columns and without html- htmlElementSource need to have correct elements', () => {
      const customElement = new CustomElement(COMPLETE_MOCK_WITHOUT_HTML);
      expect(customElement.htmlElementSource.childElementCount).toBe(2);
      expect(customElement.htmlElementSource.classList.contains('navbar-vanilla-custom-element')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('drop-down')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('left')).toBe(true);
      expect(customElement.htmlElementSource.classList.length).toBe(3);
      expect(customElement.htmlElementSource.tagName).toBe('DIV');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // with div to the elements
      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-content')[0]).childElementCount).toBe(2); // with div to the elements
      expect(customElement.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // with sort down element
      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(2); // 2 elements
    });

    test('Without parameters - htmlElementSource need to have correct elements', () => {
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);
      expect(customElement.htmlElementSource.childElementCount).toBe(3);
      expect(customElement.htmlElementSource.classList.contains('navbar-vanilla-custom-element')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('drop-down')).toBe(true);
      expect(customElement.htmlElementSource.classList.contains('left')).toBe(true);
      expect(customElement.htmlElementSource.classList.length).toBe(3);
      expect(customElement.htmlElementSource.tagName).toBe('DIV');

      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // with div to the elements
      expect((customElement.htmlElementSource.getElementsByClassName('drop-down-content')[0]).childElementCount).toBe(2); // with div to the elements
      expect(customElement.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // with sort down element
      expect(customElement.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(2); // 2 elements
    });

    test('With id and with columns - Need to have builded correctly htmlElementSource', () => {
      const completeMockWithId = { ...COMPLETE_MOCK_WITH_HTML };
      completeMockWithId.idElement = CUSTOM_ID;
      const customElement = new CustomElement(completeMockWithId);

      expect(customElement.htmlElementSource.id).toBe(CUSTOM_ID);
      expect(customElement.htmlElementSource.outerHTML.includes(CUSTOM_HTML)).toBe(true);
    });

    test('Without id and with columns - Need to have builded correctly htmlElementSource', () => {
      const customElement = new CustomElement(COMPLETE_MOCK_WITH_HTML);

      expect(customElement.htmlElementSource.id).not.toBe(CUSTOM_ID);
      expect(customElement.htmlElementSource.outerHTML.includes(CUSTOM_HTML)).toBe(true);
    });

    test('Without parameters - Need to have builded correctly htmlElementSource', () => {
      const customElement = new CustomElement({});

      expect(customElement.htmlElementSource.id).not.toBe(CUSTOM_ID);
      expect(customElement.htmlElementSource.outerHTML.includes(CUSTOM_HTML)).toBe(false);
    });
  });
});
