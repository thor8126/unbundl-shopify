function ThemeButton(props) {
  const { toggleTheme, activeTheme } = props;

  const handleClick = () => {
    toggleTheme(props.name);
  };

  return (
    <button
      onClick={handleClick}
      className={`outline-base-content overflow-hidden rounded-lg text-left ${
        activeTheme === props.name ? "visible" : ""
      }`}
      data-set-theme={props.name}
    >
      <div
        data-theme={props.name}
        className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
      >
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-3 w-3 shrink-0 ${
                activeTheme === props.name ? "visible" : "invisible"
              }`}
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
            <div className="flex-grow text-sm">{props.name}</div>
            <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
              <div className="bg-primary w-2 rounded"></div>
              <div className="bg-secondary w-2 rounded"></div>
              <div className="bg-accent w-2 rounded"></div>
              <div className="bg-neutral w-2 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ThemeButton;
