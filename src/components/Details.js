import React, {
    useState,
    useEffect
} from 'react'

const Details = ({id}) =>{
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${id}`);
        const item = await fetchItem.json();
        setItem(item);
    }

    useEffect(() => {
        fetchItem();
     });

    return ( 
     <div>
        <h1>{item.title}</h1>
        <img src = {item.image} alt="img"/>
    </div>
    );
}

export default Details
