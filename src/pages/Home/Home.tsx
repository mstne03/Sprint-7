import { useState } from 'react';
import HeroBackground from '@/components/HeroBackground/HeroBackground'
import TabsToggle from '@/components/TabsToggle/TabsToggle'
import MediaRail from '@/components/MediaRail/MediaRail'

const Home = () => {
    const [trendPeriod, setTrendPeriod] = useState<"day"|"week">("day");

    return (
         <>
            <HeroBackground />
            <div style={{ position: "relative", minHeight: "100vh", zIndex: 0 }}>
                <TabsToggle
                    trendPeriod={trendPeriod}
                    setTrendPeriod={setTrendPeriod}
                />
                <MediaRail trendPeriod={trendPeriod} />
            </div>
        </>
    )
}

export default Home

