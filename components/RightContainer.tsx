import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Form, FormControl, Stack } from 'react-bootstrap'
import styled from 'styled-components'
import { Items } from '../data/items'
import { Component } from '../types/Component'
import { Item } from '../types/Item'
import { Divider } from './Divider'
import ListItem from './ListItem'



const Container = styled.div`
  height: 100%;
  width: calc(100% - 420px);
  border-right: 1px solid #c8c9ca;
`

const Header = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    font-size: 40px;
    align-items: baseline;
    padding-left: 20px;
    div {
        transform: translateY(-20px);
    }
`


const ControlsBox = styled(Stack)`
    padding: 10px;

    div {
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
    }
`

const ComponentBox = styled.div`

`

type Props = {
    selectedItem: Item
}

const RighContainer = (props: Props) => {
    const [amount, setAmount] = useState(1)
    const [selectedRecipe, setSelectedRecipe] = useState(0)
    const [onlyBaseComponents, setOnlyBaseComponents] = useState(false)

    useEffect(() => {
        setAmount(1)
        setSelectedRecipe(0)
        setOnlyBaseComponents(false)
    }, [props.selectedItem])

    const renderRecipeSelection = () => {
        if(props.selectedItem) {
            if(props.selectedItem.recipes && props.selectedItem.recipes.length > 1) {
                return props.selectedItem.recipes.map((item, index) => {
                    return (
                        <Form.Check
                            key={index}
                            checked={index === selectedRecipe}
                            onClick={() => setSelectedRecipe(index)}
                            label={`Recipe ${index}`}
                        />
                    )
                })
            } else {

            }
        }
    }

    const renderComponents = (components: Component[], wantedAmount: number) : JSX.Element[] => {
        return components.map((component, index) : JSX.Element => {
            const foundItem = Items.find(x => x.name === component.itemName)

            if(foundItem) {

                const renderComponent = () => {
                    if(onlyBaseComponents) {
                        if(foundItem.collectable) {
                            return <ListItem key={index} item={foundItem} amount={component.amount * wantedAmount}/>    
                        }
                    } else {
                        return <ListItem key={index} item={foundItem} amount={component.amount * wantedAmount}/>
                    }
                }

                return (
                    <>
                        {renderComponent()}
                        {foundItem.recipes && renderComponents(foundItem.recipes[0].components, component.amount * wantedAmount)}
                    </>

                )    
            } else {
                return <div>error {component.itemName} not found in items :/</div>
            }
            
        })
    }

    if(props.selectedItem.recipes === undefined || props.selectedItem.recipes.length <= selectedRecipe) {
        return (
            <>xxx</>
        )
    }

    return(
         <Container>
             <Header>
                <Image width={100} height={100} src={props.selectedItem.imageUrl} alt={`${props.selectedItem.name} image`}/>
                <div>{props.selectedItem.name}</div>
             </Header>
             <Divider/>
             <ControlsBox gap={4}>
                <div>
                    Amount to create
                </div>
                <Form.Range
                    min={1}
                    max={1000}
                    value={amount}
                    onChange={e => setAmount(Number.parseInt(e.target.value))}
                />
                <FormControl
                    type='number'
                    min={1}
                    max={1000}
                    value={amount}
                    onChange={e => setAmount(Number.parseInt(e.target.value))}
                />
                <Form.Check
                    checked={onlyBaseComponents}
                    onClick={() => setOnlyBaseComponents(!onlyBaseComponents)}
                    label={'only show base components'}
                />
                {renderRecipeSelection()}
             </ControlsBox>
            <ComponentBox>

            </ComponentBox>
             {renderComponents(props.selectedItem.recipes[selectedRecipe].components, amount)}
         </Container>
    )
}
export default RighContainer