import useSwr from 'swr'

export const usePosts = () => {
  console.log('bobobobob');
  const { data, error, isLoading, mutate } = useSwr('usePosts', (url) =>
    fetch(`http://localhost:9000/posts/get-all-posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  )

  return {
    posts: data,
    isLoading,
    isError: error,
    mutate
  }
}