import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#A52422",
            off: "#FBFFF1",
        },
        secondary: {
            // main: "#CBEAA6",
            main: "#FFC482",
            // main: "#04A777",
            // main: "#DC965A",
        },
        background: {
            // default: "#fefefe",
            default: "#fffceb",
            // default: "#FBFBF2",
            accent: "#ffeccd",
            dark: "#484041",
        },
        custom: {
            dark: "#484041",
            darkMuted: "#757575",
            light: "#fffceb",
            lightMuted: "#e6e6e6",
            accent: "#d61919",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
    font: {
        primary: "Raleway",
        accent: "Monument",
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.accent}`,
    custom: {
        spacing: {
            small: "1rem",
            medium: "3rem",
            large: "4rem",
            xl: "8rem",
        },
    },
    typography: {
        h1: {
            fontFamily: theme.font.accent,
            color: theme.palette.custom.dark,
            // color: theme.palette.primary.off,
            // fontWeight: "900",
            lineHeight: ".85em",
            fontSize: "clamp(2.5rem, 6vw, 7rem)",
            letterSpacing: ".025em",
            textTransform: "uppercase",
        },
        h2: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.accent,
            fontWeight: "600",
            lineHeight: "1em",
            fontSize: "clamp(1.5rem, 2.3vw, 7rem)",
            letterSpacing: ".025em",
            textTransform: "uppercase",
        },
        h3: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.accent,
            letterSpacing: ".025em",
            fontSize: "2rem",
            fontWeight: "400",
            textTransform: "uppercase",
        },
        h4: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.accent,
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: "400",
        },
        h5: {
            fontFamily: theme.font.primary,
            fontSize: "1.25rem",
            fontWeight: "400",
        },
        h6: {
            fontWeight: "650",
            fontSize: "1.25rem",
        },

        subtitle1: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            color: theme.palette.custom.dark,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.dark,
        },
        body1: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5em",
        },
        body2: {
            fontFamily: theme.font.primary,
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            color: theme.palette.custom.dark,
        },
        caption: {
            color: theme.palette.custom.dark,
            fontSize: ".95rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    whiteSpace: "nowrap",
                    minWidth: "max-content",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
});

export default theme;
