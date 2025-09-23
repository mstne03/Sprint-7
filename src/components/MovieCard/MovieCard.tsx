import type { Movie } from '@/features/movies/types'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }: { movie: Movie }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="flex flex-col items-center w-64 p-4 bg-white/10
                backdrop-blur-md
                border border-white/30
                text-white
                font-semibold
                py-3 px-6
                rounded-2xl
                shadow-xl
                hover:bg-white/20
                hover:backdrop-blur-lg
                transition-all
                duration-300
                ease-in-out
            "
        >
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={`${movie.title}`}
                    className="w-full h96 object-cover rounded-lg mb-4"
                />
            )}
            <div className="w-full">
                <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    {movie.title}
                </h3>
                <p className="text-sm">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    })}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
