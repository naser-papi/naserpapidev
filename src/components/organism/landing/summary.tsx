const Summary = () => {
    return (
        <div
            className={
                "grid gap-y-2 w-full max-w-5xl bg-primary-800 rounded-[40px] p-6 text-primary-50 [&>span]:text-secondary-600 [&>h4]:text-secondary-600 [&_em]:text-secondary-600 [&_p]:pl-3 [&_h4]:pl-4 sm:text-xl sm:p-8"
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
                        "underline text-secondary-500 underline-offset-8"
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
