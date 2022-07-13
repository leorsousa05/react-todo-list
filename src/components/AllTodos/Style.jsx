import styled from "styled-components"

export const TodoListContainer = styled.div`
    width: 30rem;
    box-shadow: 14px 16px 0 #121212ca;

    @media screen and (max-width: 540px) {
        width: 20rem;
    }
`

export const TaskList = styled.div`
    overflow-y: scroll;
    scrollbar-width: auto;
    scrollbar-color: #b8b8b8 #ffffff;
    height: 30rem;
    max-width: 50rem;
    border: 1px solid #5315fc81;
    background-color: white;

    ::-webkit-scrollbar {
        width: 13px;
    }

    ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    }

    @media (max-width: 540px) {
        height: 25rem;
    }
`