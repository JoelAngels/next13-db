// "use client" whenever you wanna do an onclick,

//for fetching datais server component

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  console.log(res);
  return (
    <main>
      <h1 className="text-lg py-2 m-4">Hello Next 13 🔥🔥🔥</h1>
    </main>
  );
}

//https://api.themoviedb.org/3/movie/popular
