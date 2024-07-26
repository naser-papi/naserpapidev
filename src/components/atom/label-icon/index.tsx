interface IconLabelProps {
    icon: JSX.Element;
    label: string;
}

const IconLabel = ({ icon, label }: IconLabelProps) => {
    return (
        <div className={"flex items-center gap-2 text-secondary-900"}>
            {icon}
            <label className={"font-ibm text-primary-100 text-sm font-normal"}>
                {label}
            </label>
        </div>
    );
};

export default IconLabel;
