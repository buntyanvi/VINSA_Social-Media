import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="h-150 flex items-center justify-center">
      <SignUp />
    </div>
  )
}
