import AddPost from "@/Components/AddPost"
import LeftMenu from "@/Components/LeftMenu"
import Stories from "@/Components/Stories"
import Feed from "@/Components/Feed"
import RightMenu from "@/Components/RightMenu"

const Homepage = () => {
  return (
    <div className="flex gap-6">
      {/*LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/*CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 pt-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/*RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage
