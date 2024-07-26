interface TagProps {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <label
            className={
                "bg-secondary-900 rounded-full px-2 py-0.5 text-primary-900 text-sm font-base"
            }
        >
            {text}
        </label>
    );
};

export default Tag;
