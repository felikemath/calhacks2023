import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

const Error = () => {
  return (
    <div className="flex justify-center pt-8 text-center items-center">
      <ExclamationCircleIcon className="h-8 w-8 text-red-500" />
      <p className="text-md ml-3 font-md">Something went wrong...</p>
    </div>
  )
}

export default Error