import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const Hero = () => {
    return (
        <Box
            className="section border-bottom"
            sx={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/heroImage.webp)",
                backgroundSize: "cover",
                backgroundPosition: { xs: "50% 0%", md: "0% 0%" },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                padding: {
                                    xs: "15vh 0 22vh 0",
                                    md: "20vh 0 20vh 0",
                                },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                            }}
                        >
                            <Typography
                                variant="h1"
                                component="p"
                                sx={{ color: "white" }}
                            >
                                HEALTH INSURANCE, SIMPLIFIED
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h1"
                                sx={{
                                    marginBottom: ".5em",
                                    maxWidth: "37rem",
                                    color: theme.palette.custom.lightMuted,
                                    fontSize: "1.5rem",
                                }}
                            >
                                Let us help you find the coverage that&rsquo;s
                                right for you, at absolutely no cost to you
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    marginTop: "1rem",
                                }}
                            >
                                <Link href="#contact">
                                    <Button
                                        endIcon={<ArrowRightAlt />}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                    >
                                        Get started
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
