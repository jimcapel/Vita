export type PropertyBase = {
  name: string;
  address: string;
  description: string;
  price: string;
};

export type PropertyForm = PropertyBase & {
  image: File | null;
};

export type Property = { uuid: string; fileName: string } & PropertyBase;

// custom type for the form used to create a property
interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  address: HTMLInputElement;
  price: HTMLInputElement;
  description: HTMLInputElement;
  image: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
