import { Utils, DEFAULT_MOBILE_RESOLUTION } from '../../../src/utils/utils';

fdescribe('Utils', () => {
  describe('uuidv4', () => {
    test('Must have the correct pattern', () => {
      const uuid = Utils.uuidv4();

      expect(uuid.length).toBe(36); // 36 chars

      expect(uuid[8]).toBe('-');
      expect(uuid[13]).toBe('-');
      expect(uuid[18]).toBe('-');
      expect(uuid[23]).toBe('-');
      expect(uuid[14]).toBe('4');
    });
  });
  describe('DEFAULT_MOBILE_RESOLUTION', () => {
    test('Must have the correct value', () => {
      expect(DEFAULT_MOBILE_RESOLUTION).toBe(768);
    });
  });
});
