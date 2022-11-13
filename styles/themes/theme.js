import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#d739a4",
            off: "#FBFFF1",
        },
        secondary: {
            // main: "#CBEAA6",
            main: "#62ffcb",
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
        accent: "EB Garamond",
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
            // fontFamily: "Raleway",
            fontFamily: theme.font.accent,
            color: theme.palette.custom.dark,
            // color: theme.palette.primary.off,
            fontWeight: "600",
            lineHeight: "1em",
            fontSize: "clamp(3.5rem, 6vw, 7rem)",
            letterSpacing: ".025em",
        },
        h2: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.accent,
            fontWeight: "600",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 7rem)",
            letterSpacing: ".025em",
        },
        h3: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.accent,
            letterSpacing: ".025em",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h4: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.primary,
            // letterSpacing: ".025em",
            fontSize: "1.75rem",
            fontWeight: "600",
            // marginBottom: ".5em",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: theme.palette.custom.primary,
            fontFamily: theme.font.primary,
            fontSize: "1.25rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
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
            fontWeight: "475",
            fontSize: "1.35rem",
            lineHeight: "1.5em",
            // color: theme.palette.custom.darkMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: theme.font.primary,
            // fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            color: theme.palette.custom.dark,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
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
