import { useParams } from 'react-router-dom'
import { useMovie } from '@/features/movies/hooks'
import Cast from '@/components/Cast/Cast'

const ScoreBadge = ({ value }: {value: number}) => {
    const pct = Math.round(value * 10);
    return (
        <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/20">
            <span className="text-sm font-bold text-white">{pct}<span className="text-[10px]">%</span></span>
        </div>
    )
}

const MovieDetail = () => {
    return (
        <>

        </>
    )
}

export default MovieDetail
