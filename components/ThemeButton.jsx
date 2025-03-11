import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export default function ThemeButton() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
      setTheme(systemTheme);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <button onClick={toggleTheme} className='btn btn-circle btn-ghost btn-sm'>
      {theme === 'dark' ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
    </button>
  );
}
