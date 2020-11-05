import { Avatar } from '../../../src/components/navbar/avatar';
import { DropDown } from '../../../src/components/navbar/dropdown';
import { DropDownColumn } from '../../../src/components/navbar/dropdownColumn';

describe('Avatar', () => {
    let arrayMockColumns = [
        {text: 'First column'},
        {text: 'Second column'},
    ];

    let _completeAvatarMock = {
        columns: arrayMockColumns
    };

    describe("Constructor", () => {
        test("Need to be a instance of Avatar", () => {
            var avatar = new Avatar(new DropDown({}));
            expect(avatar instanceof Avatar).toBe(true);
        });

        test("Must call the correct methods", () => {
            jest.spyOn(Avatar.prototype, 'build');
            let avatar = new Avatar(new DropDown({}));
            expect(Avatar.prototype.build).toHaveBeenCalled();
        });

        test("Need to have the correct parameters", () => {


            // let secondDropDownColumn = new DropDownColumn({text: 'Second'});


            let avatar = new Avatar(_completeAvatarMock);

            expect(avatar.columns.length).toBe(2);

            expect(avatar.columns[0].text).toBe('First column');
            expect(avatar.columns[0] instanceof DropDownColumn).toBe(true);

            expect(avatar.columns[1].text).toBe('Second column');
            expect(avatar.columns[1] instanceof DropDownColumn).toBe(true);
        });
    });
    describe("Build", () => {
        test("Without columns - htmlElementSource need to have only the div of avatar", () => {
            var avatar = new Avatar({});
            expect(avatar.htmlElementSource.childElementCount).toBe(1);
            expect(avatar.htmlElementSource.getElementsByClassName('avatar').length).toBe(1);

            expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(0); // without div to the elements
            expect(avatar.htmlElementSource.getElementsByClassName('sort-down').length).toBe(0); // without sort down element
            expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(0); // without elements
        });

        test("With columns - htmlElementSource need to have correct elements", () => {
            var avatar = new Avatar(_completeAvatarMock);
            expect(avatar.htmlElementSource.childElementCount).toBe(2);
            expect(avatar.htmlElementSource.getElementsByClassName('avatar').length).toBe(1);

            expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content').length).toBe(1); // only 1 div to dropdown content
            expect(avatar.htmlElementSource.getElementsByClassName('sort-down').length).toBe(1); // only 1 sort down element
            expect(avatar.htmlElementSource.getElementsByClassName('drop-down-content-column-box').length).toBe(2); // 2 elements
        });

        test("Must call the correct methods", () => {
            var avatar = new Avatar(new DropDown({}));
            expect(avatar instanceof Avatar).toBe(true);
        });

        test("Need to have the correct parameters", () => {
            jest.spyOn(Avatar.prototype, 'build');
            jest.spyOn(Avatar.prototype, 'insertOnClickEvent');
            jest.spyOn(Avatar.prototype, 'dropDownClick');
            let avatar = new Avatar(new DropDown({}));
            expect(Avatar.prototype.build).toHaveBeenCalled();
            expect(Avatar.prototype.insertOnClickEvent).toHaveBeenCalledWith(avatar);
            expect(Avatar.prototype.dropDownClick).toHaveBeenCalledWith(avatar);
        });
    });
})
