import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyIceCream, reStockIceCream} from "../../feature/icecream/iceCreamSlice";

const IceCream = () => {
    const [number, setNumber] = useState(1);
    const [reStockNumber, setReStockNumber] = useState(1);
    const dispatch = useDispatch();

    const iceCream = useSelector(state => state.iceCream.numberOfIceCream)

    const onChangeHandler = (e) =>{
        setNumber(e.target.value)
    }

    return (
        <div>
            <h1>Ice Cream available store {iceCream}</h1>
            <input type={"number"} value={number} onChange={onChangeHandler}/>
            <button onClick={() => dispatch(buyIceCream(parseInt(number)))}>Buy no of Ice cream</button>
            <hr />

            <h1>Ice Cream available store {iceCream}</h1>
            <input type={"number"} value={reStockNumber} onChange={(e) => setReStockNumber(e.target.value)}/>
            <button onClick={() => dispatch(reStockIceCream(parseInt(reStockNumber)))}>Restock no of Ice cream</button>
        </div>
    );
};

export default IceCream;