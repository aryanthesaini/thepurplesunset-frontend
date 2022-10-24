import { useRouter } from 'next/router';
import Image from 'next/image';
import purple2 from '../public/purple2.jpg';
import styled from 'styled-components';
const { motion } = require('framer-motion');

export default function About() {
  const route = useRouter();
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.75 }}>
        <Image
          height={'400px'}
          width={'400px'}
          src={purple2}
          style={{ borderRadius: '5%' }}
          alt='Purple sunset'></Image>
        <p>
          The Purple Sunset is a story of a girl who coloured her skies purple,
          no matter how many times people told her not to, told her that purple
          doesn't belong to evening sky falls. Art has always been her way to
          rebel, revolt, and her way to love. It is through art that she
          realised that sunsets aren't supposed to be the sad endings to dying
          skies as her childhood self imagined them to be, so she made them her
          beginnings. From making birthday cards to bookmarks out of dead
          flowers for her friends, she always found a way of colouring hearts
          purple. She gifted her friends and family and strangers with purple
          love wrapped in handmade sunsets. From open when letters to handmade
          candles to meaningful gifts to lamps and lights and frames and
          chocolates, from birthday gift boxes to festive hampers, she has
          something purple for every occasion when you feel the need to let
          someone know you love them, that they make this black and white world
          colourful, that they add purple to your skies. The Purple Sunset
          delivers handmade love to your doorstep. It is a silent promise of
          warmth and healing from a girl who is adamant about making people
          believe thatt love comes personalised, like in the 90s, in handmade
          brown covers with little love notes, stamps and silences hidden
          beneath. That in a colourless world, love can be understood in the
          language of colours. The Purple Sunset is your reminder of how endings
          are beautiful too, that they can be beginnings too.
        </p>

        <button onClick={() => route.push('/')}>Continue Shopping</button>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5rem 15rem;

  @media (max-width: 1024px) {
    margin: 0rem;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 2rem 3rem;
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 0.5rem;
    color: gray;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 2rem;
    font-weight: 300;
  }

  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
    }
    h1 {
      font-size: 1rem;
    }
    button {
      color: white;
      background: var(--primary);
      font-size: 0.7rem;
      font-weight: 300;
      padding: 1rem 1rem;
      border: none;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    font-size: 0.5rem;
  }
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;

  div {
    padding-bottom: 1rem;
  }
  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    font-size: 0.5rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;
