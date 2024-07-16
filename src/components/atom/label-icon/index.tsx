interface IconLabelProps {
    icon: string;
    label: string;
}

const IconLabel = ({ icon, label }: IconLabelProps) => {
    return (
        <div className={"flex items-center gap-4 text-secondary-900"}>
            <i className={icon} />
            <label className={"font-ibm text-primary-100 text-sm font-normal"}>
                {label}
            </label>
        </div>
    );
};

export default IconLabel;
