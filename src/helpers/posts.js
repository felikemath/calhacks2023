export const newPost = async (imageURL, caption) => {
  console.log('fjslkfjsf');
  console.log(imageURL);
  console.log(caption);
  await fetch("http://localhost:9000/posts/new-post", {
    method: "POST",
    body: JSON.stringify({ imageURL, caption }),
    headers: {
      'Content-Type': 'application/json',

    }
  }).catch((e) => console.log(e.message))
}