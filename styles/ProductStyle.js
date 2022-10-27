import styled from 'styled-components';
const { motion } = require('framer-motion');

export const ProductStyle = styled(motion.div)`
  background: linear-gradient(
    90deg,
    rgba(226, 197, 228, 1) 100%,
    rgba(221, 132, 215, 1) 3%,
    rgba(189, 161, 209, 1) 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 5%;

  img {
    width: 100%;
    cursor: pointer;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;
