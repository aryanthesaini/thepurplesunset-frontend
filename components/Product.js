import { ProductStyle } from '../styles/ProductStyle';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuid } from 'uuid';
function Product({ product }) {
  //extract the info from props

  const { title, price, image, slug } = product.attributes;
  // console.log(image);
  const unique_id = uuid();
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {image.data.map((img) => (
              <div key={uuid()}>
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
