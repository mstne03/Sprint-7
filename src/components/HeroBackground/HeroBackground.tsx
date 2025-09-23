import { useMemo, type PropsWithChildren } from 'react'
import { useTrending } from '@/features/home/hooks'
import { img } from '@/shared/images'

const HeroBackground = ({ children }: PropsWithChildren) => {
    const { data: trendingDay } = useTrending("day");

    const heroBackDrop = useMemo(() => {
        const first = trendingDay?.results?.find(r => r.backdrop_path);
        return first ? img.backdrop(first.backdrop_path, "original") : undefined;
    }, [trendingDay]);

    return (
        <div
            className="w-[100vw] h-[100vh] fixed -z-1 top-0 left-0"
            style={{
                backgroundImage: heroBackDrop
                    ? `linear-gradient(to right, rgba(3,7,18,0.8), rgba(3,7,18,0.4)), url(${heroBackDrop})`
                    : "linear-gradient(to right, #0f172a, #0369a1",
                backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
            {children}
        </div>
    )
}

export default HeroBackground
