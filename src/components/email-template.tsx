import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  contents?: string;
  hasAttachment?: boolean;
}

export const EmailTemplate = ({
  contents = "No additional details provided",
  hasAttachment = false,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>New Contact Form Submission</Preview>
      <Container style={container}>
        <Text style={title}>
          <strong>Hello Team!</strong>
        </Text>
        <Section style={section}>
          <Text style={{ ...contentText, whiteSpace: "pre-wrap" }}>
            {contents}
          </Text>
          {hasAttachment && (
            <Text style={text}>
              An attachment is added. Check below to find the attachment.
            </Text>
          )}
          <Button style={button} href="https://resend.com/emails">
            View All Submissions
          </Button>
        </Section>
        <Text style={footer}>
          DanskeGas ・Wawelska 45/58 ・02-034 Warszawa, Poland ・{" "}
          <a href="mailto:danskegas.adm@gmail.com" style={link}>
            danskegas.adm@gmail.com
          </a>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#f9f9f9",
  color: "#333",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const title = {
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  color: "#d80a00",
  marginBottom: "20px",
};

const section = {
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "6px",
  textAlign: "left" as const,
};

const text = {
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 10px",
};

const contentText = {
  ...text,
  backgroundColor: "#fff",
  padding: "15px",
  borderLeft: "4px solid #d80a00",
  margin: "10px 0",
  whiteSpace: "pre-wrap",
};

const button = {
  display: "block",
  width: "200px",
  margin: "20px auto",
  padding: "12px",
  backgroundColor: "#f99639",
  color: "#ffffff",
  textDecoration: "none",
  textAlign: "center" as const,
  borderRadius: "5px",
  fontSize: "16px",
};

const footer = {
  fontSize: "12px",
  color: "#666",
  textAlign: "center" as const,
  marginTop: "30px",
};

const link = {
  color: "#d80a00",
  textDecoration: "underline",
};
