import React from 'react';

const TableItem = (props) => {
    return (
        <>

            <tr>
              <td>{ props.posts.id}</td>
              <td>{ props.posts.language }</td>
              <td>{ props.posts.stack}</td>
              <td><button onClick={() => props.remove(props.posts)} className='btn btn-outline-danger'>Delete</button></td>
            </tr>
        </>
    );
}

export default TableItem;