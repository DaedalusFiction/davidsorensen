import { ArrowRightAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import SizedImage from "../general/SizedImage";

const ProjectPreview = ({ project, index, length, dark }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1em",
                    }}
                >
                    <Typography
                        sx={{
                            color: dark
                                ? theme.palette.custom.darkMuted
                                : theme.palette.custom.lightMuted,
                        }}
                    >{`/0${index + 1} - 0${length}/`}</Typography>
                    <Typography
                        sx={{
                            color: dark
                                ? theme.palette.custom.darkMuted
                                : theme.palette.custom.lightMuted,
                        }}
                    >
                        {project.year}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        filter: dark ? "none" : "grayscale(100)",
                        width: "100%",
                        transition: "300ms",
                    }}
                >
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <Box
                            sx={{
                                "&:hover": {
                                    filter: "brightness(60%)",
                                    transition: "500ms",
                                },
                            }}
                        >
                            <SizedImage
                                image={project.image}
                                height="300px"
                                width="100%"
                            />
                        </Box>
                    </a>
                </Box>
                <Typography
                    variant="h3"
                    component="h5"
                    sx={{
                        color: dark
                            ? theme.palette.custom.dark
                            : theme.palette.custom.light,
                        fontSize: "1.5rem",
                        marginTop: "1.5em",
                        textAlign: "center",
                    }}
                >
                    {project.name}
                </Typography>
                <Typography
                    sx={{
                        color: dark
                            ? theme.palette.custom.dark
                            : theme.palette.custom.light,
                        marginTop: ".5em",
                    }}
                >
                    {project.description}
                </Typography>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
                <Link href={`/portfolio/${project.name}`}>
                    <Box
                        sx={{
                            display: "flex",
                            marginTop: "2em",
                            justifyContent: "end",
                        }}
                    >
                        <ExpandingText>
                            <Typography
                                sx={{
                                    color: dark
                                        ? theme.palette.custom.dark
                                        : theme.palette.custom.light,
                                    fontWeight: "bold",
                                }}
                            >
                                View Study
                            </Typography>
                        </ExpandingText>
                        <ArrowRightAlt
                            sx={{
                                color: dark
                                    ? theme.palette.custom.dark
                                    : theme.palette.custom.light,
                            }}
                        />
                    </Box>
                </Link>
            </Box>
        </Box>
    );
};

export default ProjectPreview;
