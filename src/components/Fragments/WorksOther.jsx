import WorksOtherData from "../../data/works-other.json";
import ImageOther from "../Elements/Works/ImageOther";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WorksOther = () => {
  const [showAll, setShowAll] = useState(false);
  const [renderAll, setRenderAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setRenderAll(true);
    } else {
      const timeout = setTimeout(() => {
        setRenderAll(false);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [showAll]);

  const extractBorderClass = (cssString) => {
    const classes = cssString.split(" ");
    const borderClass = classes.find(
      (cls) =>
        cls.startsWith("border-") &&
        !cls.startsWith("border-t-") &&
        !cls.startsWith("border-t ") &&
        cls !== "border-t" &&
        cls.includes("/"),
    );

    return borderClass
      ? `border-t ${borderClass}`
      : "border-t border-gray-300/40";
  };

  const displayedData = renderAll ? WorksOtherData : WorksOtherData.slice(0, 6);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:py-0">
        <div className="flex justify-center">
          <div
            className={`flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5 ${
              showAll
                ? "max-h-[4000px] sm:max-h-[5000px]"
                : "max-h-[1705px] dark:max-h-[1705px] sm:max-h-[1705px] dark:sm:max-h-[1705px]"
            }`}
          >
            {displayedData.map((workOther) => (
              <article
                key={workOther.id}
                className={`group w-full max-w-md overflow-hidden rounded-2xl transition-all duration-500 sm:max-w-[20rem] sm:rounded-xl ${workOther.css}`}
              >
                <Link to={`/explorations/${workOther.slug}`}>
                  <ImageOther images={workOther.images} />
                </Link>
                <div className="relative p-5 sm:p-4">
                  <Name name={workOther.name} classname={workOther.css} />
                  <Desc desc={workOther.desc} classname={workOther.css} />
                  <div
                    className={`flex items-center justify-between gap-3 pt-3 dark:border-blue-400 ${extractBorderClass(
                      workOther.css,
                    )}`}
                  >
                    <Tech
                      tech1={workOther.tech1}
                      tech2={workOther.tech2}
                      classname={workOther.css}
                    />
                    <Url
                      link={workOther.link}
                      live={workOther.live}
                      classname={workOther.css}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className={`rounded-lg px-4 py-2 text-xs font-medium text-slate-100 transition-colors ${
              showAll
                ? "bg-slate-600 hover:bg-slate-700 dark:border dark:border-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                : "bg-blue-700 hover:bg-blue-800 dark:border dark:border-blue-400 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-700"
            }`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksOther;
