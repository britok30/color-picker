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
    <footer className="block w-[260px] text-xs text-center my-14 font-light">
      <p>
        Made with
        <span className="mx-2" role="img" aria-label="emoji">
          ❤️
        </span>
        with React, Next.js, TypeScript, Tailwind,{" "}
        <a
          className="hover:underline"
          href="https://github.com/omgovich/react-colorful"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Colorful
        </a>{" "}
        &{" "}
        <a
          className="hover:underline"
          href="https://github.com/omgovich/colord"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colord
        </a>
      </p>

      <p>&copy; {date}</p>
    </footer>
  );
};
