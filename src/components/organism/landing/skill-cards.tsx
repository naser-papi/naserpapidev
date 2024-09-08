import { TimeSkillCard } from "@/components/molecule";

const SkillHistory = [
    {
        start: "2020",
        end: "2024",
        title: "Senior JavaScript Developer",
        skills: [
            {
                icon: "js",
                title: "JavaScript",
                bgColor: "#FAFF00",
            },
            {
                icon: "ts",
                title: "TypeScript",
                bgColor: "#D2DBE0",
            },
            {
                icon: "react",
                title: "React",
                bgColor: "#CAE7EE",
            },
            {
                icon: "next",
                title: "NextJs",
                bgColor: "#CBCFCE",
            },
            {
                icon: "html",
                title: "HTML",
                bgColor: "#EECBC2",
            },
            {
                icon: "css",
                title: "CSS",
                bgColor: "#AEE0F5",
            },
            {
                icon: "ant",
                title: "AntDesign",
                bgColor: "#FFECEE",
            },
            {
                icon: "mat",
                title: "MaterialUI",
                bgColor: "#EDEDED",
            },
            {
                icon: "graphQl",
                title: "GraphQL",
                bgColor: "#FBCCEB",
            },
            {
                icon: "swagger",
                title: "RESTfull API",
                bgColor: "#CFF1B1",
            },
            {
                icon: "npm",
                title: "WebPack",
                bgColor: "#FFA2A1",
            },
            {
                icon: "tailwind",
                title: "TailwindCSS",
                bgColor: "#D9EAF2",
            },
            {
                icon: "sb",
                title: "Storybook",
                bgColor: "#FBD9E5",
            },
            {
                icon: "fig",
                title: "Figma",
                bgColor: "#F8FFFC",
            },
            {
                icon: "nest",
                title: "NestJs",
                bgColor: "#FFCFDA",
            },
            {
                icon: "mongo",
                title: "MongoDB",
                bgColor: "#C0FBB7",
            },
            {
                icon: "electron",
                title: "Electron",
                bgColor: "#FFF",
            },
            {
                icon: "cy",
                title: "Cypress",
                bgColor: "#E2E2FF",
            },
            {
                icon: "exp",
                title: "Express",
                bgColor: "#DDDDDD",
            },
            {
                icon: "redux",
                title: "Redux RTK",
                bgColor: "#E4D3FF",
            },
            {
                icon: "docker",
                title: "Docker",
                bgColor: "#D0EBF2",
            },
            {
                icon: "git",
                title: "git (SVC)",
                bgColor: "#FFEFEB",
            },
            {
                icon: "github",
                title: "GitHub Workflow",
                bgColor: "#FFFFFF",
            },
            {
                icon: "valtio",
                title: "Valtio",
                bgColor: "#EFF3EC",
            },
            {
                icon: "cord",
                title: "Cordova",
                bgColor: "#EFF3EC",
            },
            {
                icon: "eslint",
                title: "ESLint",
                bgColor: "#D6CEFF",
            },
            {
                icon: "strapi",
                title: "Strapi",
                bgColor: "#F2EFFF",
            },
        ],
    },
    {
        start: "2017",
        end: "2019",
        title: "Full Stack Web Developer",
        skills: [
            {
                icon: "js",
                title: "JavaScript",
                bgColor: "#FAFF00",
            },
            {
                icon: "react",
                title: "React",
                bgColor: "#CAE7EE",
            },
            {
                icon: "html",
                title: "HTML",
                bgColor: "#EECBC2",
            },
            {
                icon: "css",
                title: "CSS",
                bgColor: "#AEE0F5",
            },
            {
                icon: "ant",
                title: "AntDesign",
                bgColor: "#FFECEE",
            },
            {
                icon: "sass",
                title: "SASS",
                bgColor: "#FFD9EC",
            },
            {
                icon: "mssql",
                title: "MS-SQL",
                bgColor: "#9EC7F8",
            },
            {
                icon: "cpanel",
                title: "Cpanel",
                bgColor: "#EECBC2",
            },
            {
                icon: "npm",
                title: "WebPack",
                bgColor: "#FFA2A1",
            },
            {
                icon: "bs",
                title: "Bootstrap",
                bgColor: "#E1C9FC",
            },
            {
                icon: "ng",
                title: "Angular",
                bgColor: "#FEDDE5",
            },
            {
                icon: "wp",
                title: "Word Press",
                bgColor: "#D0E3F2",
            },
            {
                icon: "py",
                title: "Python",
                bgColor: "#FBF4D8",
            },
            {
                icon: "git",
                title: "git (SVC)",
                bgColor: "#FFEFEB",
            },
        ],
    },
    {
        start: "2008",
        end: "2016",
        title: "Full Stack .NET Developer",
        skills: [
            {
                icon: "jq",
                title: "JQuery",
                bgColor: "#EDEACB",
            },
            {
                icon: "asp",
                title: "ASP.NET",
                bgColor: "#D2F2FF",
            },
            {
                icon: "mvc",
                title: "MVC.NET(C#)",
                bgColor: "#D2BFFC",
            },
            {
                icon: "mssql",
                title: "MS-SQL",
                bgColor: "#9EC7F8",
            },
            {
                icon: "html",
                title: "HTML",
                bgColor: "#EECBC2",
            },
            {
                icon: "css",
                title: "CSS",
                bgColor: "#AEE0F5",
            },
            {
                icon: "swagger",
                title: "RESTfull API",
                bgColor: "#CFF1B1",
            },
            {
                icon: "owaps",
                title: "OWAPS",
                bgColor: "#FFD6D9",
            },
            {
                icon: "bs",
                title: "Bootstrap",
                bgColor: "#E1C9FC",
            },
        ],
    },
];
const SkillCards = () => {
    return (
        <div
            className={
                "relative flex w-full flex-col justify-center gap-8 py-12 [&>.time-skill-card]:z-10"
            }
        >
            <div
                className={
                    "absolute left-1/2 top-0 z-0 flex h-full flex-col justify-between border-l-2 border-dashed border-primary-700 text-primary-700 [&>i]:ml-[-9px]"
                }
            >
                <i className="fa-solid fa-diamond" />
                <i className="fa-solid fa-circle" />
            </div>
            {SkillHistory.map((sh) => (
                <TimeSkillCard
                    start={sh.start}
                    end={sh.end}
                    title={sh.title}
                    skills={sh.skills}
                />
            ))}
        </div>
    );
};

export default SkillCards;
