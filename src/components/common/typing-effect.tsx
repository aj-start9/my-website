"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingEffect({
    text
}: {
    text: string
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.p
      className="text-gray-800 font-semibold ml-2 text-yellow-500 text-3xl mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayText}
    </motion.p>
  );
}
