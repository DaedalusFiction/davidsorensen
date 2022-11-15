import { Box } from "@mui/system";
import React, { useState } from "react";

const ExpandingText = ({ children }) => {
    const [letterSpacing, setLetterSpacing] = useState(false);
    const handleOnMouseOver = () => {
        setLetterSpacing(".3em");
    };
    const handleOnMouseLeave = () => {
        setLetterSpacing("inherit");
    };
    return (
        <Box
            sx={{
                "& *": {
                    letterSpacing: letterSpacing,
                    transition: "300ms",
                },
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
        >
            {children}
        </Box>
    );
};

export default ExpandingText;
