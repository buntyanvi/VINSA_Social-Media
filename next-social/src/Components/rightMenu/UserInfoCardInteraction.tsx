"use client"
import { switchBlock, switchFollow } from "@/lib/actions"
import { useOptimistic, useState } from "react"

const UserInfoCardInteraction = ({
  currentUserId,
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  currentUserId: string
  userId: string
  isUserBlocked: boolean
  isFollowing: boolean
  isFollowingSent: boolean
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  })
  const follow = async () => {

switchOptimisticFollow("")

    try {
      await switchFollow(userId)
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }))
    } catch (err) {
      console.log(err)
    }
  }

  const [optmisticFollow, switchOptimisticFollow] = useOptimistic(
    userState,
    (state) => ({
      ...state,
      following: state.following && false,
      followingRequestSent:
        !state.following && !state.followingRequestSent ? true : false,
    })
  )

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optmisticFollow.following
            ? "Following"
            : optmisticFollow.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end ">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optmisticFollow.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  )
}

export default UserInfoCardInteraction
