import React from 'react'
import { Grid} from 'semantic-ui-react'
import CartMain from '../../components/cart/CartMain'
import DisplaySearchItems from '../../components/displaysearchitems/DisplaySearchItems'
import Search from '../../components/search/Search'
import './MenuBody.css'

export default function MenuBody() {
    return (
        <Grid>
        <Grid.Column floated='left' width={10}>
            products
            <Search/>
            <DisplaySearchItems/>
        </Grid.Column>
        <Grid.Column className="borders" floated='right' width={5}>
        <CartMain/>
        </Grid.Column>
            
       
        </Grid>
    )
}
