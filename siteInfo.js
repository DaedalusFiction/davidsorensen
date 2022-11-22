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
        attribution: "Ramona",
        number: "2",
    },
};

const portfolioProjects = [
    {
        name: "The Rumen",
        type: "Literary Journal",
        url: "https://therumen.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/rumenScreencap.webp",
            alt: "screenshot of therumen.com",
        },
        challenge:
            "For The Rumen we needed a way to allow users to submit text files of their poetry, prose, or creative non-fiction, as well as image files of their art. We also needed a way to display, download, and delete it that all of our editors could access.",
        solution:
            "I built up custom submissions forms and a custom admin panel that created database entries on Firebase with corresponding URIs to their files in storage",
        description:
            "The Rumen is a literary journal a few friends and I started. I had always wanted to be the editor of one, and now that I'm able to create websites, it's become a project of mine to run what I hope will become a very respected source of fiction, creative non-fiction, and poetry.",
    },
    {
        name: "Charlene Morris",
        type: "Insurance Agent",
        url: "https://charlenemorris.com",
        year: "2022",
        technologies: ["Next.js", "MUI"],
        image: {
            url: "/images/charleneScreencap.webp",
            alt: "screenshot of charlenemorris.com",
        },
        challenge:
            "Charlene needed a simple online presence to establish validity, generate leads, and consolidate information, as well as a contact form with a plugin that linked to an online rate calculator",
        solution:
            "I created for Charlene a clean, sharp website with a look and feel similar to other insurance websites, but was uniquely hers. I included an iframe under the contact form to include her custom plugin.",
        description:
            "Charlene is a local Insurance Agent who specializes in assisting elderly clients signing up for MediCare.",
    },
    {
        name: "Zuzu's Hot Five",
        type: "Musician Portfolio",
        url: "https://fictionalweb-zuzus.netlify.app",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/zuzusScreencap.webp",
            alt: "screenshot of zuzushotfive.com",
        },
        challenge:
            "Zuzu's had an existing site, but their design was a bit dated, and the mobile responsiveness wasn't working well. They also wanted a system for uploading information on their next shows that would require as little maintenance as possible",
        solution:
            "For Zuzu's a designed a website that captures the feel and spirit of their music. I also included an events page that would automatically filter past events into Archives based on the current date, and I created a secure admin panel that Zuzu could use to upload and edit these events herself.",
        description:
            "Zuzu's is a traditional jazz band in Charlottesville, Virginia. I had gone to many of their shows and danced to countless songs of theirs over the years, so when I found out that they needed a new website, I quickly offered my services.",
    },
    {
        name: "Cosima Hewes",
        type: "Artist Portfolio",
        url: "https://cosimahewes.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/cosimaScreencap.webp",
            alt: "screenshot of cosimahewes.com",
        },
        challenge:
            "Cosima needed a website that had an impressive home page and a photo gallery capable of adapting to her growing list of categories",
        solution:
            "I created for Cosima a stylish home gallery for some of her best pieces, and I adapted my existing photo gallery code to allow for easily customizeable categories and subcategories.",
        description:
            "Cosima Hewes is an artist living near Shelburne Falls, MA, who specializes in pastoral, surreal, and female-centric painting.",
    },
    {
        name: "Fictional Web",
        type: "Freelancing Agency",
        url: "https://fictionalweb.com",
        year: "2022",
        technologies: ["Next.js", "MUI", "Firebase"],
        image: {
            url: "/images/fictionalScreencap.webp",
            alt: "screenshot of fictionalweb.com",
        },
        challenge:
            "I needed a freelancing website that established my validity as a designer and web developer, that allowed me to work with the types of clients I enjoy interacting with, and would generate leads.",
        solution:
            "I settled on a design based on an artwork created by a friend of mine which I felt reflected the quality and subtle detail of my work. I created a tiered service plan and included links to live sites of the templates I've created. I also set up a form to send potential client information straight to my email's inbox.",
        description:
            "Fictional Web is my personal freelancing website. I have created several templates that I can use to quickly create websites for artists, musicians, photographers, designers, academics, and anyone in the arts. I provide hybrid and custom services as well.",
    },
    {
        name: "2022 KDA PFDD",
        type: "Event Page",
        url: "https://kdapfdd.net",
        year: "2022",
        technologies: ["React", "MUI"],
        image: {
            url: "/images/pfddScreencap.webp",
            alt: "screenshot of kdapfdd.net",
        },
        challenge:
            "The Kennedy's Disease Association was putting together a patient-focused drug development event and needed a place to get information to participants as well as collect the contact information of interested parties.",
        solution:
            "For the KDA I created a website that included pdfs of important documents, a contact form with custom fields, and a photo gallery.",
        description:
            "One of my earlier projects was a Patient-Focused Drug Development website for the Kennedy's Disease Association. They wanted a place for participants and attendees to reliablly find all the information that they were looking for regarding the event.",
    },
];

const personalItems = [
    {
        name: "Poetry",
        image: {
            url: "/images/personalItems-salamander.webp",
            alt: "Orange Salamander",
        },
        description:
            "One of my favorite things to do is attend poetry readings and open mic nights in town. If you come while I'm there, you'll probably see me read something!",
    },
    {
        name: "Dance",
        image: {
            url: "/images/personalItems-dancing.webp",
            alt: "Dave dancing",
        },
        description:
            "Pretty much every week for the past eleven years (with a few notable breaks) I've spent my Wednesday nights swing dancing with friends. It's a great hobby, one that lets you be creative, social, and active, all at once!",
    },
    {
        name: "Volunteer Work",
        image: {
            url: "/images/personalItems-volunteering.webp",
            alt: "Volunteering with the Great Cville Puzzle Hunt",
        },
        description:
            "I believe in giving back not only to my own community, but to the world. In 2009 I spent six months working with a medical NGO in Jos, Nigeria, and I am always on the lookout for events to help out with locally.",
    },
    {
        name: "Drums",
        image: {
            url: "/images/personalItems-drums.webp",
            alt: "Drumsticks on a drumkit",
        },
        description:
            "While everyone was working on their best sourdough over the pandemic, I got my hands on an electronic drumkit have been practicing since. I even joined a band! Oh, and I admit I did try the whole sourdough thing too.",
    },
];

const contactConfig = {
    website: "Portfolio",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 2. Layout

export { siteName, homePage, portfolioProjects, personalItems, contactConfig };
