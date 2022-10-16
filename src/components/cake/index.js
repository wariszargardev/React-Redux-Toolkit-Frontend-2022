import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake, reStockCake} from "../../feature/cake/cakeSlice";

const Cake = () => {
    const [number, setNumber] = useState(1);
    const [addNumber, setAddNumber] = useState(1);

    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch();

    const buyCakeClick = () => {
        dispatch(buyCake(parseInt(number)))
    }

    const onChangeHandler = (e) => {
        setNumber(e.target.value)
    }

    const onChangeHandlerName = (e) => {
        setAddNumber(e.target.value)
    }

    const reStockCakeClick = () =>{
        dispatch(reStockCake(parseInt(addNumber)))
    }

    return (
        <div>
            <h1>Number of cakes available {numberOfCakes}</h1>

            <input type={"number"} value={number} onChange={onChangeHandler}/>
            <button onClick={buyCakeClick}>Buy Cake</button>
            <hr/>

            <h1>Number of available cake at store {numberOfCakes}</h1>
            <input type={"number"} value={addNumber} onChange={onChangeHandlerName}/>
            <button onClick={reStockCakeClick}>Restock Cake</button>

        </div>
    );
};

export default Cake;