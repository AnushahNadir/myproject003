import React from 'react';
import './Hello.css';

function Hello({name}){
    return <div>Hello this is <strong> {name} </strong>
    <br/><br/>
    <table className="taab">
        <tr>
            <th>{name} has to do</th>
            <th>{name} has done</th>
        </tr>
        <tr>
            <td>React</td>
            <td>HTML</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>CSS</td>
        </tr>
        <tr>
            <td>Router</td>
            <td>JS</td>
        </tr>
        <tr>
            <td>Photoshop</td>
            <td>C++</td>
        </tr>
    </table>
        
            </div>
}

export default Hello;
