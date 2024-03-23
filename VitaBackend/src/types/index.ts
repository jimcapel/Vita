export type PropertyBase = {
  name: string;
  address: string;
  price: number;
  description: string;
  fileName: string;
};

export type Property = PropertyBase & {
  uuid: string;
};

export type Properties = {
  [key: string]: PropertyBase;
};
