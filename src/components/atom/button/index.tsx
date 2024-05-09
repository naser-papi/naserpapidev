interface ButtonProps extends HTMLButtonElement {
    text: string,
}

const Button = ({text}: ButtonProps) => {
    return (
        <button className={"bg-gray-200 rounded-md px-2 py-1"}>
            {text}
        </button>
    );
};

export default Button;
