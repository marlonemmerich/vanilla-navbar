export class Utils {
  static uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, () => {
      const r = Math.floor(Math.random() * 16);
      return r.toString(16);
    });
  }
}

export const DEFAULT_MOBILE_RESOLUTION = 768;
