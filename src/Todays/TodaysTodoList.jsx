import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';
import { getValue } from '@testing-library/user-event/dist/utils';
import { type } from '@testing-library/user-event/dist/type';
const Wrapper = styled.div`
    width:100%;
    height:100%;
    position: relative;
`;
const Todowrapper = styled.div`
    width:100%;
    height:80px;
    background: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Todo = styled.div`
    
    font-size: 40px;
    font-weight: bold;
    
    
`;

const Buttonadd = styled.button`
    position: absolute;
    right:0;
    left:0;
    margin: 0 auto;   
    bottom: 15px;
    width: 50px;
    height: 50px;
    border-radius: 8px;

    background: ${OpenColor.green[1]};
    &:hover {
        background: ${OpenColor.green[2]};
    }
  
`
const Buttondelete = styled.button`
    position: absolute;
    right:0;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: ${OpenColor.green[1]};
    &:hover {
        background: ${OpenColor.green[2]};
    }
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 6px 8px;
  margin-top: 4px;
  position: absolute;
  bottom: 100px;
  border-radius: 2px 2px 3px 3px;
  background-color: grey;
  &:focus {
    outline: 10px auto black;
    outline-offset: 2px;
    border-color: transparent;
  }
`;




const TodaysTodoList = ({todos,setTodos}) => {

   

    const [text, setText] = useState('');
    const todolist=<Todowrapper></Todowrapper>;
   

    const handleButtonClick = () => {
        
        const newtodos=todos.slice();
        newtodos.push(text);
        setTodos(newtodos);
        
        setText('');
       
    };
    const onChange = (e) => {
        setText(e.target.value);
      };
    const handleButtonDelete = (todo) =>{
        const newtodos=todos.slice();
        delete newtodos[todo];
        setTodos(newtodos);
        
    };
    const renderTodos = () => {
        const ret=[];

        for(const todo in todos){
    
            ret.push(<Todowrapper>
                {todos[todo]}
                
                <Buttondelete onClick={()=>handleButtonDelete(todo)}>{'🗑'}</Buttondelete>
                </Todowrapper>);
        }
        return ret;
    }
   
    return <Wrapper>
        {renderTodos()}
        <TextInput onChange={onChange} value={text}  ></TextInput>
        
     <Buttonadd onClick={handleButtonClick}>{'+'}</Buttonadd>
   
     </Wrapper>;
}

export default TodaysTodoList;