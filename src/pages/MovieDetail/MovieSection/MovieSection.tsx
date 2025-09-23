import type { Movie } from '@/features/movies/types'

type MovieSectionProps = {
    title:string,
    year:string | number,
    score:number,
    genres:{ id:number, name:string }[],
    runtime:number | null,
    poster:string | null,
    movie:Movie | null,
}

const ScoreBadge = ({ value }: {value: number}) => {
    const pct = Math.round(value * 10);
    return (
        <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/20">
            <span className="text-sm font-bold text-white">{pct}<span className="text-[10px]">%</span></span>
        </div>
    )
}

const MovieSection = ({
    title,
    year,
    score,
    genres,
    runtime,
    poster,
    movie,
}: MovieSectionProps) => {

    return (
        <div className="relative text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {poster && (
                <img
                    src={poster}
                    alt={title}
                    className="w-full md:w-72 lg:w-80 rounded-xl shadow-2xl border border-white/10"
                />
                )}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold">
                    {title} <span className="opacity-80 font-semibold">({year})</span>
                    </h1>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/80">
                    {movie?.release_date && (
                        <span>
                        {new Date(movie?.release_date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        })}
                        </span>
                    )}
                    {runtime ? <span>• {Math.floor(runtime / 60)}h {runtime % 60}m</span> : null}
                    {!!genres.length && (
                        <>
                        <span>•</span>
                        <ul className="flex flex-wrap gap-2">
                            {genres.map((g) => (
                            <li key={g.id} className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                                {g.name}
                            </li>
                            ))}
                        </ul>
                        </>
                    )}
                    </div>

                    <div className="mt-5 flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <ScoreBadge value={score} />
                        <div className="text-sm leading-tight">
                        <div className="font-semibold">User Score</div>
                        <div className="text-white/70">Puntuación media</div>
                        </div>
                    </div>

                    <div className="h-6 w-px bg-white/20" />

                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10" title="Add to list">＋</button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10" title="Mark as favorite">❤</button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10" title="Add to watchlist">✔</button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10" title="Rate it">★</button>
                    </div>
                    </div>

                    {movie?.overview && (
                    <div className="mt-6">
                        <h2 className="text-xl font-bold">Overview</h2>
                        <p className="mt-2 text-white/90 leading-relaxed">{movie.overview}</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieSection
