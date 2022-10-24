import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
  CarouselWrapper,
} from '../../styles/ProductDetails';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuid } from 'uuid';

export default function ProductDetails() {
  //usestate
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  //reset qty

  useEffect(() => {
    setQty(1);
  }, []);
  // console.log(qty);

  //Fetch slug
  const { query } = useRouter();

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  const unique_id = uuid();
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
  // console.log(data);
  const { title, image, description, price } = data.products.data[0].attributes;
  // console.log(image);

  //create a toast
  const notify = () => {
    toast.success(`${title} added to your cart`, {
      duration: 1000,
    });
  };

  return (
    <DetailsStyle>
      <CarouselWrapper>
        <Carousel showThumbs={false}>
          {image.data.map((img) => (
            <div key={uuid()}>
              <img src={img.attributes.formats.small.url} alt='' />
            </div>
          ))}
        </Carousel>
      </CarouselWrapper>
      <ProductInfo>
        <h2>{title}</h2>
        <br />
        <h4>₹ {price}</h4>
        <br />
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>{' '}
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            notify();
          }}>
          ADD TO CART
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
