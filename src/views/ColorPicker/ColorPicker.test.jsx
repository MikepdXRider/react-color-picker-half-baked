import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('should change colors and content based on input', () => {
    render(<ColorPicker />);

    const fgColor = screen.getByLabelText(/foreground color/);
    const bgColor = screen.getByLabelText(/background color/);
    const content = screen.getByLabelText(/content/);

    fireEvent.change(fgColor, { target: { value: '#ff00cc' } });
    fireEvent.change(bgColor, { target: { value: '#00ffcc' } });
    fireEvent.change(content, { target: { value: 'Cool!' } });

    const display = screen.getByText('Cool!');

    expect(display).toHaveStyle({ color: '#ff00cc', background: '#00ffcc' });
  });
});
