export default function ({ task, finished, click }) {
  return (
    <>
      <div className="w-full p-10 bg-blue-100 rounded-lg">
        <div className="gap-x-2 flex">
          <input style={{ width: "1rem", height: "1rem" }} type="checkbox" checked={finished} onChange={click} />
          <p className="text-black">{task.title}</p>
        </div>
      </div>
    </>
  );
}