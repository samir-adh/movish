import { Movie } from "../../model/movie";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function MovieCard({movie}: {movie : Movie}){
    return <Card key={movie.id}>
    <CardHeader>
      <img src={movie.coverUrl} className="max-h-64 rounded-md border-2"/>
    </CardHeader>
    <CardContent>
      <CardTitle>{movie.title}</CardTitle>
      <CardDescription>{movie.year}</CardDescription>
    </CardContent>
    <CardFooter>
      <p>{movie.director}</p>
    </CardFooter>
  </Card>
  
}