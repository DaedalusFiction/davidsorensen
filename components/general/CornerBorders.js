import { Box } from "@mui/system";
import React from "react";

const CornerBorders = ({ children, color }) => {
    return (
        <Box sx={{ position: "relative", margin: "1em", padding: "1rem" }}>
            <Box
                sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    height: "30%",
                    width: "30%",
                    borderRight: "1px solid " + color,
                    borderBottom: "1px solid " + color,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "30%",
                    width: "30%",
                    borderLeft: "1px solid " + color,
                    borderTop: "1px solid " + color,
                }}
            />
            {children}
        </Box>
    );
};

export default CornerBorders;
