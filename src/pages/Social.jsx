import { useEffect, useState } from "react";
import DataSocial from "../data/social.json";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const Social = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [setHoveredIconId] = useState(null);

  useEffect(() => {
    document.title = "Luqman Socials";
  }, []);

  const handleCopy = (display, id, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(display);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="pb-16 sm:pb-12">
      <div className="mx-auto flex max-w-5xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="flex w-[48rem] max-w-2xl flex-col items-center justify-center">
          <Title
            classname="bg-yellow-400/10 text-yellow-400 dark:bg-blue-800"
            title="Socials"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-7 text-center text-base text-slate-400 dark:text-blue-100"
          >
            I’m open to connect — feel free to reach out or just say hi through
            my socials.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl rounded-2xl border border-slate-700 dark:border-blue-400"
          >
            <table className="text-sm text-slate-400 dark:text-blue-100">
              <thead>
                <tr className="dark:border-blue-400">
                  <th className="px-9 py-5 text-left font-semibold sm:px-4">
                    Social
                  </th>
                  <th className="w-80 px-4 py-5 text-left font-semibold sm:px-1">
                    URL
                  </th>
                  <th className="px-8 py-5 sm:px-2"></th>
                </tr>
              </thead>
              <tbody>
                {DataSocial.map((social) => {
                  return (
                    <tr
                      key={social.id}
                      className="group border-t border-slate-700 dark:border-blue-400"
                    >
                      <td className="sm:px-0">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-9 py-5 sm:px-4"
                        >
                          {social.social}
                        </a>
                      </td>
                      <td className="w-80 text-blue-400 group-hover:text-blue-500 dark:text-blue-100 dark:group-hover:text-blue-300 sm:px-0">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-3 py-5 group-hover:underline sm:px-1"
                        >
                          {social.display}
                        </a>
                      </td>
                      <td className="px-4 py-5 sm:px-2">
                        <button
                          onClick={(e) =>
                            handleCopy(social.display, social.id, e)
                          }
                          onMouseEnter={() => setHoveredIconId(social.id)}
                          onMouseLeave={() => setHoveredIconId(null)}
                          className="flex h-5 w-5 items-center justify-center text-slate-400 opacity-0 transition-opacity hover:text-blue-400 group-hover:opacity-100 dark:text-blue-100 dark:hover:text-blue-300"
                          aria-label="Copy link"
                        >
                          <AnimatePresence mode="wait">
                            {copiedId === social.id ? (
                              <motion.svg
                                key="check"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM165.6 378C161.9 364.3 173.1 352 187.3 352L452.7 352C466.9 352 478.1 364.3 474.4 378C455.9 446 393.8 496 320 496C246.2 496 184 446 165.6 378zM240 228C224.5 228 212 240.5 212 256L212 264C212 275 203 284 192 284C181 284 172 275 172 264L172 256C172 218.4 202.4 188 240 188C277.6 188 308 218.4 308 256L308 264C308 275 299 284 288 284C277 284 268 275 268 264L268 256C268 240.5 255.5 228 240 228zM372 256L372 264C372 275 363 284 352 284C341 284 332 275 332 264L332 256C332 218.4 362.4 188 400 188C437.6 188 468 218.4 468 256L468 264C468 275 459 284 448 284C437 284 428 275 428 264L428 256C428 240.5 415.5 228 400 228C384.5 228 372 240.5 372 256z" />
                              </motion.svg>
                            ) : (
                              <motion.svg
                                key="copy"
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: -180 }}
                                transition={{ duration: 0.3 }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z" />
                              </motion.svg>
                            )}
                          </AnimatePresence>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Social;
