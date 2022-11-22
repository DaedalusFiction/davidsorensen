import { ArrowCircleDown, ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const Hero = () => {
    return (
        <Box
            className="section"
            sx={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/heroImage.webp)",
                backgroundSize: "cover",
                backgroundPosition: { xs: "50% 0%", md: "0% 0%" },
            }}
        >
            <Box
                sx={{
                    border: {
                        xs: "none",
                        sm: "1px solid " + theme.palette.custom.lightMuted,
                    },
                    margin: "0 2rem",
                    padding: "2rem",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    padding: {
                                        xs: "15vh 0 22vh 0",
                                        md: "16vh 0",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="p"
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        marginBottom: ".25em",
                                        textTransform: "uppercase",
                                        letterSpacing: ".1em",
                                    }}
                                >
                                    Designer + Full-Stack Developer
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h1"
                                    sx={{
                                        marginBottom: ".5em",
                                        maxWidth: "37rem",
                                        color: theme.palette.custom.lightMuted,
                                        fontSize: "1.25rem",
                                        textAlign: "center",
                                    }}
                                >
                                    Currently based in Charlottesville, Virginia
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "1rem",
                                        marginTop: "1rem",
                                    }}
                                >
                                    <Link href="/resume">
                                        <Button
                                            endIcon={<ArrowRightAlt />}
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                        >
                                            R&eacute;sum&eacute;
                                        </Button>
                                    </Link>
                                    <a
                                        href="https://github.com/DaedalusFiction"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button
                                            endIcon={<ArrowRightAlt />}
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                        >
                                            Github
                                        </Button>
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <a href="#showcase">
                            <ArrowCircleDown
                                sx={{
                                    color: theme.palette.custom.lightMuted,
                                    fontSize: "4rem",
                                    borderRadius: "100%",
                                    "&:hover": {
                                        transition: "300ms",
                                        color: theme.palette.secondary.main,
                                        transform: "scale(1.05)",
                                    },
                                }}
                            />
                        </a>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Hero;
