import React, { useState } from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
const List = (props) => {
    const [line ,cut]=useState(false);
    const remove = () => {
        cut(true);
    }
    return (
        <>
            <div className='delete'>
                <span onClick={remove}><DeleteRoundedIcon /></span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
}

export default List;