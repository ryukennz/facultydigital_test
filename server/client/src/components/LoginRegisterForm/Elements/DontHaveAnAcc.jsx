// eslint-disable-next-line react/prop-types
function DontHaveAnAcc({ dontHaveAcc, signUp, onClick }) {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      {dontHaveAcc}
      <a
        onClick={onClick}
        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        {signUp}
      </a>
    </p>
  );
}

export default DontHaveAnAcc;
