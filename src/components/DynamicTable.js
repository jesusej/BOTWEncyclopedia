import React from 'react'

function DynamicTable({title, array}) {
  let row = -1;
  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {array.map((data) => {
          row++;
          return (
            <tr key={row}>
              <td>{data}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default DynamicTable