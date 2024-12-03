export enum LocalStorageKey {
  AgeConfirmation = "age-confirmation",
  Locale = "locale",
}

export const LocalStorageService = {
  set: <T>(key: LocalStorageKey, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving to localStorage: ${key}`, error);
    }
  },

  get: <T>(key: LocalStorageKey): T | null => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? (JSON.parse(serializedValue) as T) : null;
    } catch (error) {
      console.error(`Error getting key from localStorage: ${key}`, error);
      return null;
    }
  },

  remove: (key: LocalStorageKey): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing the key: ${key}`, error);
    }
  },
};
