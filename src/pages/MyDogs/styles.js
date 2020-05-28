import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #ff7a00;
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 3px;
        border-bottom: 2px solid #ff7a00;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`;

export const Title = styled.p`
    font-size: 20px;
    color: #222222;
`;

export const DogsList = styled.ul`
    margin-top: 30px;
    list-style: none;
`;

export const List = styled.li`
    display: flex;
    border: 1px solid #eee;
    padding: 15px 10px;
    border-radius: 4px;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;


    & + li {
        margin-top: 10px;
    }
`;

export const InfoDog = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #d5d5d5;
`;

export const NomeDog = styled.p.attrs((props) => ({

}))`
    margin-left: 15px;
    font-size: ${props => props.size ? props.size : '16px'};
    color: ${props => props.color ? props.color : 'black'};
    font-family: ${props => props.font ? props.font : "'Arial', sans-serif"};
`;

export const MoreInfos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
}))`
    background: none;
    border: 0;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 15px;
`;

export const DateHours = styled.div`

`;

