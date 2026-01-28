import { useEffect } from "react";
import WorksWeb from "../components/Fragments/WorksWeb";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";
import Explorations from "./Explorations";

const Works = () => {
  useEffect(() => {
    document.title = "Luqman Works";
  }, []);

  return (
    <>
      <section className="pb-10 sm:pb-5">
        <div>
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
            <Title
              classname="bg-yellow-400/10 text-yellow-400 dark:bg-blue-800"
              title="Works"
            ></Title>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ x: [-150, 0], opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center text-base text-slate-400 dark:text-blue-100"
            >
              Here’s a glimpse of what I’ve worked on — from fun side projects
              to real-world applications.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <WorksWeb />
          </motion.div>
        </div>

        {/* <div className="hidden border-red-400 border-blue-400 border-teal-400 border-yellow-400 border-lime-400 border-indigo-400 border-sky-400 bg-blue-400/10 bg-red-400/10 bg-red-400/10 bg-orange-400/10 bg-orange-400/10 bg-teal-400/10 bg-rose-400/10 bg-sky-400/10 bg-sky-400/10 bg-emerald-400/10 bg-slate-400/10 bg-slate-400/10 bg-amber-400/10 bg-green-400/10 bg-lime-400/10 bg-indigo-400/10 bg-fuchsia-400/10 bg-violet-400/10 text-blue-400 text-red-300 text-teal-400 text-rose-400 text-gray-300 text-sky-400 text-emerald-400 text-amber-400 text-orange-400 text-orange-400 text-green-400 text-slate-300 text-sky-300 text-red-400 text-lime-400 text-indigo-400 text-fuchsia-400 text-violet-400 line-clamp-3 line-clamp-2 dark:text-red-500 dark:text-gray-500 dark:text-yellow-500 dark:text-blue-100 dark:text-amber-600 dark:text-sky-500 dark:text-orange-500 dark:text-lime-500"></div> */}
      </section>

      <Explorations />
    </>
  );
};

export default Works;
