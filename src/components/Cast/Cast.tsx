import { useMovieCredits } from '@/features/people/hooks'
import type { CastMember } from '@/features/people/types'
import { ActorCard } from './ActorCard/ActorCard'

const Cast = ({ movieId }: { movieId: number }) => {
    const { data, isError, error } = useMovieCredits(movieId);

    if (isError) return <pre>Error: {String(error)}</pre>;

    const cast: CastMember[] = data?.cast ?? [];

    if (!cast.length) return null;

    return (
        <>
            <h2>
                Movie Cast
            </h2>
            <div>
                {cast.slice(0, 16).map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </div>
        </>
    );
};

export default Cast
