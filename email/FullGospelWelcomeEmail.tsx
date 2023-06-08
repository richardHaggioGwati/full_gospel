import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#d90429',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

interface FullGospelWelcomeEmailProps {
  name: string;
}

const FullGospelWelcomeEmail: React.FC<FullGospelWelcomeEmailProps> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Welcome to the Full Gospel Family {name}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="http://fullgospeljoburg.co.za/wp-content/uploads/2015/03/cropped-cropped-Full-Gospel-Church-of-God.jpg"
            width="342rem"
            height="55rem"
            alt="Logo"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            We are delighted to extend a warm and heartfelt welcome to you{' '}
            {name} on behalf of the entire Full Gospel Church community.
          </Text>
          <Text style={paragraph}>
            Thank you for reaching out and expressing interest in our church
            family. We believe that every individual&apos;s journey of faith is
            unique and sacred, and we are honored to accompany you on yours.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            We also invite you to explore our website at{' '}
            <Link style={anchor} href="https://full-gospel.vercel.app/about">
              Full Gospel
            </Link>{' '}
            to learn more about our church, our beliefs, and the range of
            programs and guidance we offer.
          </Text>
          <Text style={paragraph}>
            We are thrilled that you have chosen to explore The Full Gospel
            Church, and we genuinely look forward to meeting you in person. Or
            you can join our large audience of Facebook watchers at{' '}
            <Link
              style={anchor}
              href="https://www.facebook.com/profile.php?id=100064884062697"
            >
              Full Gospel Church of God Johannesburg South
            </Link>{' '}
            to ensure you never miss any service.
          </Text>
          <Text style={paragraph}>
            We&apos;ll be here to help you with any step along the way. You can
            contact us on any of the numbers listed on our about page{' '}
            <Link style={anchor} href="https://full-gospel.vercel.app/#contact">
              The Full Gospel Church
            </Link>
            .
          </Text>
          <Text style={paragraph}>— The Full Gospel team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            The Full Gospel Church, 40 Alexander Road, Turffontein, Johannesburg
            2190, Gauteng, South Africa.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default FullGospelWelcomeEmail;
