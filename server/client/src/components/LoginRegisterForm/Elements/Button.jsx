// eslint-disable-next-line react/prop-types
function Button({buttonName}) {
  return (
    <button
    type="submit"
    // write my classname for button
    className="w-full bg-black text-white text-sm font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      {buttonName}
    </button>
  );
}

export default Button;
