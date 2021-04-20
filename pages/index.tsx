import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <article className='heading-content'>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <a>Learn More</a>
          <img src='' alt='' />
        </article>
        <article className='main-content'>
          <ul className='project-links-list'>
            <li className='project-link-list-item'>
              <h2>Web Design</h2>
              <a>View Projects</a>
            </li>
            <li className='project-link-list-item'>
              <h2>App Design</h2>
              <a>View Projects</a>
            </li>
            <li className='project-link-list-item'>
              <h2>Graphic Design</h2>
              <a>View Projects</a>
            </li>
          </ul>
          <ul className='company-qualities-list'>
            <li className='company-qualities-list-item'>
              <img src='' alt='' />
              <h2>Passionate</h2>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </li>
            <li className='company-qualities-list-item'>
              <img src='' alt='' />
              <h2>Resourceful</h2>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </li>
            <li className='company-qualities-list-item'>
              <img src='' alt='' />
              <h2>Friendly</h2>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </li>
          </ul>
        </article>
      </Layout>
    </>
  );
}
