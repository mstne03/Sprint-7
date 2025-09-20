type TrendPeriod = "day" | "week";
type Tab = { value: TrendPeriod; label: string };

type TabsToggleProps = {
    trendPeriod: "day" | "week";
    setTrendPeriod: React.Dispatch<React.SetStateAction<"day" | "week">>;
}

const TabsToggle = (props:TabsToggleProps) => {
    const tabs: Tab[] = [
        { value: "day", label: "Today" },
        { value: "week", label: "This week" },
    ]

    return (
        <div>
            {tabs.map(t => {
                const active = t.value === props.trendPeriod;
                return (
                    <button
                        key={t.value}
                        onClick={() => props.setTrendPeriod(t.value)}
                        className={[
                            "px-3 py-1 rounded-full",
                            active ? "bg-green-700 text-white" : "text-white/80 hover:bg-white/10"
                        ].join(" ")}
                    >
                        {t.label}
                    </button>
                )
            })}
        </div>
    )
}

export default TabsToggle
