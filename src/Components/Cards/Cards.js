import React from 'react';
import './Cards.css';

const data = [
    {
        id: 1,
        text: 'Blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.'
    },
    {
        id: 2,
        text: 'One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks.'
    },
    {
        id: 3,
        text: 'Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography.'
    },
    {
        id: 4,
        text: 'In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.'
    }

];

const Cards = () => {
  return (
    <div className='cards'>
        {data.map((index) => (
            <div key={index.id} className='card__container'>
                <div className='card__text'>
                    {index.text}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards