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
        attribution: "Terry",
        number: "2",
    },
};

const portfolioProjects = [
    {
        name: "Angelo Jewelry",
        type: "ECommerce site",
        url: "https://commerce-template.netlify.app",
        year: "2023",
        technologies: ["Next.js", "MUI", "Shopify-buy"],
        image: {
            url: "/images/angeloScreencap.webp",
            alt: "screenshot of angelo jewelry",
        },
        challenge:
            "The owners of Angelo Jewelry came to me with an existing Shopify website that wasn't performing well and was difficult to organize. They wanted to start generating more online sales to grow their business.",
        solution:
            "I built a custom app and integrated it with their current Shopify using the Shopify-Buy SDK, allowing them to manage their inventory in a way that was familiar while benefitting from a Next.js app.",
        description:
            "Angelo Jewelry is a hand-made jewelry store located on the Downtown Mall in Charlotteville, Virginia.",
    },
    {
        name: "James Cole",
        type: "Portfolio Website",
        url: "https://james-cole.netlify.app",
        year: "2023",
        technologies: ["Nuxt", "Vue"],
        image: {
            url: "/images/jamesScreenshot.webp",
            alt: "screenshot of james cole's portfolio website",
        },
        challenge:
            "Poet and academic James Cole needed a website where he could list his publications and provide information on himself and his work. He also wanted a unique contact form, something that would represent his personality.",
        solution:
            "For James I designed something modern yet timeless, something that represented his unique poetry and would remain stylish for years to come. I also built a unique contact form that built messages based on mood.",
        description:
            "Personal portfolio website for poet and academic James Cole",
    },
    {
        name: "Red Brick Inc",
        type: "Business Website",
        url: "https://redbrickinc.com",
        year: "2023",
        technologies: ["Next.js", "MUI", "Image editing"],
        image: {
            url: "/images/redbrickScreenshot.webp",
            alt: "screenshot for red brick inc",
        },
        challenge:
            "My business partner and I wanted a brand new website for our company, something that looked reliable and trustworthy and also contemporary and stylish.",
        solution:
            "I used image editing software to superimpose screenshots of my work onto stock images, which is meant to display professionalism and skill in a familiar way. ",
        description:
            "Business website for content management and web development",
    },
    {
        name: "Who Dat",
        type: "Browser-based Game",
        url: "https://whodat.ninja",
        year: "2023",
        technologies: ["Next.js", "MUI", "ChatGPT"],
        image: {
            url: "/images/whodat.webp",
            alt: "screenshot of whodat.ninja",
        },
        challenge:
            "For whodat.ninja I needed to find a way to find an efficient way for the user to chat with fictional characters, in such a way that I can easily update a list of curated characters.",
        solution:
            "I used the ChatGPT API to generate conversation, and handled the game logic in a way that seamlessly integrates with the conversation.",
        description:
            "Who Dat? is a browser-based game where you have a conversation with an unknown fictional character and must guess whom it is you're talking with",
    },
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
            "The Rumen is a literary journal a few friends and I started. I had always wanted to be the editor of one, and now that I'm able to create websites, it's become a project of mine to run what I hope will become a very respected source of fiction, creative non-fiction, and poetry",
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
            "Charlene is a local Insurance Agent who specializes in assisting elderly clients signing up for MediCare",
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
