// 1. Meta

const siteName = "David J Sorensen";

const hero = {
    image: {
        url: "/images/charlene.webp",
        alt: "nautilus shell design",
        attribution: "Shubham Dhage on Unsplash",
    },
};

const homePage = {
    image: {
        url: "/images/profile-river.jpg",
        alt: "David Sorensen in WTJU tee shirt",
    },
    image2: { url: "/images/caduceus.png", alt: "nautilus shell design" },
    image3: { url: "/images/vision.png", alt: "nautilus shell design" },
    image4: { url: "/images/healthcare.png", alt: "nautilus shell design" },
    image5: { url: "/images/drugs.png", alt: "nautilus shell design" },
    quote1: {
        attribution: "Charlene",
        number: "1",
    },
    quote2: {
        attribution: "Diane",
        number: "2",
    },
};

const portfolioProjects = [
    {
        name: "The Rumen",
        url: "https://therumen.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/rumenScreencap.webp",
            alt: "screenshot of therumen.com",
        },
        description:
            "The Rumen is a literary journal a few friends and I started. I had always wanted to be the editor of one, and now that I'm able to create websites, it's become a project of mine to run what I hope will become a very respected source of fiction, creative non-fiction, and poetry.",
    },
    {
        name: "Charlene Morris",
        url: "https://charlenemorris.com",
        year: "2022",
        technologies: ["Next.js", "MUI"],
        image: {
            url: "/images/charleneScreencap.webp",
            alt: "screenshot of charlenemorris.com",
        },
        description:
            "Charlene Morris is an insurance agent who needed an online presence. I created a website to centralize her services and provide an avenue for lead generation.",
    },
    {
        name: "Zuzu's Hot Five",
        url: "https://ficionalweb-zuzus.netlify.app",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/zuzusScreencap.webp",
            alt: "screenshot of zuzushotfive.com",
        },
        description:
            "Zuzu's is a traditional jazz band in Charlottesville, Virginia. I had gone to many of their shows and danced to countless songs of theirs over the years, so when I found out that they needed a new website, I quickly offered my services.",
    },
    {
        name: "Cosima Hewes",
        url: "https://cosimahewes.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/cosimaScreencap.webp",
            alt: "screenshot of cosimahewes.com",
        },
        description:
            "Cosima Hewes is an artist living near Shelburne Falls, MA, who needed a portfolio that she could show to prospective customers as well as list on her applications for higher education.",
    },
    {
        name: "Fictional Web",
        url: "https://fictionalweb.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/fictionalScreencap.webp",
            alt: "screenshot of fictionalweb.com",
        },
        description:
            "Fictional Web is my personal freelancing website. I have created several templates that I can use to quickly create websites for artists, musicians, photographers, designers, academics, and anyone in the arts. I provide hybrid and custom services as well.",
    },
    {
        name: "2022 KDA PFDD",
        url: "https://kdapfdd.com",
        year: "2022",
        technologies: ["React", "MUI"],
        image: {
            url: "/images/pfddScreencap.webp",
            alt: "screenshot of kdapfdd.com",
        },
        description:
            "One of my earlier projects was a Patient-Focused Drug Development website for the Kennedy's Disease Association. They wanted a place for participants and attendees to reliablly find all the information that they were looking for regarding the event.",
    },
];

// 2. Layout

export { siteName, homePage, portfolioProjects };
