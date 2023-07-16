import Link from 'next/link';

export default function TermsAndConditions() {
    return (
      <div>
        <h1>Terms and Conditions</h1>
        <p>
          Last updated: July 15, 2023
        </p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Full Stack Tech fullstacktechnyc.com (the "Service") operated by Full Stack Tech ("us", "we", or "our").
        </p>
        <h2>Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
        </p>
        <h2>Links to Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Full Stack Tech.
        </p>
        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please <Link href="/contact">contact us</Link>.
        </p>
      </div>
    );
  }

