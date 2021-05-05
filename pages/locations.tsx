import Layout from '../components/layout/layout';
import LocationsList from '../components/locations-list/locations-list';

const Locations = () => {
  return (
    <Layout pageTitle='Locations'>
      <h1 className='sr-only'>Designo's Locations</h1>
      <LocationsList />
    </Layout>
  );
};

export default Locations;
