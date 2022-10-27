import Head from 'next/head';
import { useQuery } from 'urql';
import Product from '../components/Product';
import { PRODUCT_QUERY } from '../lib/query';
import { Gallery, Categories } from '../styles/Gallery';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useStateContext } from '../lib/context';
import { IoLogoWhatsapp } from 'react-icons/io5';
const { motion } = require('framer-motion');
import { useRouter } from 'next/router';
export default function Home() {
  //fetch products from strapi
  const route = useRouter();

  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;
  // console.log(results);
  const { tags, setTags } = useStateContext();

  //check for the data coming in

  if (fetching)
    return (
      <PacmanLoader
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        color={'#000000'}
        size={30}
        loading={fetching}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    );

  if (error) <p>OH NO... {error.message}</p>;
  const products = data.products.data;
  // console.log(products);
  return (
    <div>
      <Head>
        <title>The Purple Sunset</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Categories>
          <button
            className='button-86'
            onClick={(e) => {
              setTags(e.target.innerText);
            }}>
            All
          </button>
          <button
            className='button-86'
            onClick={(e) => {
              setTags(e.target.innerText);
            }}>
            Sense
          </button>
          <button
            className='button-86'
            onClick={(e) => {
              setTags(e.target.innerText);
            }}>
            Bulk
          </button>
          <button
            className='button-86'
            onClick={(e) => {
              setTags(e.target.innerText);
            }}>
            Theme
          </button>
          <button
            className='button-86'
            onClick={(e) => {
              setTags(e.target.innerText);
            }}>
            Misc
          </button>
        </Categories>
        {/* <motion.div
          drag='y'
          dragElastic={2}
          dragConstraints={{
            bottom: 1000,
            top: 0,
          }}
          style={{ zIndex: '400', position: 'absolute' }}>
          <IoLogoWhatsapp
            style={{
              padding: '3rem, 3rem',
              background: '#54b354',
              fontSize: '3rem',
              borderRadius: '50%',
              cursor: 'grabbing',
            }}
            onClick={() => {
              // route.push('https://wa.me/919582875455');
            }}
          />
        </motion.div> */}

        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}
