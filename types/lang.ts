export type MenuItemLang = {
  title: string;
  key: string;
};

export type MenuLang = {
  menu: MenuItemLang[];
  homePage: {
    menu: MenuItemLang[];
  };
  userMenu: MenuItemLang[];
};

export type LangState = {
  currentLang: string;
  content: {
    menu: MenuLang;
    common: Record<string, any>;
    home: Record<string, any>;
    registration: Record<string, any>;
  };
};

export enum LANGS {
  EN = 'EN',
  RU = 'RU',
  CZ = 'CZ',
}

export enum LANG_TYPES {
  SET_DATA = 'SET_DATA',
}
