import Link from "next/link";

interface VertMenuIconProps {
    items: {
        icon: string;
        title: string;
        href: string;
    }[];
}

const VertMenuIcon = ({ items }: VertMenuIconProps) => {
    return (
        <div
            className={
                "flex flex-col gap-1 border-2 border-primary-600 rounded-full p-2 text-primary-100"
            }
        >
            {items.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className={
                        "text-lg h-10 w-10 rounded-full hover:bg-primary-200 hover:text-primary-800 text-center px-2 py-1"
                    }
                >
                    <i className={item.icon} />
                </Link>
            ))}
        </div>
    );
};

export default VertMenuIcon;
