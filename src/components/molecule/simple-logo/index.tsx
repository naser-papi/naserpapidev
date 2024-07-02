import { LinkLable } from "@/components";

interface SimpleLogoProps {
    bold: string;
    title: string;
}

const SimpleLogo = ({ bold, title }: SimpleLogoProps) => {
    return (
        <div className={"flex items-center gap-2"}>
            <LinkLable text={bold} state={"active"} />
            <LinkLable text={title} />
        </div>
    );
};

export default SimpleLogo;
