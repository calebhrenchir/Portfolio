import Link from "next/link";

const links = [
    {
        label: "Twitter",
        href: "https://twitter.com/calebhrenchir",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/calebhrenchir",
    },
    {
        label: "Github",
        href: "https://github.com/calebhrenchir",
    },
    {
        label: "caleb@calebhrenchir.com",
        href: "mailto:caleb@calebhrenchir.com",
    }
]

const projects = [
    {
        label: "AI Word Maker",
        href: "https://definitions.vercel.app",
    }
]

export default function Links() {
    return (
        <ul className="p-8">
            <li className="pb-8">
                <h3 className="text-md font-medium pb-4">Projects</h3>
                <ul className="text-md opacity-60 flex flex-col gap-1">
                    {projects.map((project) => (
                        <Link href={project.href} target="_blank">
                            {project.label}
                        </Link>
                    ))}
                </ul>
            </li>

            <li>
                <h3 className="text-md font-medium pb-4">Links</h3>
                <ul className="text-md opacity-60 flex flex-col gap-1">
                    {links.map((link) => (
                        <Link href={link.href} target="_blank">
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </li>
        </ul>
    )
}