import { ArrowRightAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import SizedImage from "../general/SizedImage";

const ProjectPreview = ({ children, project, index, length }) => {
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
                        sx={{ color: theme.palette.custom.lightMuted }}
                    >{`/0${index + 1} - 0${length}/`}</Typography>
                    <Typography sx={{ color: theme.palette.custom.lightMuted }}>
                        {project.year}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        filter: "grayscale(100)",
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
                    sx={{
                        color: "white",
                        fontSize: "1.5rem",
                        marginTop: "1.5em",
                        textAlign: "center",
                    }}
                >
                    {project.name}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.light,
                        marginTop: ".5em",
                    }}
                >
                    {project.description}
                </Typography>
            </Box>
            <a href={project.url} target="_blank" rel="noreferrer">
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
                                color: theme.palette.custom.light,
                                fontWeight: "bold",
                            }}
                        >
                            Visit Website
                        </Typography>
                    </ExpandingText>
                    <ArrowRightAlt sx={{ color: theme.palette.custom.light }} />
                </Box>
            </a>
        </Box>
    );
};

export default ProjectPreview;
