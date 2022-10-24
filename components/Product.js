import { ProductStyle } from '../styles/ProductStyle';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Product({ product }) {
  //extract the info from props

  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {image.data.map((img) => (
              <div>
                <img src={img.attributes.formats.small.url} alt='' />
              </div>
            ))}
          </Carousel>
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>₹ {price}</h3>
    </ProductStyle>
  );
}

export default Product;
