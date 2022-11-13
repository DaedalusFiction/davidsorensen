import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { homePage } from "../siteInfo";
import ContactPreview from "../components/contact/ContactPreview";
import NativeImage from "../components/general/NativeImage";
import BlockQuote from "../components/general/BlockQuote";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ padding: "8rem 0" }}>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                justifyContent: "center",
                            }}
                        >
                            <NativeImage image={homePage.image} maxSize="500" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h2"
                                    sx={{ textAlign: "center" }}
                                >
                                    Let&rsquo;s Work Together on This!
                                </Typography>
                                <br />
                                <Typography sx={{ maxWidth: "55ch" }}>
                                    My name is Charlene Morris and I am a
                                    Licensed Insurance Broker. I have been
                                    visiting homes and helping people navigate
                                    the field of Medicare and Medicaid options
                                    since 2006. I always explain details
                                    thoroughly and I work hard to effectively
                                    and professionally address consumers&rsquo;
                                    concerns. I am proud of my exceptional
                                    interpersonal skills and my ability to
                                    quickly handle challenges.
                                </Typography>
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
                        Insurance Plans
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <NativeImage
                                    image={homePage.image2}
                                    maxSize="200"
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: "white",
                                        marginTop: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Medicare Advantage
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <NativeImage
                                    image={homePage.image3}
                                    maxSize="200"
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: "white",
                                        marginTop: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Dental and Vision
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <NativeImage
                                    image={homePage.image4}
                                    maxSize="200"
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: "white",
                                        marginTop: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Supplemental
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <NativeImage
                                    image={homePage.image5}
                                    maxSize="200"
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: "white",
                                        marginTop: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Prescription Drug
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <BlockQuote quote={homePage.quote1}>
                We have been working with Charlene for a number of years. When
                we began I was reluctant to change insurance carriers, but she
                was persistent [...] We continue to receive requests from other
                insurance carriers but find her company and service to be the
                best [...] If she wants to give my name to anyone who wants
                super service, please tell them to call me.
            </BlockQuote>

            <Box
                sx={{
                    padding: "8rem 0",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/showcaseImage.webp)",
                }}
            >
                <Container maxWidth="lg">
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
                                    Our Promise
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
                                    We promise to do our best to make sure you
                                    won&rsquo;t stress over finding affordable
                                    health insurance while on Medicare.
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
                                    Our Mission
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
                                    We are committed to working with you to find
                                    the insurance plan that fits your needs, and
                                    we&rsquo;ll do it at no cost to you.
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
                                    Your Journey
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
                                    We are here to help you with any questions
                                    or concerns you may have about your health
                                    insurance coverage.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
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
            <ContactPreview />
        </Container>
    );
}
