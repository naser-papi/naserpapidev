interface TagProps {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <label
            className={
                "bg-secondary-900 rounded-full px-4 py-1 text-primary-900"
            }
        >
            {text}
        </label>
    );
};

export default Tag;
