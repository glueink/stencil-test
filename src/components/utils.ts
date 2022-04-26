import { InputType } from "./types";

const errorByInputType = (type: InputType): string => {
  switch (type) {
    case InputType.URL:
      return 'Fill a valid URL';
    default:
      return '';
  }
}

export { errorByInputType };