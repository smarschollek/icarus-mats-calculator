import { useState } from 'react'
import styled from 'styled-components'
import { Items } from '../data/items'
import { Item } from '../types/Item'
import LeftContainer from './components/LeftContianer'
import RightContainer from './components/RightContainer'

const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`

const sortedItems = Items.sort((a,b) => a.name > b.name ? 1 : -1)

const MainPage = () => {

    const [selectedItem, setSelectedItem] = useState<Item>(sortedItems[0])

  return (
    <Container>
      <LeftContainer items={sortedItems} onItemSelected={item => setSelectedItem(item)}/>
      <RightContainer selectedItem={selectedItem}/>
    </Container>
  )
}
export default MainPage