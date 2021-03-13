import React from 'react';
import { Container, Segment} from 'semantic-ui-react'
import InvoiceItem from './InvoiceItem';
//Style={"width:1200px; margin:0 auto; background-color:#d7d7d7" }
export default function InvoiceList(properties)
{
    const{data}=properties;
    const list = data.map(invoice=>{
        return  <InvoiceItem
                    id={"#"+invoice.id} 
                    name={invoice.name} 
                    mount={invoice.total} 
                    status={invoice.status}
                    date={invoice.date}
                    /> 
                    
    })

    return(<Container Style={"background-color:#e7e7e7"} >
        <Segment.Group >
            {list}
        </Segment.Group></Container>);
        
}