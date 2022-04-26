import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CustomInputProps, InputType, InputSize, UserInputEvent } from '../types';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.scss',
  shadow: true,
})
export class CustomInput implements CustomInputProps {
  @Prop() type: InputType = InputType.URL;

  @Prop() isValid: boolean | undefined;
  
  @Prop() size: InputSize;

  @Prop() validationPattern: string;
  
  @Prop() inputTitle: string = 'Input title';

  @Event() onUserInput: EventEmitter<UserInputEvent>;

  // extend if need
  private get inputProperties(): CustomInputProps {
    return {
      type: this.type,
      isValid: this.isValid,
      size: this.size,
      validationPattern: this.validationPattern,
      inputTitle: this.inputTitle,
    }
  }

  private get inputByType() {
    switch (this.type) {
      case InputType.URL:
        return <url-input
          {...this.inputProperties}
          onUserInput={(event) => this.onUserInput.emit(event.detail)}
        />;
      default:
        null;
    }
  }

  render() {
    return (<Host>{ this.inputByType }</Host>)
  }
}
