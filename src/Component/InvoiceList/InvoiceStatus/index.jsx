import React from 'react';
import { Icon, Label } from 'semantic-ui-react'


function getColor(status) {
    if(status ==='Pending'){
        return 'grey'
    }

    if(status ==='Paid'){
        return 'green'
    }
    
    return 'red';
}

function getCursor(status) {
    if(status ==='Pending'){
        return 'minus'
    }

    if(status ==='Paid'){
        return 'check'
    }
    
    return 'exclamation';
}

export default function InvoceStatus(properties){
    const{status, date} = properties

    

    return (<><Label color={getColor(status)}> <Icon name={getCursor(status)}/>{status}</Label>
    <div Style="font-size:10px; "> {date} </div></>);
}