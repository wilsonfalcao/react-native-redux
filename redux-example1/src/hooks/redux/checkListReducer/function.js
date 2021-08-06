import {useContext} from 'react';

export default(Context) => {

    const [state, dispatch] = useContext(Context);

    const additem = (inputItem) =>{
        dispatch({
            type:"ADD",
            item:{
                id:Date.now(),
                title:inputItem,
                check:false,
            }
        });
    }

    const checkitem = (id) =>{
        dispatch({
            type:"CHECK",
            id:id,
        });
    }

    const removeitem = (id) =>{
        dispatch({
            type:"REMOVE",
            id:id,
        });
    }

    return [state, additem, checkitem, removeitem];
}