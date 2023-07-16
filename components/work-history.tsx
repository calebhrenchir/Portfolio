import WorkHistoryCard from "./work-history-card"
import benihanaLogo from "@/public/benihana.svg";
import poolLogo from "@/public/pool.svg";

const jobs = [
    {
        logo: poolLogo,
        company: "EV Pools",
        title: "Tech",
        startDate: "2023",
        endDate: "2023",
    },
    {
        logo: poolLogo,
        company: "Blue Cove Pools",
        title: "Tech",
        startDate: "2022",
        endDate: "2023",
    },
    {
        logo: benihanaLogo,
        company: "Benihana",
        title: "Host/To-Gos",
        startDate: "2022",
        endDate: "2023",
    }
]

export default function WorkHistory() {
    return (
        <li className="pb-8">
            <div className="p-8">
                <h3 className="text-md font-medium">Work</h3>
                <h4 className="text-md opacity-60">Pools, pools, food</h4>
            </div>

            <div className="flex overflow-x-scroll no-scrollbar gap-6 px-8">
                {jobs.map((job) => (
                    <WorkHistoryCard key={job.company} logo={job.logo} company={job.company} title={job.title} startDate={job.startDate} endDate={job.endDate} />
                ))}
            </div>
        </li>
    )
}