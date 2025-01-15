import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10  rounded-full"
          />
          <span className="font-medium">Vignesh</span>
        </div>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative ">
          <Image
            src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            alt=""
            className="object-cover rounded-lg relative"
          />
        </div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, nunc non luctus lacinia, nisl felis tempus diam, ac
          vestibulum
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4  bg-slate-100 p-2  rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post
