import { useState, useEffect } from "react";

/**
 * 
 * @param {string} bgColor Background Color(state)
 * @param {string} fgColor Foreground Color(state)
 * @returns a random affirmation(string) every time the bgColor or fgColor changes
 */
export default function useAffirmation({bgColor, fgColor}) {
  const [affirmation, setAffirmation] = useState('');

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

  return affirmation
}
