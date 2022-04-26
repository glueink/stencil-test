export type CustomInputProps = {
  type: InputType;
  isValid?: boolean;
  size?: InputSize;
  validationPattern?: string;
  inputTitle?: string;
}
export type UserInputEvent = { value: string; isValid: boolean; };

export type CustomInputData = {
  type: InputType;
  isValid?: boolean;
  value
}

export enum InputType {
  // add supported types
  URL = 'url',
  TEXT = 'text',
}

export enum InputSize {
  // add supported sizes
  DEFAULT = 'default',
  LARGE = 'large',
}