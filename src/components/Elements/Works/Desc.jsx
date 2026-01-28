const Desc = (props) => {
  const { desc, classname } = props;
  const textColorClasses = classname
    .split(" ")
    .filter((cls) => cls.startsWith("text-") || cls.startsWith("dark:text-"))
    .join(" ");

  return (
    <p
      className={`mb-4 text-sm leading-relaxed line-clamp-2 ${textColorClasses}`}
    >
      {desc}
    </p>
  );
};

export default Desc;
