import { Box, Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ProjectPreview from "../../components/home/ProjectPreview";
import { portfolioProjects } from "../../siteInfo";
import { Divider, Grid } from "@mui/material";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="Portfolio">
            <Container className="section">
                <Grid container spacing={0}>
                    {portfolioProjects.map((project, index) => {
                        return (
                            <>
                                <Grid key={index} item xs={12} md={3.8}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            height: "100%",
                                            padding: "1rem 0",
                                            borderTop:
                                                "1px solid " +
                                                theme.palette.custom.darkMuted,
                                            borderBottom:
                                                index < 3
                                                    ? "none"
                                                    : "1px solid " +
                                                      theme.palette.custom
                                                          .darkMuted,
                                        }}
                                    >
                                        <ProjectPreview
                                            project={project}
                                            index={index}
                                            length={portfolioProjects.length}
                                            dark
                                        />
                                    </Box>
                                </Grid>
                                {index / 2 !== 1 && (
                                    <Grid item xs={0} md={0.3}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                height: "100%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "calc(100% - 2.25rem)",
                                                }}
                                            >
                                                <Divider
                                                    orientation="vertical"
                                                    sx={{
                                                        background:
                                                            theme.palette.custom
                                                                .darkMuted,
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                            </>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
