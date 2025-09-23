import { useState } from 'react';
import TabsToggle from '@/components/TabsToggle/TabsToggle'
import MediaRail from '@/components/MediaRail/MediaRail'

const Home = () => {
    const [trendPeriod, setTrendPeriod] = useState<"day"|"week">("day");

    return (
         <main className="flex flex-col px-20">
            <h1 className="text-5xl font-medium text-white mt-5">
                Welcome to PopMovies!
            </h1>

            <h2 className="text-2xl space-y-2.5 font-medium text-white mb-10 mt-10">
                Discover, rate, and save the stories that move you. 
                <br />
                <span className="mt-3 block">
                    Your next favorite awaits!
                </span>
            </h2>

            <div
                className="space-y-5"
                style={{ position: "relative", minHeight: "100vh", zIndex: 0 }}
            >
                <TabsToggle
                    trendPeriod={trendPeriod}
                    setTrendPeriod={setTrendPeriod}
                />
                <MediaRail trendPeriod={trendPeriod} />
            </div>
        </main>
    )
}

export default Home

