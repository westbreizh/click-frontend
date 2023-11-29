import  { useEffect } from 'react';

export default function TabTitle({ title, children }) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

