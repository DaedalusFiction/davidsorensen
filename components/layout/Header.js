import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import theme from "../../styles/themes/theme";

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
                padding: "1rem 0",
                transition: "300ms",
                boxShadow:
                    scrollPosition > 0
                        ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                        : "transparent",
                backgroundColor:
                    scrollPosition > 0
                        ? theme.palette.primary.main
                        : "transparent",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            component="p"
                            sx={{ color: theme.palette.custom.lightMuted }}
                        >
                            C.R.M Insurance LLC
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ color: theme.palette.custom.lightMuted }}
                        >
                            <a href="tel:+8042404959">(804) 240-4959</a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
