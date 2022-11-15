import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { homePage, portfolioProjects } from "../siteInfo";
import NativeImage from "../components/general/NativeImage";
import BlockQuote from "../components/general/BlockQuote";
import ProjectPreview from "../components/home/ProjectPreview";
import ExpandingText from "../components/general/ExpandingText";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import { MailOutline, OpenInNew } from "@mui/icons-material";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Container maxWidth="xl">
                <Grid className="section" container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: "center",
                                    filter: "grayscale(100)",
                                }}
                            >
                                <NativeImage
                                    image={homePage.image}
                                    maxSize="1500"
                                />
                            </Box>
                            <Typography
                                sx={{
                                    writingMode: "vertical-rl",
                                    marginLeft: ".25em",
                                }}
                            >
                                / Shelburne Falls, MA /
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    maxWidth: "75ch",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{ textAlign: "center" }}
                                >
                                    This is my life now
                                </Typography>
                                <Divider
                                    sx={{
                                        background:
                                            theme.palette.custom.darkMuted,
                                        margin: "1rem",
                                    }}
                                />

                                <Typography>
                                    Growing up, I was always interested in one
                                    thing: Literature. From a very young age, I
                                    carried books around with me everywhere I
                                    went. As a teenager it was in the worlds of
                                    H.G. Welles, Jules Verne, George Orwell, and
                                    J.R.R. Tolkein that I found comfort, escape,
                                    and deeper meaning.
                                </Typography>
                                <Typography>
                                    In college I decided that I wanted to
                                    continue along this path. I pursued a degree
                                    in Liberal Arts (EMU didn&rsquo;t offer a
                                    writing program) and became the News Editor
                                    of the school&rsquo;s newspaper, which I
                                    found to be extremely rewarding.
                                </Typography>
                                <Typography>
                                    After I graduated, I took a number of small
                                    jobs here and there, from home renovation
                                    and construction to retail and restaurants.
                                    As a side gig I would provide developmental
                                    and line edits for novelists. In 2021 I
                                    decided to take it more seriously, and I
                                    knew that in order to further my business, I
                                    needed a great website.
                                </Typography>
                                <Typography>
                                    But I wanted to be involved. I had some
                                    experience working with Python and C#, and I
                                    thought to myself, well, why don&rsquo;t I
                                    just learn HTML and CSS and make one myself?
                                </Typography>
                                <Typography>
                                    So that&rsquo;s what I did. I spent a few
                                    months learning the basics, to the point
                                    that I could make a simple site myself, and
                                    I absolutely fell in love with it. I found
                                    that it was at once a whole new world, but
                                    also incredibly familiar. All of my
                                    experience in language and writing came
                                    together in a way that I could have never
                                    predicted. By the end of it I had a decent
                                    portfolio and no interest in editing novels
                                    ever again. I had finally found what the
                                    thing that I had always wanted to do.
                                </Typography>
                                <Typography>
                                    It was <strong>web development.</strong>
                                </Typography>
                                <Divider
                                    sx={{
                                        background:
                                            theme.palette.custom.darkMuted,
                                        margin: "1rem",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Insurance Plans */}
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "4rem 0",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        component="h3"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            marginBottom: "4rem",
                        }}
                    >
                        Portfolio
                    </Typography>
                    <Grid container spacing={0}>
                        {portfolioProjects.map((project, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12} md={3.8}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                height: "100%",
                                                padding: "1rem 0",
                                                borderTop:
                                                    "1px solid " +
                                                    theme.palette.custom
                                                        .lightMuted,
                                                borderBottom:
                                                    index < 3
                                                        ? "none"
                                                        : "1px solid " +
                                                          theme.palette.custom
                                                              .lightMuted,
                                            }}
                                        >
                                            <ProjectPreview
                                                project={project}
                                                index={index}
                                                length={
                                                    portfolioProjects.length
                                                }
                                            />
                                        </Box>
                                    </Grid>
                                    {index / 2 !== 1 && (
                                        <Grid item xs={0} md={0.3}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    height: "100%",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: "calc(100% - 2.25rem)",
                                                    }}
                                                >
                                                    <Divider
                                                        orientation="vertical"
                                                        sx={{
                                                            background:
                                                                theme.palette
                                                                    .custom
                                                                    .lightMuted,
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )}
                                </>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>

            <BlockQuote quote={homePage.quote1}>
                I contacted Mr. Sorensen to create my website page. He was very
                helpful to work with, and he created a beautiful website for my
                business that is easy for customers to navigate and straight to
                the point. The background color brings out my picture. He was
                extremely professional, quick, communicative, and an absolute
                pleasure to work with.
            </BlockQuote>

            <Box
                className="section"
                sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/showcaseImage.webp)",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            color: theme.palette.custom.lightMuted,
                            marginBottom: ".25em",
                        }}
                    >
                        / attributes /
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    border: "1px solid white",
                                    padding: "2rem",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{ textAlign: "center", color: "white" }}
                                >
                                    Self-Teaching
                                </Typography>
                                <Divider
                                    sx={{
                                        background:
                                            theme.palette.custom.lightMuted,
                                        margin: "1rem 2rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    There are a million technologies out there,
                                    and dozens of new ones being released
                                    weekly. Being able to teach myself means
                                    that whatever the challenge is, I can
                                    overcome it myself.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    border: "1px solid white",
                                    padding: "2rem",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{ textAlign: "center", color: "white" }}
                                >
                                    Detail-Oriented
                                </Typography>
                                <Divider
                                    sx={{
                                        background:
                                            theme.palette.custom.lightMuted,
                                        margin: "1rem 2rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    One thing that editing has taught me is that
                                    everything needs way more polish than you
                                    think it does. When I finish something and
                                    I&rsquo;m satisfied with it, I go back and
                                    look at it again.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    border: "1px solid white",
                                    padding: "2rem",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{ textAlign: "center", color: "white" }}
                                >
                                    severely dedicated
                                </Typography>
                                <Divider
                                    sx={{
                                        background:
                                            theme.palette.custom.lightMuted,
                                        margin: "1rem 2rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    When I decide to take something on, I
                                    don&rsquo;t hold anything back. I believe
                                    that if something is worth doing, then
                                    it&rsquo;s worth doing right, because at the
                                    end of the day, I am what I create.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography
                        sx={{
                            color: theme.palette.custom.lightMuted,
                            marginTop: ".25em",
                            textAlign: "end",
                        }}
                    >
                        / philosophy /
                    </Typography>
                </Container>
            </Box>
            <BlockQuote quote={homePage.quote2}>
                My late husband was referred to Charlene by a friend and after
                meeting with her we went with [her] and have been so thankful.
                Charlene&rsquo;s guidance directing us to the best policy for
                our needs has been invaluable. Since my husband passed away,
                Charlene has been there for me for the past eleven years. I will
                get a phone call just to ask me how I&rsquo;m doing. So
                thoughtful! I feel truly blessed to have Charlene not only as my
                agent but as my friend.
            </BlockQuote>
            <Box
                className="section"
                sx={{ background: theme.palette.primary.main }}
            >
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{ color: theme.palette.custom.light }}
                                >
                                    Need a website?
                                </Typography>
                                <Divider
                                    sx={{
                                        margin: "1rem 0",
                                        background:
                                            theme.palette.custom.lightMuted,
                                    }}
                                />

                                <Box sx={{ display: "flex", gap: "1rem" }}>
                                    <OpenInNew
                                        sx={{
                                            color: theme.palette.custom.light,
                                        }}
                                    />
                                    <ExpandingText>
                                        <a
                                            style={{
                                                color: theme.palette.custom
                                                    .light,
                                            }}
                                            href="https://fictionalweb.com"
                                        >
                                            fictionalweb.com
                                        </a>
                                    </ExpandingText>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "1rem",
                                        marginTop: ".5rem",
                                    }}
                                >
                                    <MailOutline
                                        sx={{
                                            color: theme.palette.custom.light,
                                        }}
                                    />

                                    <ExpandingText>
                                        <a
                                            style={{
                                                color: theme.palette.custom
                                                    .light,
                                            }}
                                            href="mailto:hello@fictionalweb.com"
                                        >
                                            hello@fictionalweb.com
                                        </a>
                                    </ExpandingText>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: theme.palette.custom.light,
                                        textAlign: "end",
                                    }}
                                >
                                    Want to see more?
                                </Typography>
                                <Divider
                                    sx={{
                                        margin: "1rem 0",
                                        width: "100%",
                                        background:
                                            theme.palette.custom.lightMuted,
                                    }}
                                />

                                <SocialMediaIcons
                                    color={theme.palette.custom.light}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
}
