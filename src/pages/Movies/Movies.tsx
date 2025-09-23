import { Link, useParams } from 'react-router-dom'
import { useMovies } from '@/features/movies/hooks'
import MovieCard from '@/components/MovieCard/MovieCard'

const Movies = () => {
    const { page = "1" } = useParams();
    const currentPage = Math.max(1, Number(page) || 1);

    const { data, isLoading, isError, error } = useMovies(currentPage);

    if (isLoading) {
        return (
        <div className="flex flex-col items-center justify-center h-[60vh]">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400">
             Loading movies...
            </h1>
        </div>
        );
    }

    if (isError) {
        return <div className="text-center text-red-500 mt-10">Error: {String(error)}</div>;
    }

    const totalPages = data?.total_pages ?? 1;
    const movies = data?.results ?? [];

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h1></h1>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
                {movies.map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
                <Link 
                    to={`/movies/page/${Math.max(1, currentPage - 1)}`}
                    className={`px-4 py-2 rounded-lg border border-white text-white ${
                        currentPage <= 1 ? "opacity-50 pointer-events-none" : "hover:bg-sky-50 hover:text-black"
                    }`}
                >
                    ← Prev
                </Link>
                <span className="text-sm text-white">
                    Page {currentPage} / {totalPages}
                </span>
                <Link
                    to={`/movies/page/${Math.min(totalPages, currentPage + 1)}`}
                    className={`px-4 py-2 rounded-lg border border-white text-white ${
                        currentPage >= totalPages ? "opacity-50 pointer-events-none" : "hover:bg-sky-50 hover:text-black"
                    }`}
                >
                    Next →
                </Link>
            </div>
        </main>
    )
}

export default Movies
