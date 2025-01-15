import Image from "next/image"

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-lg text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment"
            className="bg-transparent outline-none flex-wrap"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 mt-6 justify-between">
          {/* AVATAR*/}
          <Image
            src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* DESC*/}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Ammulu</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, nunc non luctus lacinia, nisl felis tempus diam, ac
              vestibulum
            </p>
            {/* like and reply inside comments */}
            <div className="flex items-center gap-8 text-gray-400 text-xs mt-2">
              <div className="flex items-center gap-4 cursor-pointer">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />

                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Comments
