import Link from "next/link";

interface IconLabelProps {
    icon: JSX.Element;
    label: string;
    link?: string;
}

const IconLabel = ({ icon, label, link }: IconLabelProps) => {
    const className = `flex items-center gap-2 text-secondary-900`;
    const children = (
        <>
            {icon}
            <label
                className={`font-ibm text-primary-100 text-sm font-normal sm:text-lg ${link ? "cursor-pointer" : ""}`}
            >
                {label}
            </label>
        </>
    );
    if (link) {
        return (
            <Link href={link} className={className}>
                {children}
            </Link>
        );
    }
    return <div className={className}>{children}</div>;
};

export default IconLabel;
