import Image from "next/image"

interface WorkHistoryCardProps {
    logo: string,
    company: string,
    title: string,
    startDate: string,
    endDate: string,
}

export default function WorkHistoryCard({ logo, company, title, startDate, endDate }: WorkHistoryCardProps) {
    return (
        <div className="flex flex-col gap-2 w-64 shrink-0">
            <div className="aspect-square bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl flex-1 h-64 flex justify-center items-center">
                <Image src={logo} alt="" width={150} height={150} />
            </div>
            <p className="text-sm opacity-40">{title}, {company} <span className="opacity-60">({startDate} - {endDate})</span></p>
        </div>
    )
}