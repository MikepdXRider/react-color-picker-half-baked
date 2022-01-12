import { useEffect, useState } from 'react';
import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';

// In our `ColorPicker` view, we have quite a few `useState` calls and a `useEffect` that we want to refactor out into custom hooks: `useColorPicker` and `useAffirmation`. Your job is to create these custom hooks by **extracting** the relevant `useState` and `useEffect` calls into their corresponding custom hooks.

export default function ColorPicker() {
  // move into custom hook useColorPicker
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [content, setContent] = useState('Hello, world!');
  const [didChangeColor, setDidChangeColor] = useState(false);
  
  // move into custom hook useAffirmation
  const [affirmation, setAffirmation] = useState('');

  // move into custom hook useAffirmation
  useEffect(() => {
    const affirmations = [
      'Great choice!',
      'I love that color!',
      'Looks good!',
      'What a great color combo!',
      'Ooh la la, so fancy',
    ];
    // Generate a random whole number between 0 and the last index of the array
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  }, [bgColor, fgColor]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
