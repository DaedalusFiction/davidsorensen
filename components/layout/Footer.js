import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Footer = () => {
    return (
        <Container maxWidth="xl">
            <Grid container sx={{ padding: "1rem 0" }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography>
                            Copyright 2022 C.R.M. Insurance LLC
                        </Typography>
                        <br />
                        <Typography>P.O. Box 303</Typography>
                        <Typography>Montpelier, VA 23192</Typography>
                        <Typography>
                            <a href="tel:+8042404959">(804) 240-4959</a>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "start", md: "end" },
                            height: "100%",
                            alignItems: "end",
                            paddingTop: "1rem",
                        }}
                    >
                        <Typography>
                            Website created by{" "}
                            <Link href="https://fictionalweb.com">
                                <span
                                    style={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}
                                >
                                    Fictional Web
                                </span>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
