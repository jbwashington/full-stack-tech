import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: [insert date]</p>
      <p>
        Full Stack Tech ("us", "we", or "our") operates the fullstacktechnyc.com (the "Service"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
      </p>
      <h2 className="mt-4 font-semibold text-lg">Information Collection And Use</h2>
      <p>
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information ("Personal Information") may include, but is not limited to, your name, email address, postal address and phone number.
      </p>
      <h2 className="mt-4 font-semibold text-lg">Log Data</h2>
      <p>
        We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
      </p>
      <h2 className="mt-4 font-semibold text-lg">Security</h2>
      <p>
        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>
      <h2 className="mt-4 font-semibold text-lg">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please <Link href="/contact">contact us</Link>.
      </p>
    </div>
  );
}

