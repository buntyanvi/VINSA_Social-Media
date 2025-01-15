import Image from "next/image"

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text:sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* USER*/}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Ammulu</span>
        </div>
        <div className="flex gap-2 justify-end">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs ">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 rounded-lg bg-slate-100 flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <a href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">Upcoming</span>
          <span className="text-gray-500">
            See other 15 have Upcoming Birthdays
          </span>
        </a>
      </div>
    </div>
  )
}

export default Birthdays
