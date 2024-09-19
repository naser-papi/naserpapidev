const SkillFooter = () => {
    return (
        <p
            className={
                "w-full max-w-5xl rounded-[40px] bg-primary-100 bg-opacity-20 p-6 leading-5 text-primary-50 drop-shadow-lg sm:p-8 sm:text-xl [&>em]:text-secondary-600"
            }
        >
            <span className={"text-secondary-500 underline underline-offset-8"}>
                Beyond technical expertise
            </span>
            , I bring a{" "}
            <strong
                className={"text-secondary-500 underline underline-offset-8"}
            >
                {" "}
                foundation of soft skills{" "}
            </strong>{" "}
            that drive collaboration and innovation. I am passionate about
            fostering <em>teamwork</em>, empowering others to reach their full
            potential through <em>coaching</em> and <em>mentorship</em>. My{" "}
            <em>problem-solving</em> mindset, combined with a keen{" "}
            <em>attention to detail</em>, allows me to navigate complex
            challenges with confidence and creativity. I take pride in
            cultivating open <em>communication</em>, ensuring seamless{" "}
            <em>collaboration</em> across cross-functional teams. With a focus
            on continuous <em>improvement</em>, I adapt quickly to evolving
            environments, embracing change as an opportunity to grow and inspire
            those around me.
        </p>
    );
};

export default SkillFooter;
