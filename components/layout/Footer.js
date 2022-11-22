import { MailOutline, OpenInNew } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Footer = () => {
    return (
        <Box
            className="section"
            sx={{ background: theme.palette.primary.main }}
        >
            <Container maxWidth="xl">
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
                                    background: theme.palette.custom.lightMuted,
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
                                            color: theme.palette.custom.light,
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
                                            color: theme.palette.custom.light,
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
                                alignItems: { xs: "start", md: "end" },
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: theme.palette.custom.light,
                                    textAlign: { xs: "start", md: "end" },
                                }}
                            >
                                Want to see more?
                            </Typography>
                            <Divider
                                sx={{
                                    margin: "1rem 0",
                                    width: "100%",
                                    background: theme.palette.custom.lightMuted,
                                }}
                            />
                            <SocialMediaIcons
                                color={theme.palette.custom.light}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Typography
                    sx={{
                        color: theme.palette.custom.lightMuted,
                        textAlign: "center",
                        marginTop: "1em",
                    }}
                >
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
                    </Link>{" "}
                    (That&rsquo;s me)
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;

// <Grid container sx={{ padding: "1rem 0" }}>
//     <Grid item xs={12} md={6}>
//         <Box>
//             <Typography>Copyright 2022 David J Sorensen</Typography>
//             <br />
//             <Typography>Charlottesville, VA 22901</Typography>
//             <Typography>
//                 <a href="tel:+8042404959">(434) 825-5038</a>
//             </Typography>
//         </Box>
//     </Grid>
//     <Grid item xs={12} md={6}>
//         <Box
//             sx={{
//                 display: "flex",
//                 justifyContent: { xs: "start", md: "end" },
//                 height: "100%",
//                 alignItems: "end",
//                 paddingTop: "1rem",
//             }}
//         >
//             <Typography>
//                 Website created by{" "}
//                 <Link href="https://fictionalweb.com">
//                     <span
//                         style={{
//                             textDecoration: "underline",
//                             cursor: "pointer",
//                         }}
//                     >
//                         Fictional Web
//                     </span>
//                 </Link>{" "}
//                 (That&rsquo;s me)
//             </Typography>
//         </Box>
//     </Grid>
// </Grid>
