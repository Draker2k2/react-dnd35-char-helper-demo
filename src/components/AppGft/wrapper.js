import styled from 'styled-components';

const Wrapper = styled.div`
  .content {
    display: flex;
    .category {
      flex-shrink: 5;
    }
  }
  body {
    background-image: url("body.png");
    background-color: #cccccc;
  }
  .img {
    background-image: url("body.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;

