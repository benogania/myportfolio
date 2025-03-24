import { useState, useEffect } from "react";

const TypingEffect = () => {
  const words = ["Hi I'm Benjun","Frontend Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 120; // Speed of typing & deleting
  const pauseTime = 1500; // Pause time before deleting

  useEffect(() => {
    const currentWord = words[index];
    let timer;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h1 className="text-3xl font-semibold  bg-gradient-to-r from-[#CA5EFA] via-pink-400 to-[#b700ff] bg-clip-text text-transparent  md:text-4xl">
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingEffect;
