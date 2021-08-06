import {useContext} from 'react';

export default(Context) => {

    const [state, dispatch] = useContext(Context);
    console.log("Context "+state);

    const additem = (inputItem) =>{
        dispatch({
            type:"teste@ADD",
            item2:{
                id:Date.now(),
                title:inputItem,
                check:false,
            }
        });
    }

    const checkitem = (id) =>{
        dispatch({
            type:"teste@CHECK",
            id:id,
        });
    }

    const removeitem = (id) =>{
        dispatch({
            type:"teste@REMOVE",
            id:id,
        });
    }

    return [state, additem, checkitem, removeitem];
}