import styled, { keyframes, css } from 'styled-components';

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

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

export const SelectContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.value || props.loading
}))`
    background: #ff7a00;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
    ${props => props.loading && css`
        svg {
            animation: ${rotate} 1.5s linear infinite;
        }
    `}
`;

export const SelectDiv = styled.div`
    flex: 1;
`;

export const CustomizeDog = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const Input = styled.input.attrs((props) => ({
    type: 'text',
    placeholder: 'Dog name'
}))`
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    font-size: 14px;
    transition: .05s;

    &:hover {
        border: 1px solid #c1c1c1;
    }

    &:focus {
        border: 1.5px solid #2684ff;
    }
`;

export const SelectCustomize = styled.div`
    flex: 1;
    margin-left: 10px;
`;


export const ImageContainer = styled.div`
    margin-top: 30px;
`;

export const DogImage = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Image = styled.img`
    height: 400px;
    max-width: 700px;
    border-radius: 4px;
`;

export const NameDog = styled.p.attrs((props) => ({

}))`
    font-size: ${props => props.size ? props.size : '16px'};
    color: ${props => props.color ? props.color : 'black'};
    font-family: ${props => props.font ? props.font : "'Arial', sans-serif"};
    position: absolute;
    margin: auto;
    max-width: 600px;
    overflow: scroll;

    ::-webkit-scrollbar {
        width: 0;
    }
`;

export const SendButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: !props.value
}))`
    margin-top: 30px;
    background: #ff7a00;
    color: #fff;
    border: 0;
    padding: 10px 30px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
