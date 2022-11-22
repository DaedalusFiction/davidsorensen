import { ArrowRightAlt, MenuIcon } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import NavMenu from "./NavMenu";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();
    const pathName = router.pathname;
    const baseHeaderColor =
        pathName === "/" ? "transparent" : theme.palette.primary.main;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
                // borderBottom: "1px solid " + theme.palette.custom.lightMuted,
                width: "100%",
                padding: ".75rem 0",
                transition: "300ms",
                boxShadow:
                    scrollPosition > 50
                        ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                        : "transparent",
                backgroundColor:
                    scrollPosition > 50
                        ? theme.palette.primary.main
                        : baseHeaderColor,
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Box sx={{ cursor: "pointer" }}>
                        <ExpandingText>
                            <Link href="/">
                                <Typography
                                    variant="h4"
                                    component="p"
                                    sx={{
                                        color: theme.palette.custom.lightMuted,
                                        transition: "300ms",
                                        transitionProperty: "ease-in-out",
                                    }}
                                >
                                    David J Sorensen
                                </Typography>
                            </Link>
                        </ExpandingText>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                transition: "300ms",
                                color:
                                    pathName === "/resume"
                                        ? theme.palette.custom.light
                                        : theme.palette.custom.lightMuted,
                                "&:hover": {
                                    color: theme.palette.custom.light,
                                },
                            }}
                        >
                            <Link href="/resume">Resume</Link>
                        </Typography>
                        <Typography
                            // variant="h6"
                            sx={{
                                transition: "300ms",
                                color:
                                    pathName === "/portfolio"
                                        ? theme.palette.custom.light
                                        : theme.palette.custom.lightMuted,
                                "&:hover": {
                                    color: theme.palette.custom.light,
                                },
                            }}
                        >
                            <Link href="/portfolio">Portfolio</Link>
                        </Typography>
                        <Link href="/contact">
                            <Button variant="outlined" color="secondary">
                                Contact
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <NavMenu />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
