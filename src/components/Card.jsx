import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-500 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-9 rounded-lg "
        src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg?size=626&ext=jpg&ga=GA1.1.683873730.1707136347&semt=ais"
        alt="image1"
      />

      <div className="px-5 pb-5">
        <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          I'm Venkata Sai.
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-3">
          I'm a web developer.
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            specialized
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            React.js
          </span>
          <a
            href="https://github.com/Venkata558"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GitHub!
          </a>
        </div>
      </div>
    </div>
  );
}
