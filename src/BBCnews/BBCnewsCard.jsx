import React from 'react'

const BBCnewsCard = ({data}) => {
    console.log(data);

    return (
    <div  className='bg-main'>
        {data && data.map((curItem, index) => {
            return( 
            <a className='bg-card' key={index} href={curItem.url}>
                <img src={curItem.urlToImage} alt="" />
                <h4>{curItem.title}</h4>
                <p>{curItem.description}</p>
            </a>
            )
         })} 
    </div>
    )
}

export default BBCnewsCard