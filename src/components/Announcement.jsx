import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #10aaaa;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
