import { useState } from "react";

const ProfileNav = ({ selectedNav, setSelectedNav }) => {
  //   const [selectedNav, setSelectedNav] = useState("General");

  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1 w-[12rem]">
      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "General" ? "bg-gray-400 text-gray-800" : "")
        }
        onClick={() => setSelectedNav("General")}
      >
        General
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Teams" ? "bg-gray-400 text-gray-800" : "")
        }
        onClick={() => setSelectedNav("Teams")}
      >
        Teams
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Billing" ? "bg-gray-400 text-gray-800" : "")
        }
        onClick={() => setSelectedNav("Billing")}
      >
        Billing
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Invoices" ? "bg-gray-400 text-gray-800" : "")
        }
        onClick={() => setSelectedNav("Invoices")}
      >
        Invoices
      </button>

      <button
        className={
          "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 " +
          (selectedNav === "Account" ? "bg-gray-400 text-gray-800" : "")
        }
        onClick={() => setSelectedNav("Account")}
      >
        Account
      </button>
    </nav>
  );
};
export default ProfileNav;
