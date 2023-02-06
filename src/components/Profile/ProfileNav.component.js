const ProfileNav = ({ selectedNav, setSelectedNav }) => {
  const selectedOptionStyle = "bg-purple-100 text-background-hover";

  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1 w-[12rem] ">
      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "General" ? selectedOptionStyle : "")
        }
        onClick={() => setSelectedNav("General")}
      >
        General
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Teams" ? selectedOptionStyle : "")
        }
        onClick={() => setSelectedNav("Teams")}
      >
        Teams
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Billing" ? selectedOptionStyle : "")
        }
        onClick={() => setSelectedNav("Billing")}
      >
        Billing
      </button>

      {/* --------Admin Settings------------ */}

      <h3 className="text-lg font-medium text-center text-background-hover ">
        Admin Settings
      </h3>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Category" ? selectedOptionStyle : "")
        }
        onClick={() => setSelectedNav("Category")}
      >
        Category
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Products" ? selectedOptionStyle : "")
        }
        onClick={() => setSelectedNav("Products")}
      >
        Products
      </button>
    </nav>
  );
};
export default ProfileNav;
