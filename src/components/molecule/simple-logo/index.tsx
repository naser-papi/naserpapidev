import { LinkLable } from "@/components/atom";

interface SimpleLogoProps {
    bold: string;
    title: string;
}

const SimpleLogo = ({ bold, title }: SimpleLogoProps) => {
    return (
        <div className={"flex items-center gap-2"}>
            <LinkLable text={bold} active={true} />
            <LinkLable text={title} />
        </div>
    );
};

export default SimpleLogo;
