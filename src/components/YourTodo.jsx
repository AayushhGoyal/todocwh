export default function YourTodo() {
  return (
    <div className="m-10">
      <div className="h-[80vh] w-full bg-neutral-900 rounded-xl p-8 text-white">
        <div className="text-white font-normal text-2xl">Add a Todo</div>
        <div>
          <input
            type="text"
            className="w-80 ml-4 p-2 pl-3 text-black rounded-2xl mr-4 mt-2 hover:bg-slate-200"
            placeholder="Enter your todo"
          />
          <button className="bg-white h-10 w-20 rounded-lg text-black hover:bg-slate-200">
            Add
          </button>
        </div>

        <div className="m-3 text-xl w-[80vw] ">
          Your Todos
          <br />
          <div className="mt-5 flex justify-between w-[80vw]">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div>
              <button className="bg-white h-10 w-20 rounded-lg mx-3 text-black hover:bg-slate-200">
                Edit
              </button>
              <button className="bg-white h-10 w-20 rounded-lg text-black hover:bg-slate-200 text-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
