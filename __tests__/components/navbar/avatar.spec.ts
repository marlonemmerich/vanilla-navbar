import Avatar from '../../../src/components/navbar/avatar';
import DropDown from '../../../src/components/navbar/dropdown';
import DropDownColumn from '../../../src/components/navbar/dropdownColumn';

describe('Avatar', () => {
  const CUSTOM_ID = 'custom-id';
  const SOURCE_IMAGE = 'source-img';

  const MOCK_AVATAR_WITHOUT_ID = {
    src: SOURCE_IMAGE,
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

  const MOCK_AVATAR_WITH_ID = {
    idElement: CUSTOM_ID,
    src: SOURCE_IMAGE,
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
    test('Need to be a instance of Avatar', () => {
      const avatar = new Avatar(new DropDown({}));
      expect(avatar instanceof Avatar).toBe(true);
    });

    test('Must call the correct methods', () => {
      jest.spyOn(Avatar.prototype, 'build');

      // eslint-disable-next-line no-unused-vars
      const avatar = new Avatar(new DropDown({}));
      expect(Avatar.prototype.build).toHaveBeenCalled();
    });

    test('with custom id - Need to have the correct parameters', () => {
      const avatar = new Avatar(MOCK_AVATAR_WITH_ID);

      expect(avatar.columns.length).toBe(2);

      expect(avatar.columns[0].contentBoxes[0].text).toBe('First contentBox');
      expect(avatar.columns[0] instanceof DropDownColumn).toBe(true);

      expect(avatar.columns[1].contentBoxes[0].text).toBe('Second contentBox');
      expect(avatar.columns[1] instanceof DropDownColumn).toBe(true);

      expect((avatar.htmlElementSource.getElementsByClassName('avatar')[0]).id).toBe(CUSTOM_ID);
      expect((avatar.htmlElementSource.getElementsByClassName('avatar')[0]).getAttribute('src')).toBe(SOURCE_IMAGE);
    });

    test('Without custom id - Need to have the correct parameters', () => {
      const avatar = new Avatar(MOCK_AVATAR_WITHOUT_ID);

      expect(avatar.columns.length).toBe(2);

      expect(avatar.columns[0].contentBoxes[0].text).toBe('First contentBox');
      expect(avatar.columns[0] instanceof DropDownColumn).toBe(true);

      expect(avatar.columns[1].contentBoxes[0].text).toBe('Second contentBox');
      expect(avatar.columns[1] instanceof DropDownColumn).toBe(true);

      expect((avatar.htmlElementSource.getElementsByClassName('avatar')[0]).id).not.toBe(CUSTOM_ID);
      expect((avatar.htmlElementSource.getElementsByClassName('avatar')[0]).getAttribute('src')).toBe(SOURCE_IMAGE);
    });
  });
  describe('Build', () => {
    test('Without columns - htmlElementSource need to have only the div of avatar', () => {
      const avatar = new Avatar({});
      expect(avatar.htmlElementSource.childElementCount).toBe(1);
      expect(avatar.htmlElementSource.getElementsByClassName('avatar').length).toBe(1);

      expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(0); // without div to the elements
      expect(avatar.htmlElementSource.getElementsByClassName('sort-down').length).toBe(0); // without sort down element
      expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(0); // without elements
    });

    test('With columns - htmlElementSource need to have correct elements', () => {
      const avatar = new Avatar(MOCK_AVATAR_WITHOUT_ID);
      expect(avatar.htmlElementSource.childElementCount).toBe(2);
      expect(avatar.htmlElementSource.getElementsByClassName('avatar').length).toBe(1);

      expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // only 1 div to dropdown content
      expect(avatar.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // only 1 sort down element
      expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(2); // 2 elements
    });

    test('Must call the correct methods', () => {
      const avatar = new Avatar(new DropDown({}));
      expect(avatar instanceof Avatar).toBe(true);
    });

    test('Need to have the correct parameters', () => {
      jest.spyOn(Avatar.prototype, 'build');
      jest.spyOn(Avatar.prototype, 'insertOnClickEvent');
      jest.spyOn(Avatar.prototype, 'dropDownClick');
      const avatar = new Avatar(new DropDown({}));
      expect(Avatar.prototype.build).toHaveBeenCalled();
      expect(Avatar.prototype.insertOnClickEvent).toHaveBeenCalledWith(avatar);
      expect(Avatar.prototype.dropDownClick).toHaveBeenCalledWith(avatar);
    });
  });
});
