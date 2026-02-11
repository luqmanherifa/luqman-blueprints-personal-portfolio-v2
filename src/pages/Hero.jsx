import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  const mantra = "I quietly build things.";
  const repeatCount = 4;

  const [displayedText, setDisplayedText] = useState("");
  const [currentIteration, setCurrentIteration] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIteration >= repeatCount) return;

    const typingSpeed = 80;
    const pauseBetweenLines = 300;

    const timeout = setTimeout(() => {
      if (charIndex < mantra.length) {
        setDisplayedText((prev) => prev + mantra[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          if (currentIteration === 1) {
            setDisplayedText((prev) => prev + " \n");
          } else {
            setDisplayedText((prev) => prev + " ");
          }
          setCurrentIteration(currentIteration + 1);
          setCharIndex(0);
        }, pauseBetweenLines);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIteration, mantra]);

  return (
    <section className="pb-10 sm:pb-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0 }}
        className="mx-auto max-w-5xl bg-bglinelight bg-center bg-no-repeat py-28 dark:bg-bglinedark xl:max-w-4xl lg:max-w-xl lg:bg-none lg:py-9 dark:lg:bg-none md:max-w-lg md:bg-none md:py-9 dark:md:bg-none sm:max-w-xs sm:bg-none sm:py-9 dark:sm:bg-none"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: [-100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-6 text-center text-6xl font-semibold tracking-tight text-slate-100 drop-shadow-sm dark:font-semibold dark:text-blue-100 lg:text-5xl md:text-5xl sm:text-left sm:text-5xl sm:font-semibold"
          >
            Dive <br className="hidden sm:inline" />
            deep into
            <br className="sm:block" />
            <span className="bg-gradient-to-r from-yellow-400 via-emerald-200 to-blue-500 bg-clip-text font-semibold text-transparent dark:text-blue-100">
              Luqman Blueprints
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: [100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
          >
            <p className="h-[3.5rem] w-[24rem] whitespace-pre-wrap text-center text-lg text-slate-400 drop-shadow-sm dark:text-blue-100 sm:h-[7rem] sm:w-[12rem] sm:text-left">
              {displayedText}
              {currentIteration < repeatCount && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
