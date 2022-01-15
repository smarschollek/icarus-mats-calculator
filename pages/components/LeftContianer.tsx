import Image from 'next/image'
import { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { Divider } from '../../components/Divider'
import { Item } from '../../types/Item'
import ListItem from './ListItem'

const Container = styled.div`
  height: 100%;
  width: 450px;
  border-right: 1px solid #c8c9ca;
  border-left: 1px solid #c8c9ca;
  overflow: hidden;
`

const TopBar = styled.div`
    padding-left: 10px;
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;

    div {
        padding-left: 10px;
        font-size: 30px;
        padding-bottom: 2px;
        letter-spacing: -1px;
    }
`

const SearchBox = styled.div`
    height: 40px;
    margin: 5px;
`

const ListBox = styled.div`
    height: calc(100% - 100px);
    overflow-y: auto;
    overflow-x: hidden;
`

type Props = {
    items: Item[]
    onItemSelected : (item: Item) => void
}

const LeftContainer = (props: Props) => {
    const [search, setSearch] = useState<string>('')

    const renderItems = () => {
        let filteredItems = props.items

        if(search.length > 2) {
            filteredItems = props.items.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        } 
        
        return filteredItems.map((item, index) => {
            return (
                <ListItem key={index} item={item} onClick={() => props.onItemSelected(item)}/>
            )
        })
    }

    return(
         <Container>
             <TopBar>
                 <Image src='/images/Icarus-Logo.png' height={45} width={138} alt='Icarus Logo'/>
                 <div>MATS CALCULATOR</div>
             </TopBar>
             <SearchBox>
                <FormControl
                    type='text'
                    placeholder='Search for Items'
                    onChange={e => setSearch(e.target.value)}
                />
             </SearchBox>
             <Divider/>
             <ListBox>
                {renderItems()}
             </ListBox>
         </Container>
    )
}
export default LeftContainer