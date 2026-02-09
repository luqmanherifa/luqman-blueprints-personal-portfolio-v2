import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Title from "../components/Elements/Title/Title";

const Journal = () => {
  useEffect(() => {
    document.title = "Luqman Journal";
  }, []);

  const [imageLoading, setImageLoading] = useState(true);

  return (
    <section className="pb-16 sm:pb-10">
      <div>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title
            classname="bg-yellow-400/10 text-yellow-400 dark:bg-blue-800"
            title="Journal"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center text-base text-slate-400 dark:text-blue-100"
          >
            The life archive — what wasn’t written.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 flex items-center justify-center gap-1 text-center text-base italic text-white dark:text-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-3.5 w-3.5 fill-current text-white dark:text-blue-100"
            >
              <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
            </svg>

            <span className="text-center lg:w-full lg:px-0 sm:w-auto sm:px-4">
              Writing travels beyond distance, time, and even death.
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-3.5 w-3.5 fill-current text-white dark:text-blue-100"
            >
              <path d="M544 360C544 426.3 490.3 480 424 480L416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416L424 416C454.9 416 480 390.9 480 360L480 352L416 352C380.7 352 352 323.3 352 288L352 224C352 188.7 380.7 160 416 160L480 160C515.3 160 544 188.7 544 224L544 360zM288 360C288 426.3 234.3 480 168 480L160 480C142.3 480 128 465.7 128 448C128 430.3 142.3 416 160 416L168 416C198.9 416 224 390.9 224 360L224 352L160 352C124.7 352 96 323.3 96 288L96 224C96 188.7 124.7 160 160 160L224 160C259.3 160 288 188.7 288 224L288 360z" />
            </svg>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div>
            <div className="mx-auto my-7 max-w-5xl lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-0">
              <div className="flex justify-center">
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5">
                  <figure className="group relative h-[432px] w-[576px] max-w-xl overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:h-auto sm:max-w-xs sm:rounded-lg">
                    <a
                      href="https://whatwasntwritten.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                          <svg
                            aria-hidden="true"
                            className="h-8 w-8 animate-spin fill-blue-600 text-slate-200 dark:text-slate-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      )}

                      <img
                        src="/works/whatwasntwritten.gif"
                        alt=""
                        onLoad={() => setImageLoading(false)}
                        className={`h-auto w-full cursor-pointer rounded-2xl transition duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-125
        ${imageLoading ? "opacity-0" : "opacity-100"}
        dark:grayscale dark:hue-rotate-[180deg] dark:filter
      `}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-blue-600 opacity-0 dark:opacity-20" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [-150, 0], opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center text-base"
              >
                <a
                  href="https://whatwasntwritten.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-500 hover:underline dark:text-blue-100 dark:hover:text-blue-300"
                >
                  whatwasntwritten.com
                </a>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journal;
