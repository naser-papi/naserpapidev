const Summary = () => {
    return (
        <div
            className={
                "grid gap-y-2 max-w-xs bg-primary-800 rounded-[40px] p-6 text-primary-50 [&>span]:text-secondary-600 [&>h4]:text-secondary-600 [&_em]:text-secondary-600"
            }
        >
            <span>{"<p>"}</span>
            <h4>Hello !</h4>
            <p>
                My name is Naser and I specialize in web developement that
                utilizes <em>JAVASCRIPT</em>, <em>HTML&CSS</em>,{" "}
                <em>TYPESCRIPT</em>, <em>NEXTJS</em>, and <em>MONGODB</em> etc.
            </p>
            <p>
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving.
            </p>
            <p>
                When I am not coding, I am <em>writing bolgs</em>, reading, or
                picking up some new hands-on art project like{" "}
                <em>photography</em>.
            </p>
            <p>
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
            </p>
            <span>{"<p>"}</span>
        </div>
    );
};

export default Summary;
