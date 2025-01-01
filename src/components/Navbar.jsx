export default function Navbar() {
  return (
    <div>
        <div className="bg-slate-900 text-gray-300 p-3 flex justify-between">
            <div className="text-4xl font-mono cursor-pointer ">Todos</div>
            <div className="flex gap-x-5 px-4 mt-2">
                <div className="hover:text-gray-500 cursor-pointer">Name</div>
                <div className="hover:text-gray-500 cursor-pointer">Your Tasks</div>
            </div>
        </div>
    </div>
  )
}
