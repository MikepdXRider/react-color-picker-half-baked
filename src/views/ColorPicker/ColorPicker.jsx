import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useAffirmation from '../../hooks/useAffirmation.js';
import { useColorPicker } from '../../hooks/useColorPicker.js';

// In our `ColorPicker` view, we have quite a few `useState` calls and a `useEffect` that we want to refactor out into custom hooks: `useColorPicker` and `useAffirmation`. Your job is to create these custom hooks by **extracting** the relevant `useState` and `useEffect` calls into their corresponding custom hooks.

export default function ColorPicker() {
  // custom hook useColorPicker
  const [colorPicker, handleChange] = useColorPicker();
  // custom hook useAffirmation
  const affirmation = useAffirmation({...colorPicker});

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {colorPicker.didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={colorPicker.fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={colorPicker.bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={colorPicker.content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={colorPicker.content} bgColor={colorPicker.bgColor} fgColor={colorPicker.fgColor} />
    </>
  );
}
