import { useParams } from 'react-router-dom'
import { useMovie } from '@/features/movies/hooks'
import MovieSection from './MovieSection/MovieSection'
import Cast from '@/components/Cast/Cast';

type MovieExtra = {
  backdrop_path?: string | null;
  genres?: { id: number; name: string }[];
  runtime?: number | null;
};

const MovieDetail = () => {
    const { id } = useParams();
    const movieId = Number(id);

    const { data: movie, isLoading, isError, error } = useMovie(movieId);

    if (isLoading) {
        return (
            <div>
                <h1>
                    Loading movie...
                </h1>
            </div>
        );
    };

    if (isError || !movie) {
        return (
            <div>
                Error: {String(error ?? "Movie not found")}
            </div>
        )
    }

    const m = movie as typeof movie & MovieExtra;

    const title = movie.title;
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "-";
    const score = Number(movie.vote_average ?? 0);
    const genres = m.genres ?? [];
    const runtime = m.runtime ?? null;
    const backdrop = m.backdrop_path ? `https://image.tmdb.org/t/p/original${m.backdrop_path}` : null;
    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

    return (
        <main>
            <section
                className="relative"
                style={{
                backgroundImage: backdrop
                    ? `linear-gradient(to right, rgba(2,6,23,0.9) 20%, rgba(2,6,23,0.55) 50%, rgba(2,6,23,0.2) 100%), url(${backdrop})`
                    : "linear-gradient(to right, #0b1220, #0b1220)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />

                <MovieSection
                    title={title}
                    year={year}
                    score={score}
                    genres={genres}
                    runtime={runtime}
                    poster={poster}
                    movie={movie}
                />
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <Cast movieId={movieId} />
                </div>
            </section>
        </main>
    )
}

export default MovieDetail
