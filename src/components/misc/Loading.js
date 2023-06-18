const Loading = () => {
  return (
    <div className="flex justify-center pt-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
    </div>
  )
}

export default Loading