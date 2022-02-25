import React from 'react'

function DynamicTable({title, array}) {
  return (
    <table>
      <thead>
        <th>{title}</th>
      </thead>
      {array.map((data) => {
        return (
          <tr>
            <td>{data}</td>
          </tr>
        );
      })}
    </table>
  )
}

export default DynamicTable