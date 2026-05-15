import PageHero from '../components/PageHero';
import { BRAND } from '../data/constants';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy' },
        ]}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
          <p className="lead">
            At Deepak Enterprises, we respect your privacy and are committed to protecting your
            personal information.
          </p>
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
          <p>
            When you contact us through our website form, we may collect your name, email address,
            phone number, and message content to respond to your inquiries.
          </p>
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your requests, process orders,
            and improve our services. We do not sell or share your personal data with third parties
            for marketing purposes.
          </p>
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href={`mailto:${BRAND.email}`} className="text-brand hover:underline">
              {BRAND.email}
            </a>{' '}
            or call {BRAND.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
