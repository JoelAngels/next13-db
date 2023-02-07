// "use client" whenever you wanna do an onclick,
//you cannot use useffect or usestate on a server component

//for fetching datais server component

import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  console.log(res);
  return (
    <main>
      <h1 className="text-lg py-2 m-4">Hello Next 13 🔥🔥🔥</h1>
      {res.results.map((movie) => (
        // **What we get from the movie
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      <div></div>
    </main>
  );
}

//https://api.themoviedb.org/3/movie/popular
