import Image from 'next/image';

import IntroCard from '../components/intro-card';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <IntroCard
        title='Contact Us'
        text='Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.'
        bgImage={<div></div>}
        paddingTopBottom='4.5rem'
      />
    </Layout>
  );
};

export default Contact;
