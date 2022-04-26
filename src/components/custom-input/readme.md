# custom-input

## How to use <custom-input />

There is 5 properties witch you can pass to the component.
Every property has relative naming.
Some of them using default state.

At the moment custom-input has one realisation for URL input.
To add more input types you need to extend 'InputType', and add extendable components with its logic.

* type: InputType = InputType.URL; // defines te input type that will be used
* isValid: boolean = true; // defines validity from outside of component
* size: InputSize; // defines size of input
* validationPattern: string; // defines validation pattern for input
* inputTitle: string = 'Input title'; // defines title for input

----------------------------------------------