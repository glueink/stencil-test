# custom-input



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description | Type                                   | Default         |
| ------------------- | -------------------- | ----------- | -------------------------------------- | --------------- |
| `inputTitle`        | `input-title`        |             | `string`                               | `'Input title'` |
| `isValid`           | `is-valid`           |             | `boolean`                              | `undefined`     |
| `size`              | `size`               |             | `InputSize.DEFAULT \| InputSize.LARGE` | `undefined`     |
| `type`              | `type`               |             | `InputType.TEXT \| InputType.URL`      | `InputType.URL` |
| `validationPattern` | `validation-pattern` |             | `string`                               | `undefined`     |


## Events

| Event         | Description | Type                                                |
| ------------- | ----------- | --------------------------------------------------- |
| `onUserInput` |             | `CustomEvent<{ value: string; isValid: boolean; }>` |


## Dependencies

### Depends on

- [url-input](../url-input)

### Graph
```mermaid
graph TD;
  custom-input --> url-input
  style custom-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
