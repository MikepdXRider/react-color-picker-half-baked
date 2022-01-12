# Color Picker

## Demo

[https://alchemy-react-color-picker.netlify.app/](https://alchemy-react-color-picker.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/react-color-picker) to get started.

### Learning Objectives

- Use custom hooks to bundle together multiple useState & useEffect calls

### Description

Our app is a simple one: a colorful message generator. It has a form where you select a foreground color, a background color, and write some text. It will take what you chose and display it in a lovely little box below the form. Cool! 😎

Because we want to delight our end users and send out good vibes, it also displays an affirmation message at the top of the form whenever a new foreground or background color is picked. When text is written, it resets the affirmation message back to the normal form instructions.

In our `ColorPicker` view, we have quite a few `useState` calls and a `useEffect` that we want to refactor out into custom hooks: `useColorPicker` and `useAffirmation`. Your job is to create these custom hooks by **extracting** the relevant `useState` and `useEffect` calls into their corresponding custom hooks.

Anything related to the form values or handling form changes for the color picker should go in the `useColorPicker` hook.

Anything related to setting or changing affirmations should go into the `useAffirmation` hook.

### Acceptance Criteria

- `useColorPicker` hook implemented
- `useAffirmation` hook implemented
- Existing tests pass
- **STRETCH**: Combine the multiple `useState` calls for the color picker form into one
- **STRETCH**: Write tests for your custom hooks (see [this post](https://kentcdodds.com/blog/how-to-test-custom-react-hooks) for an example)

### Rubric

| Task                      | Points |
| ------------------------- | ------ |
| `useColorPicker` complete | 5      |
| `useAffirmation` complete | 5      |
