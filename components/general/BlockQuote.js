import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";

const BlockQuote = ({ children, quote }) => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "6rem 0",
                }}
            >
                <Typography
                    sx={{ textAlign: "end", transform: "translateY(-1.5em)" }}
                >
                    / testimonial /
                </Typography>
                <Box sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            position: "absolute",
                            bottom: "0",
                            left: "-1em",
                            height: "30%",
                            width: "30%",
                            borderLeft:
                                "1px solid " + theme.palette.custom.darkMuted,
                            borderBottom:
                                "1px solid " + theme.palette.custom.darkMuted,
                        }}
                    />
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            position: "absolute",
                            top: "-1em",
                            right: "-1em",
                            height: "30%",
                            width: "30%",
                            borderRight:
                                "1px solid " + theme.palette.custom.darkMuted,
                            borderTop:
                                "1px solid " + theme.palette.custom.darkMuted,
                        }}
                    />
                    <Typography
                        sx={{
                            position: "absolute",
                            top: ".25em",
                            left: { xs: "-.1em", md: "-.2em" },
                            fontSize: "30rem",
                            opacity: "20%",
                            lineHeight: "0",
                            // fontFamily: "EB Garamond",
                        }}
                    >
                        &ldquo;
                    </Typography>
                    <Typography
                        sx={{
                            fontStyle: "italic",
                            fontSize: "1.5rem",
                            lineHeight: "1.5em",
                        }}
                    >
                        {children}
                    </Typography>
                    <Typography sx={{ textAlign: "end" }}>
                        {quote.attribution}
                    </Typography>
                </Box>
                <Typography sx={{ transform: "translateY(.5em)" }}>
                    / 0{quote.number} - 02 /
                </Typography>
            </Box>
        </Container>
    );
};

export default BlockQuote;
