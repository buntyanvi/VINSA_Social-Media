import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import { PrismaClient } from "@prisma/client/extension"
import Image from "next/image"

const AddPost = () => {
  
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex flex-col gap-4 text-sm">
      <div className="flex gap-4 justify-between">
        {/* AVATAR */}
        <Image
          src="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
        {/* POST */}
        <div className="flex-1"></div>
        {/* TEXT INPUT */}
        <form
          action=""
          className="flex gap-4 w-full sm:w-adjusted lg:w-adjusted xl:w-adjusted "
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-6 h-6 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
      </div>
      {/* POST OPTIONS */}
      <div className="flex items-center gap-4  text-gray-400 flex-wrap ">
        <div className="flex items-center gap-2 cursor-pointer ">
          <Image src="/addimage.png" alt="" width={20} height={20} />
          Photo
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addVideo.png" alt="" width={20} height={20} />
          Video
        </div>
        <div className="flex items-center gap-2 cursor-pointer ">
          <Image src="/poll.png" alt="" width={20} height={20} />
          Poll
        </div>
        <div className="flex items-center gap-2 cursor-pointer ">
          <Image src="/addevent.png" alt="" width={20} height={20} />
          Event
        </div>
      </div>
    </div>
  )
}
export default AddPost
