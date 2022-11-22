import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Header from "./Header";

const PageLayout = ({ name, children }) => {
    return (
        <Box sx={{ padding: "8rem 0 6rem 0" }}>
            <Container maxWidth="xl">
                <Typography
                    className="header-fade-in"
                    variant="h1"
                    sx={{ textAlign: "center" }}
                >
                    {name}
                </Typography>
                {children}
            </Container>
        </Box>
    );
};

export default PageLayout;
