export default function StatsSection() {
    const stats = [
        { number: "20+", label: "Yıllık Deneyim", suffix: "" },
        { number: "1000+", label: "Mutlu Müşteri", suffix: "" },
        { number: "15+", label: "Sigorta Şirketi", suffix: "" },
        { number: "7/24", label: "Destek Hattı", suffix: "" },
    ]
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-section__grid">
                    {stats.map((stat, i) => (
                        <div className="stats-section__item" key={i}>
                            <span className="stats-section__number">{stat.number}</span>
                            <span className="stats-section__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
