import { useTrending } from '@/features/home/hooks'
import { useNavigate } from 'react-router-dom';
import type { MediaItem } from "@/shared/media";
import { img } from "@/shared/images";

type MediaRailProps = {
  trendPeriod: "day" | "week";
}

function Card({ item }: { item: MediaItem }) {
  const navigate = useNavigate();
  const title = item.title || item.name || "—";
  const poster = item.poster_path || item.profile_path;
  const to = item.media_type === "person"
    ? `/persons/${item.id}`
    : `/movies/${item.id}`; 
  return (
    <button
      onClick={() => navigate(to)}
      className="w-40 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 border border-white/20 hover:bg-white/20 transition"
      title={title}
    >
      {poster && <img src={img.poster(poster, "w342")} alt={title} className="w-40 h-60 object-cover" />}
      <div className="p-2 text-left">
        <div className="text-sm font-semibold text-white line-clamp-2">{title}</div>
        {item.vote_average != null && (
          <div className="text-xs text-white/70 mt-1">⭐ {item.vote_average.toFixed(1)}</div>
        )}
      </div>
    </button>
  );
}

const MediaRail = ({ trendPeriod }: MediaRailProps) => {
    const { data: trending } = useTrending(trendPeriod)
    const items = trending?.results ?? [];
    
    return (
        <div className="relative max-w-5xl mx-auto px-4">
            <div className="overflow-x-auto">
                <div className="flex gap-4 pr-4">
                {items.map((i) => (
                    <Card key={`${i.media_type}-${i.id}`} item={i} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default MediaRail
