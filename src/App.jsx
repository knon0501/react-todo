import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoContainer from './Todos/TodoContainer';
import TodaysTodoContainer from './Todays/TodaysTodoContainer';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  flex-direction: row;
`;

function App() {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [itemsByDate, setItemsByDate] = useState({});
  useEffect(() => {
    const newDate = new Date();
    const today = `${newDate.getFullYear}.${newDate.getMonth + 1}.${newDate.getDate}`;
    const initialItems = {};
    initialItems[today] = [];
    setItemsByDate(Object.assign(itemsByDate, initialItems));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodaysTodoContainer
          date={date}
          setDate={setDate}
          itemsByDate={itemsByDate}
          setItemsByDate={setItemsByDate}
        />
        <TodoContainer todos={todos} setTodos={setTodos} />
      </Wrapper>
    </>
  );
}

export default App;
