import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

function TodoContainer() {
  return <Wrapper><Title>Todos</Title></Wrapper>;
}

export default TodoContainer;
