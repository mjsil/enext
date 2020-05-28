import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { GiJumpingDog } from 'react-icons/gi';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../Components/Container';
import dateHours from '../../Components/DateHours';
import {
    Header, TitleContainer, Title, Form, SelectContainer, SubmitButton, SelectDiv, CustomizeDog,
    Input, SelectCustomize, ImageContainer, DogImage, Image, NameDog, SendButton
} from './styles';

const colors = [
    { value: 'orange', label: '🧡 Orange', name: 'color' },
    { value: 'green', label: '💚 Green', name: 'color' },
    { value: 'blue', label: '💙 Blue', name: 'color' },
    { value: 'purple', label: '💜 Purple', name: 'color' },
    { value: 'black', label: '🖤 Black', name: 'color' }
]

const fonts = [
    { value: "'Dancing Script', cursive", label: 'Dancing Script', name: 'font' },
    { value: "'Inconsolata', monospace", label: 'Inconsolata', name: 'font' },
    { value: "'Josefin Sans', sans-serif", label: 'Josefin Sans', name: 'font' },
    { value: "'Roboto Slab', serif", label: 'Roboto Slab', name: 'font' },
    { value: "'Oswald', sans-serif", label: 'Oswald', name: 'font' }
]

const size = [
    { value: '16px', label: 'Small', name: 'size' },
    { value: '20px', label: 'Middle', name: 'size' },
    { value: '30px', label: 'Big', name: 'size' },
    { value: '50px', label: 'Very Big', name: 'size' },
    { value: '70px', label: 'Giant', name: 'size' }
]

export default function Home() {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [breed, setBreed] = useState('');
    const [customize, setCustomize] = useState({});
    const [myDog, setMyDog] = useState({});
    const [listDogs, setListDogs] = useState([]);


    useEffect(() => {
        async function loadBreeds() {
            const response = await api.get('breeds/list/all');

            const data = response.data.message;
            const arrayBreeds = [];

            for(const breed in data) {
                arrayBreeds.push({value: `${breed}`, label: `${breed}`});
            }

            setBreeds(arrayBreeds);
        }

        const listDog = localStorage.getItem('listDogs');

        if(listDog) {
            setListDogs(JSON.parse(listDog));
        }

        loadBreeds();
    }, []);

    useEffect(() => {
        localStorage.setItem('listDogs', JSON.stringify(listDogs));
    }, [listDogs]);

    function selectDog(breed) {
        setBreed(breed.value);
    }

    async function handleSearch(){
        try {
            setLoading(true);

            const response = await api.get(`breed/${breed}/images/random`);

            setMyDog({ ...myDog, image: response.data.message });

            setLoading(false);
        } catch (error) {
            console.log(error);

            setLoading(false);
        }
    }

    function customizeDog(dog) {
        dog.name === 'color'
            ? setCustomize({...customize, color: dog.value})
            : dog.name === 'font'
                ? setCustomize({...customize, font: dog.value})
                : setCustomize({...customize, size: dog.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: myDog.name,
            image: myDog.image,
            font: customize.font,
            color: customize.color,
            size: customize.size,
            completeDate: dateHours
        };

        await setListDogs([...listDogs, data]);

        history.push(`/mydogs`);
    };

    return (
        <Container>
            <Header>
                <TitleContainer>
                    <GiJumpingDog size={40} color='#222222' />
                    <Title>Search Dog</Title>
                </TitleContainer>
                <Link to='/mydogs'>My Dogs</Link>
            </Header>
            <Form onSubmit={handleSubmit}>
                <SelectContainer>
                    <SelectDiv>
                        <Select
                            defaultValue={' '}
                            options={breeds}
                            placeholder='Breeds list...'
                            onChange={e => selectDog(e)}
                        />
                    </SelectDiv>
                    <SubmitButton
                        loading={loading}
                        onClick={handleSearch}
                        value={breed === '' ? true : false}
                    >
                        {loading ?
                            <FaSpinner color="#fff" size={14} />
                            :
                            <FaPlus color="#fff" size={14} />
                        }
                    </SubmitButton>
                </SelectContainer>
                <CustomizeDog>
                    <Input
                            value={myDog.name}
                            onChange={e => setMyDog({ ...myDog, name: e.target.value })}
                    />
                    <SelectCustomize>
                        <Select
                            options={colors}
                            placeholder='Colors name...'
                            onChange={e => customizeDog(e)}
                        />
                    </SelectCustomize>
                    <SelectCustomize>
                        <Select
                            options={fonts}
                            placeholder='Fonts name...'
                            onChange={e => customizeDog(e)}
                        />
                    </SelectCustomize>
                    <SelectCustomize>
                        <Select
                            options={size}
                            placeholder='Small name...'
                            onChange={e => customizeDog(e)}
                        />
                    </SelectCustomize>
                </CustomizeDog>
                <ImageContainer>
                    <DogImage>
                        <Image src={myDog.image} />
                        <NameDog
                            font={customize.font}
                            size={customize.size}
                            color={customize.color}
                        >
                            {myDog.name}
                        </NameDog>
                    </DogImage>
                </ImageContainer>
                <SendButton
                    value={myDog.name && myDog.image ? true : false}
                >
                    ENVIAR
                </SendButton>
            </Form>
        </Container>
    );
}
