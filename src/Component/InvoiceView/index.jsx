import { useHistory } from "react-router";
import { Container, Dropdown, Grid, Header, Segment, Button, Pagination } from "semantic-ui-react";
import InvoiceList from "../InvoiceList";

const data = [
    {id:'GG000001', name:'Jorge Geovani Gallegos Ancalle', total:'1985', status:'Pending', date:"01 Jun 2021"},
    {id:'GG000002', name:'Maria Peredo Lopez', total:'2500', status:'Pending', date:"05 Mar 2021"},
    {id:'GG000003', name:'Luis Carpio Encinas', total:'10', status:'Paid', date:"05 Oct 2020"}, 
    {id:'GG000004', name:'Juliana Padilla Rios', total:'5000', status:'Over Due', date:"05 Feb 2020"}
    ];
export default function InvoiceView()
{
    const history = useHistory();
    return(
    <Container >
        <Header size='huge'>Invoices</Header>
        <Segment basic >
        <Grid columns='3'  >
            <Grid.Column >
                <Dropdown placeholder='Filter by' selection fluid clearable 
                    options={[
                        {key:1, text:"Pending", value:"Pending"},
                        {key:2, text:"Paid", value:"Paid"},
                        {key:3, text:"Overdue", value:"Overdue"},
                    ]}
                />
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column>
                <Button primary floated='right' onClick={()=>{history.push("/Register")}}> Add</Button>
            </Grid.Column>
        </Grid>
        </Segment>
        <InvoiceList data={data}/>
        <div Style={"text-align: right;padding-top:5px"}> Total:  {data.length}  </div>
        <Pagination totalPages='7' ellipsisItem={null} Style={"text-align:center "} ></Pagination>
    </Container>);
}
