const Summary = () => {
    return (
        <div
            className={
                "grid gap-y-2 w-full max-w-5xl bg-primary-800 rounded-[40px] p-6 text-primary-50 [&>span]:text-secondary-600 [&>h4]:text-secondary-600 [&_em]:text-secondary-600 [&_p]:pl-3 [&_h4]:pl-4 sm:text-xl sm:p-8"
            }
        >
            <span>{"<p>"}</span>
            <h4>Hello !</h4>
            <p>
                My name is Naser and I specialize in web developement that
                utilizes <em>JAVASCRIPT</em>, <em>HTML&CSS</em>,{" "}
                <em>TYPESCRIPT</em>, <em>NEXT.js</em>, <em>NEST.js</em>, and{" "}
                <em>MONGODB</em> etc.
            </p>
            <p>
                I am a highly motivated individual and an eternal optimist
                dedicated to writing clear, <em>SOLID</em>, robust code that
                works. I strive never to stop <em>learning</em> and improving.
            </p>
            <p>
                When I&apos;m not coding, I write <em>blog posts</em>, read, or
                learn new ideas to assist other developers with interesting
                articles and tricks.
            </p>
            <p>
                I am excited to contribute to other developer&apos;s mission of
                delivering high-quality products through innovation and
                teamwork.
            </p>
            <span>{"<p>"}</span>
        </div>
    );
};

export default Summary;
