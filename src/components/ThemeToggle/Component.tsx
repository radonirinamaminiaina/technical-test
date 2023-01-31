import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './styles.css';

export default function Component() {
  const [checked, setChecked] = React.useState(true);

  const { theme, switchTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchTheme(theme === 'light' ? 'dark' : 'light')
    setChecked(e.target.checked);
  };

  return (
    <div className="theme-toggle-container">
      <input className="theme-toggle" type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}
