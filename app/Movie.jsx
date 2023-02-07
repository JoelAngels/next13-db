import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
  console.log(poster_path);
  const imagePath = "https://image/tmdb.org/t/p/original/";
  return (
    <div>
      <h1>{title}</h1>
      <h1>{release_date}</h1>
      <Link href={`www.youtube.com`}>
        <img src={imagePath + poster_path} alt="" />
      </Link>
    </div>
  );
}
