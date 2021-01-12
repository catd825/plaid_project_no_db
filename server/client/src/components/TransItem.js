import React from 'react';

const TransItem = props => {
    console.log(props.category)
    return(
        <tbody>
           <tr>
               <td>{props.date}</td>
               <td>{props.category[0]}</td>
               <td>{props.category[1] ? props.category[1] : null} {props.category[2] ? `- ${props.category[2]}` : null}</td>
               <td>{props.name}</td>
               <td>{props.amount}</td>
            </tr> 
        </tbody>
    )
}

export default TransItem