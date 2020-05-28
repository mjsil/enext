import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiDogBowl } from 'react-icons/gi';
import { BsTrashFill } from 'react-icons/bs';

import Container from '../../Components/Container';
import {
    Header, TitleContainer, Title, DogsList, List, InfoDog, Image, NomeDog, MoreInfos, DateHours,
    SubmitButton
} from './styles';

export default function MyDog() {
    const [myDogs, setMyDogs] = useState([]);

    useEffect(() => {
        const loadDogs = localStorage.getItem('listDogs');

        if(loadDogs) {
            setMyDogs(JSON.parse(loadDogs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('listDogs', JSON.stringify(myDogs));
    }, [myDogs]);

    function handleDeleDog(name) {
        setMyDogs(myDogs.filter(dog => dog.name !== name));
    }

    return (
        <Container>
            <Header>
                <TitleContainer>
                    <GiDogBowl size={40} color='#222222' />
                    <Title>My Dogs</Title>
                </TitleContainer>
                <Link to='/'>Add Dog</Link>
            </Header>
            <DogsList>
                {myDogs.map((dog, index) => (
                    <List key={index}>
                        <InfoDog>
                            <Image src={dog.image} alt={dog.name} />
                            <NomeDog
                                font={dog.font}
                                size={dog.size}
                                color={dog.color}
                            >
                                {dog.name}
                            </NomeDog>
                        </InfoDog>
                        <MoreInfos>
                            <SubmitButton
                                onClick={() => handleDeleDog(dog.name)}
                            >
                                <BsTrashFill size={25} color='#222222' />
                            </SubmitButton>
                            <DateHours>
                                {dog.completeDate}
                            </DateHours>
                        </MoreInfos>
                    </List>
                ))}
            </DogsList>
        </Container>
    );
}
