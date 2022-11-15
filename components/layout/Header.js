import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
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
                        : "transparent",
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
                    <ExpandingText>
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
                    </ExpandingText>
                    <Link href="#contact">
                        <Button variant="outlined" color="secondary">
                            Contact
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
