import MovieCard from "@/components/ui/movieCard";
import { movieList } from "@/data/movies";


export default function Home() {
  return (
    <div className="flex">{
      movieList.map((movie)=> {
        return MovieCard({movie})
      })
      }</div>
  );
}
