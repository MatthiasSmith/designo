import Layout from '../components/layout/layout';
import LocationLinksList from '../components/location-links/location-links-list';
import ContactIntroCard from '../components/pages/contact/contact-intro-card';

const Contact = () => {
  return (
    <Layout pageTitle='Contact Us'>
      <ContactIntroCard />
      <LocationLinksList />
    </Layout>
  );
};

export default Contact;
