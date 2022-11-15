import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="R&eacute;sum&eacute;">
            <Container maxWidth="lg" className="section">
                <iframe
                    src="/images/Resume_WebDeveloper.pdf"
                    width="100%"
                    height="1000px"
                ></iframe>
            </Container>
        </PageLayout>
    );
};

export default index;
