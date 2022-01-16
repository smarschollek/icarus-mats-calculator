import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import LeftContainer from '../components/LeftContianer'
import RightContainer from '../components/RightContainer'
import { Items } from '../data/items'
import { Item } from '../types/Item'


const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`

const Home: NextPage = () => {  
  const [selectedItem, setSelectedItem] = useState<Item>(Items[0])

  return (
    <Container>
      <LeftContainer items={Items} onItemSelected={item => setSelectedItem(item)}/>
      <RightContainer selectedItem={selectedItem}/>
    </Container>
  )
}

export default Home
