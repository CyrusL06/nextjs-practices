// Next Js sets up parent props automaticall {params}
// Inside this parent prop would be an object where every place holder
// you have in dynamic route and will be a key store its value in the URL
export default function () {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.blogContent}</p>
    </main>
  );
}
