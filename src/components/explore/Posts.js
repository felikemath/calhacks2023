import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import Loading from "../misc/Loading"
import Error from "../misc/Error"
import Card from './Card'

const Post = () => {
  const { posts, isLoading, isError } = usePosts();

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <main className='w-screen flex flex-col gap-4 items-center mt-3 '>
      {posts?.map((post, i) =>
      (
        <>
          <Card c={post} key={i} initialData={posts} />
        </>))}
    </main>
  )
}
export default Post