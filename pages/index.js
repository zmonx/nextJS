import Footer from "../components/footter";
import Head from "../components/head";
import Products from "../components/shop";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'HAUTEVILLE CONCRETE ROCKING CHAIR',
    image:
      '/assets/images/product-1.jpg',
    price: 350,
  },
  {
    id: 'm2',
    title: 'PAVILION SPEAKER',
    image:
      '/assets/images/product-2.jpg',
    price: 600,
  },
  {
    id: 'm3',
    title: 'LIGOMANCER',
    image:
      '/assets/images/product-3.jpg',
    price: 780,
  },
  {
    id: 'm4',
    title: 'ALATO CABINET',
    image:
      '/assets/images/product-4.jpg',
    price: 800,
  },
  {
    id: 'm5',
    title: 'EARING WIRELESS',
    image:
      '/assets/images/product-5.jpg',
    price: 100,
  },
  {
    id: 'm6',
    title: 'SCULPTURAL COFFEE TABLE',
    image:
      '/assets/images/product-6.jpg',
    price: 960,
  },
  {
    id: 'm7',
    title: 'THE WW CHAIR',
    image:
      '/assets/images/product-7.jpg',
    price: 540,
  },
  {
    id: 'm8',
    title: 'HIMITSU MONEY BOX',
    image:
      '/assets/images/product-8.jpg',
    price: 55,
  },
  {
    id: 'm9',
    title: 'ARIANE PRIN',
    image:
      '/assets/images/product-9.jpg',
    price: 99,
  },
  {
    id: 'm10',
    title: 'Model Chair',
    image:
      '/assets/images/product-8.jpg',
    price: 100,
  },
];

export default function HomePage(props) {
  const { data } = props;
  return (
    <>
      <Head />
      <Products data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS
    },
    // revalidate: 1
  }; 
}

// export default HomePage;
