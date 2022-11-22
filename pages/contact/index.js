import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                fontFamily: "Raleway",
                                fontWeight: "600",
                            }}
                        >
                            Get in Touch!
                        </Typography>
                        <br />
                        <Typography>
                            If you&rsquo;re looking for a Front-End Developer
                            for your team, send me your contact info and
                            let&rsquo;s get in touch!
                        </Typography>
                        <br />
                        <Typography>
                            If you&rsquo;re looking for a new website for your
                            portfolio or business, visit{" "}
                            <a
                                href="https://fictionalweb.com"
                                style={{ textDecoration: "underline" }}
                            >
                                Fictional Web
                            </a>
                            , or else you can get in touch with the form here as
                            well!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
