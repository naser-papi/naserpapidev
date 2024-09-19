const Summary = () => {
    return (
        <div
            className={
                "grid w-full max-w-5xl gap-y-2 rounded-[40px] bg-primary-800 p-6 text-primary-50 sm:p-8 sm:text-xl [&>h4]:text-secondary-600 [&>span]:text-secondary-600 [&_em]:text-secondary-600 [&_h4]:pl-4 [&_p]:pl-3"
            }
        >
            <span>{"<p>"}</span>
            <h4>Hello!</h4>
            <p>
                I&apos;m Naser, a web developer specializing in{" "}
                <em>JavaScript</em>, <em>TypeScript</em>, <em>Next.js</em>,{" "}
                <em>Nest.js</em>, <em>MongoDB</em>, <em>DevOps</em>,{" "}
                <em>Figma UI/UX Design</em> and more.
            </p>
            <p>
                <span
                    className={
                        "text-secondary-500 underline underline-offset-8"
                    }
                >
                    I turn ideas into fully realized digital products
                </span>
                , managing every step from creative brainstorming and Figma
                UI/UX design to full-stack development with React, Next.js,
                NestJS, MongoDB, and deployment on MS Azure.
            </p>
            <p>
                I am a passionate, driven professional dedicated to writing
                clean, <em>SOLID</em>, and robust code that delivers results. I
                am constantly <em>learning</em> and evolving, always striving to
                improve my craft.
            </p>
            <p>
                Beyond coding, I&apos;m passionate about{" "}
                <em>writing articles</em>, exploring <em>new ideas</em>, and{" "}
                <em>mentoring</em> developers through actionable tips and
                insights.
            </p>
            <p>
                I am excited to <em>contribute</em> to other developer&apos;s
                mission of delivering <em>high-quality</em> products through
                innovation and teamwork.
            </p>
            <span>{"<p>"}</span>
        </div>
    );
};

export default Summary;
