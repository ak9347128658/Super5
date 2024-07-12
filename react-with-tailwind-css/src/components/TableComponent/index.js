import React from 'react'

function TableComponent() {
  return (
    <div className='h-screen w-screen '>
    <table className='border-separate border border-black mx-auto mt-10'>
      <tr>
         <td className='border border-black p-2 font-bold  '>State</td>
         <td className='border border-black p-2 font-bold'>City</td>
         
      </tr>
      <tr>
        <td className='border border-black p-2'>Indiana</td>
        <td className='border border-black p-2'>Indiaaplis</td>
      </tr>
      <tr>
        <td className='border border-black p-2'>Illinois</td>
        <td className='border border-black p-2'>Chicago</td>
      </tr>
      <tr>
        <td className='border border-black p-2'>Ohio</td>
        <td className='border border-black p-2'>Columbus</td>
      </tr>
    </table>
    </div>
  )
}

export default TableComponent;