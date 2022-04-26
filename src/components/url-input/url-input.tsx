import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { CustomInputProps, InputType, InputSize, UserInputEvent } from '../types';
import { errorByInputType } from '../utils';

@Component({
  tag: 'url-input',
  styleUrl: 'url-input.scss',
  shadow: true,
})
export class UrlInput implements CustomInputProps {
  @Prop() type: InputType = InputType.URL;

  @Prop() isValid: boolean = true;
  
  @Prop() size: InputSize;

  @Prop() validationPattern: string = 'https?://.+';
  
  @Prop() inputTitle: string;

  @Event({
    bubbles: false,
    composed: false,
  }) userInput: EventEmitter<UserInputEvent>;

  @State() inputErrorString: string = '';

  @State() blured: boolean = false;

  @State() focused: boolean;
  
  @State() inputValue: string = '';


  private get isShowError() {
    return !!this.inputErrorString && this.blured;
  }
  
  private get inputClassRecord(): Record<string, boolean> {
    return {
      'url-input__input': true,
      [`url-input__input--${this.size}`]: true,
      'url-input--error': this.isShowError,
      'url-input--success': !this.inputErrorString && this.blured,
    }
  }

  private validate(_event: Event) {
    const elementTarget: HTMLInputElement = (_event.target as HTMLInputElement);
    const errorMessage = errorByInputType(this.type);
    elementTarget.setCustomValidity('');
    this.inputErrorString = elementTarget.validationMessage;
    const rule = new RegExp(this.validationPattern);
    if (!rule.test(elementTarget.value) || !this.isValid) {
      elementTarget.setCustomValidity(errorMessage);
      this.inputErrorString = errorMessage;
      this.userInput.emit({ value: elementTarget.value, isValid: false });
    } else {
      elementTarget.setCustomValidity('');
      this.inputErrorString = '';
      this.userInput.emit({ value: elementTarget.value, isValid: true });
    }
  }

  private async inputHandler(_event: Event) {
    _event.preventDefault();
    this.blured = false;
    const elementTarget: HTMLInputElement = (_event.target as HTMLInputElement);
    this.inputValue = elementTarget.value;
    this.validate(_event);
  }

  private async blurHandler(_event: FocusEvent) {
    this.blured = true;
  }

  render() {
    return (
      <label class="url-input">
        <span class="url-input__title">{ this.inputTitle }</span>
        <input
          type={this.type}
          class={this.inputClassRecord}
          placeholder="http://www.example.com"
          value={this.inputValue}
          onInput={(event) => this.inputHandler(event)}
          onBlur={(event) => this.blurHandler(event)}
        />
        {this.isShowError ? <span class="url-input__error">
          {this.inputErrorString}
        </span> : null}
      </label>
    );
  }

}
