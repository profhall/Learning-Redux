import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from "./redux/store";
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <Container>
                    <h1>Welcome to the TODO App</h1>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </Container>
            </div>
        </Provider>
    )
}

export default App

const Container = styled.div`
    border:  red 1px;
    width: 50%;
    height: 50vh;
    margin: auto;
    background-color: beige;
    box-shadow: -10px 5px #000000;
    display: grid;
    
`;