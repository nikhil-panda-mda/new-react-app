
export default function (user) {
  return (
    <>
      <div className="p-2">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.about}</p>
          <button href="#" class="text-sm bg-blue-600">
            Click here
          </button>
        </div>
      </div>
    </>
  );
}