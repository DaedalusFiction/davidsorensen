import { Chip, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import { portfolioProjects } from "../../siteInfo";
import NativeImage from "../../components/general/NativeImage";
import CornerBorders from "../../components/general/CornerBorders";
import theme from "../../styles/themes/theme";
import ExpandingText from "../../components/general/ExpandingText";

const Project = () => {
    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState(null);
    const [projectIndex, setProjectIndex] = useState(0);

    useEffect(() => {
        portfolioProjects.forEach((portfolioProject, index) => {
            if (portfolioProject.name === id) {
                setProject(portfolioProject);
                setProjectIndex(index);
            }
        });
    }, [id]);
    return (
        <>
            {project && (
                <PageLayout name={project.name}>
                    <Container className="section">
                        <CornerBorders color={theme.palette.custom.darkMuted}>
                            <NativeImage image={project.image} maxSize={2000} />
                        </CornerBorders>
                        <Typography
                            sx={{ textAlign: "center", marginTop: "4rem" }}
                        >{`/ ${projectIndex + 1} - ${
                            portfolioProjects.length
                        } /`}</Typography>
                        <Typography
                            variant="h2"
                            sx={{ textAlign: "center", margin: ".5em 0" }}
                        >
                            {project.type}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: { xs: "3rem", md: "0" },
                            }}
                        >
                            <CornerBorders
                                color={theme.palette.custom.darkMuted}
                            >
                                <Box sx={{ display: "flex", gap: "1rem" }}>
                                    {project.technologies.map(
                                        (technology, index) => {
                                            return (
                                                <Chip
                                                    sx={{
                                                        color: theme.palette
                                                            .primary.main,
                                                        borderRadius: "10px",
                                                    }}
                                                    label={technology}
                                                    key={index}
                                                />
                                            );
                                        }
                                    )}
                                </Box>
                            </CornerBorders>
                        </Box>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop:
                                            "1px solid" +
                                            theme.palette.custom.darkMuted,
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        height: "100%",
                                        paddingTop: { xs: "3rem", md: "1rem" },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: {
                                                xs: "center",
                                                md: "end",
                                            },
                                        }}
                                    >
                                        Overview:
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop: {
                                            xs: "none",
                                            md:
                                                "1px solid" +
                                                theme.palette.custom.darkMuted,
                                        },
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        padding: "1rem 0 8rem 0",
                                    }}
                                >
                                    <Typography sx={{ maxWidth: "40ch" }}>
                                        {project.description}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop:
                                            "1px solid" +
                                            theme.palette.custom.darkMuted,
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        height: "100%",
                                        paddingTop: { xs: "3rem", md: "1rem" },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: {
                                                xs: "center",
                                                md: "end",
                                            },
                                        }}
                                    >
                                        Challenge:
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop: {
                                            xs: "none",
                                            md:
                                                "1px solid" +
                                                theme.palette.custom.darkMuted,
                                        },
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        padding: "1rem 0 8rem 0",
                                    }}
                                >
                                    <Typography sx={{ maxWidth: "40ch" }}>
                                        {project.challenge}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop:
                                            "1px solid" +
                                            theme.palette.custom.darkMuted,
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        height: "100%",
                                        paddingTop: { xs: "3rem", md: "1rem" },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: {
                                                xs: "center",
                                                md: "end",
                                            },
                                        }}
                                    >
                                        Solution:
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        borderTop: {
                                            xs: "none",
                                            md:
                                                "1px solid" +
                                                theme.palette.custom.darkMuted,
                                        },
                                        margin: { xs: "0 2rem", md: "2rem" },
                                        padding: "1rem 0 8rem 0",
                                    }}
                                >
                                    <Typography sx={{ maxWidth: "40ch" }}>
                                        {project.solution}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <ExpandingText>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Visit Website
                                        </a>
                                    </Typography>
                                </ExpandingText>
                            </Grid>
                        </Grid>
                    </Container>
                </PageLayout>
            )}
        </>
    );
};

export default Project;
