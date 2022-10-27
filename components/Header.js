import styled from 'styled-components';
const { AnimatePresence, motion } = require('framer-motion');

export default function Nav() {
  return <HeaderStyle>Customise any gift hamper </HeaderStyle>;
}

const HeaderStyle = styled.div`
  height: 6vh;
  background: linear-gradient(
    90deg,
    rgba(226, 197, 228, 1) 0%,
    rgba(221, 132, 215, 1) 53%,
    rgba(189, 161, 209, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;
