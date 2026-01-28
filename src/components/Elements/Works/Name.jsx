const Name = (props) => {
  const { name, classname } = props;
  const textColorClasses = classname
    .split(" ")
    .filter((cls) => cls.startsWith("text-") || cls.startsWith("dark:text-"))
    .join(" ");

  return (
    <div className="relative mb-3">
      <h3
        className={`text-base font-medium leading-tight line-clamp-1 ${textColorClasses}`}
      >
        {name}
      </h3>
    </div>
  );
};

export default Name;
