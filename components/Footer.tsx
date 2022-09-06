import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [date, setDate] = useState<number>();

  const getYear = () => {
    setDate(new Date().getFullYear());
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="block w-full text-xs text-center my-14 font-light">
      <p>
        Made with
        <span className="mx-2" role="img" aria-label="emoji">
          ❤️
        </span>
        with React, Next.js, TypeScript & Tailwind
      </p>
      <p>&copy; {date}</p>
    </footer>
  );
};
