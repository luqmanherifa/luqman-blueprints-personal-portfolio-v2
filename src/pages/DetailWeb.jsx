import React, { useEffect, useState } from "react";
import jsonData from "../data/works-web.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailWeb = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [loadedThumbs, setLoadedThumbs] = useState({});
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selectedObject = data ? data.find((obj) => obj.slug === slug) : null;

  useEffect(() => {
    if (selectedObject) {
      document.title = selectedObject.name + " - Luqman Works";
    }
  }, [selectedObject]);

  useEffect(() => {
    if (selectedObject?.images?.length) {
      setActiveImage(0);
      setImageLoading(true);
    }
  }, [selectedObject]);

  useEffect(() => {
    if (
      !selectedObject?.images?.length ||
      isManual ||
      selectedObject.images.length <= 1
    )
      return;

    const interval = setInterval(() => {
      setActiveImage((prev) => {
        const nextIndex =
          (prev + 1) % Math.min(selectedObject.images.length, 5);
        setImageLoading(true);
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [selectedObject, isManual]);

  useEffect(() => {
    if (!isManual) return;

    const timeout = setTimeout(() => setIsManual(false), 6000);
    return () => clearTimeout(timeout);
  }, [isManual]);

  return (
    <motion.section
      className="pb-20"
      initial={{ opacity: 0 }}
      animate={{ x: [-150, 0], opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="mx-auto flex max-w-2xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl sm:max-w-xs">
          {selectedObject && (
            <div>
              <div className="mb-3 flex gap-3 text-slate-100">
                <div className="rounded-xl border border-slate-500 bg-slate-600 py-1 px-3 text-sm text-slate-300 dark:border-blue-400 dark:bg-blue-800 dark:text-blue-100">
                  {selectedObject.tech1}
                </div>
                <div className="rounded-xl border border-slate-500 bg-slate-600 py-1 px-3 text-sm text-slate-300 dark:border-blue-400 dark:bg-blue-800 dark:text-blue-100">
                  {selectedObject.tech2}
                </div>
              </div>

              <div className="mt-4 mb-2 text-2xl font-semibold leading-tight text-slate-100 dark:text-blue-100">
                <p>{selectedObject.name}</p>
              </div>

              <div className="mb-7 text-slate-400 dark:text-blue-100">
                <p className="text-lg">{selectedObject.desc}</p>
              </div>

              <div>
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:h-auto sm:rounded-2xl">
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-400">
                      <svg
                        aria-hidden="true"
                        className="h-12 w-12 animate-spin fill-blue-600 text-slate-200 dark:text-slate-600"
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
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                  <motion.img
                    key={selectedObject.images[activeImage]}
                    src={selectedObject.images[activeImage]}
                    alt={selectedObject.name}
                    onLoad={() => setImageLoading(false)}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full w-full object-cover"
                  />
                </figure>

                {selectedObject.images.length > 1 && (
                  <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                    {selectedObject.images.slice(0, 5).map((img, index) => {
                      const isActive = index === activeImage;
                      const isLoaded = loadedThumbs[index];

                      return (
                        <motion.button
                          key={img}
                          onClick={() => {
                            if (!isActive) {
                              setIsManual(true);
                              setImageLoading(true);
                              setActiveImage(index);
                            }
                          }}
                          whileHover={{ scale: isActive ? 1 : 1.02 }}
                          animate={{ scale: isActive ? 1 : 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`relative aspect-[4/3] w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors ${
                            isActive
                              ? "border-slate-300 dark:border-blue-400"
                              : "border-transparent"
                          }`}
                        >
                          <div className="absolute inset-0 bg-slate-300 dark:bg-blue-900/40" />

                          {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg
                                className="h-5 w-5 animate-spin text-slate-600 dark:text-blue-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 017 7h-2a5 5 0 00-5-5V5z" />
                              </svg>
                            </div>
                          )}

                          <motion.div
                            className="relative h-full w-full"
                            animate={{
                              opacity: isLoaded ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <img
                              src={img}
                              alt={`Preview ${index + 1}`}
                              onLoad={() =>
                                setLoadedThumbs((prev) => ({
                                  ...prev,
                                  [index]: true,
                                }))
                              }
                              className="h-full w-full object-cover"
                            />
                            <motion.div
                              className="dark:bg-blue-950 absolute inset-0 bg-slate-900"
                              animate={{
                                opacity: isActive ? 0 : 0.5,
                              }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-7 flex flex-col gap-1.5">
                <div className="flex gap-1 text-base text-slate-400 dark:text-blue-100">
                  <div className="font-medium text-slate-100 dark:text-blue-100">
                    GitHub:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-blue-300">
                    <a
                      href={selectedObject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {selectedObject.link}
                    </a>
                  </div>
                </div>
                <div className="flex gap-1 text-base text-slate-400 dark:text-blue-100">
                  <div className="font-medium text-slate-100 dark:text-blue-100">
                    Live:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-blue-300">
                    <a
                      href={selectedObject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {selectedObject.live}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default DetailWeb;
