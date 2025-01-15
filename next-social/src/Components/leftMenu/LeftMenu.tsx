import Image from "next/image"
import ProfileCard from "./ProfileCard"
import Ad from "../Ad"


const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text:sm text-gray-500 flex flex-col gap-2  ">
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>MarketPlace</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Lists</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <a
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-gray-200"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </a>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
      </div>

      <Ad size="sm" />
    </div>
  )
}

export default LeftMenu
