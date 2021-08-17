interface QualityType {
  title: string;
  text: string;
  image: string;
}

const qualities: QualityType[] = [
  {
    title: 'Passionate',
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    image: '/home/desktop/illustration-passionate.svg',
  },
  {
    title: 'Resourceful',
    text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    image: '/home/desktop/illustration-resourceful.svg',
  },
  {
    title: 'Friendly',
    text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    image: '/home/desktop/illustration-friendly.svg',
  },
];

export default qualities;
