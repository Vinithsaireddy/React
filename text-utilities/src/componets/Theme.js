import { useEffect } from 'react';

export default function Theme({ theme }) {
  useEffect(() => {
    document.body.style.color = theme === 'light' ? '#212121' : '#FFFFFF';
    document.body.style.backgroundColor = theme === 'light' ? '#FFFFFF' : '#212121';
  }, [theme]);

  return null;
}
