import {useState} from 'react'

export function useColorPicker(){
  const [colorPicker, setColorPicker] = useState({
    fgColor: '#ffcc00',
    bgColor: '#212121',
    didChangeColor: false,
    content: 'Hello, World!'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        console.log(value);
        setColorPicker((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: true
          }
        })
        break;
      case 'bgColor':
        setColorPicker((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: true
          }
        })
        break;
      case 'content':
        setColorPicker((prevState) => {
          return {
            ...prevState,
            [name]: value,
            didChangeColor: false
          }
        })
        break;
      default:
        break;
    }
  };

  return [colorPicker, handleChange];
}
