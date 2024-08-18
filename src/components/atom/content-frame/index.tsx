interface ContentFrameProps {
    children: JSX.Element;
}

const ContentFrame = ({ children }: ContentFrameProps) => {
    return (
        <div
            className={
                "content-frame w-[320px] h-[520px] border-4 border-primary-50] rounded-tl-[146px] rounded-br-[146px] shadow-[-4px_-4px_2px_#0ED7A1] sm:w-[420px] sm:h-[620px]"
            }
        >
            {children}
        </div>
    );
};

export default ContentFrame;
