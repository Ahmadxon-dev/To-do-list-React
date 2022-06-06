import React from 'react';
import TableHead from './TableHead';
import TableItem from './TableItem';

const TableList = ({posts_bu_obyekt}) => {
  return (
    <>
    <table className='table'>
        <TableHead />
        <tbody>
          {posts_bu_obyekt.map(post_parametr => (
            <TableItem posts={post_parametr} key={post_parametr.id}/>
          ))}
        </tbody>

        {/* <TableItem  post={{language:"Python", stack:'FULL Stack' }}/>
        <TableItem  post={{language:"C++", stack:'FULL Stack' }}/> */}
      </table>
    </>
  )
}

export default TableList