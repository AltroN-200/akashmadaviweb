/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './BBCnews.css'
import Searchbtn from './search-icons.svg'
import BBCnewsCard from './BBCnewsCard';

export default function BBCnews() {

    const apiKey = '6d877c0c567142e0bf35636dba1f2d3f';
    const [search, setSearch] = useState('india');
    const [newsData, setNewsData] = useState();

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setNewsData(jsonData.articles);
    }

    useEffect(() => {
        getData();
    },[])
   
    const handleSer = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='bg-news'>
            <header className='bg-header'>
                <h1>BBCnews</h1>
                <div className='search-op'>
                    <input type='text' id='usname' name='usname' onChange={handleSer} placeholder='News' />
                    <button onClick={getData}>
                        <img src={Searchbtn} alt="search" />
                    </button>
                </div>
            </header>
            <main>
                <h2 className='lates'>Latest News</h2>
                <BBCnewsCard data={newsData} />
            </main>
        </div>
    )
}
