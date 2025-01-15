import { User } from "@prisma/client"
import Ad from "../Ad"
import Birthdays from "./Birthdays"
import FriendRequests from "./FriendRequests"
import UserInformationCard from "./UserInformationCard"
import UserMediaCard from "./UserMediaCard"
import { Suspense } from "react"

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu
