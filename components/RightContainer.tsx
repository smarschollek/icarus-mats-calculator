import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Form, FormControl, Stack } from 'react-bootstrap'
import styled from 'styled-components'
import { Items } from '../data/items'
import { Component } from '../types/Component'
import { InteractiveItem } from '../types/InteractiveItem'
import { Item } from '../types/Item'
import { Divider } from './Divider'
import ListItem from './ListItem'

const CenterContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    border-right: 1px solid #c8c9ca;

    div {
        font-size: 25px;
    }
`

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

const RecipeSelectionBox = styled.div`
    width: 100%;
    display: flex;
`

type Props = {
    selectedItem: Item
}

const RighContainer = (props: Props) => {
    const [amount, setAmount] = useState(1)
    const [selectedRecipe, setSelectedRecipe] = useState(0)
    const [onlyBaseComponents, setOnlyBaseComponents] = useState(false)
    const [interactions, setInterActions] = useState<{[name: string]: boolean}>({})

    useEffect(() => {
        setAmount(1)
        setSelectedRecipe(0)
        setOnlyBaseComponents(false)
        setInterActions({})
    }, [props.selectedItem])

    const renderRecipeSelection = () => {
        if(props.selectedItem) {
            if(props.selectedItem.recipes && props.selectedItem.recipes.length > 1) {
                return props.selectedItem.recipes.map((_, index) => {
                    return (
                        <Form.Check
                            key={index}
                            checked={index === selectedRecipe}
                            onChange={() => setSelectedRecipe(index)}
                            label={`Recipe ${index+1}`}
                        />
                    )
                })
            } else {

            }
        }
    }

    const handleUseRecipeClicked = (itemName: string, active: boolean) => {
        setInterActions(lastState => {
            const newState = {...lastState}
            interactions[itemName] = active
            return newState
        })
    }

    const renderComponents = (components: Component[], wantedAmount: number) : JSX.Element[] => {
        return components.map((component, index) : JSX.Element => {
            const foundItem = Items.find(x => x.name === component.itemName)

            if(foundItem) {
                const renderComponent = () => {
                    if(onlyBaseComponents) {
                        if(foundItem.collectable && !interactions[foundItem.name]) {
                            return <ListItem 
                                        key={index} 
                                        item={foundItem} 
                                        amount={component.amount * wantedAmount}
                                        onUseRecipeClicked={handleUseRecipeClicked}
                                        usingRecipe={interactions[foundItem.name]}
                                    />    
                        }
                    } else {
                        return <ListItem 
                                    key={index} 
                                    item={foundItem} 
                                    amount={component.amount * wantedAmount}
                                    onUseRecipeClicked={handleUseRecipeClicked}
                                    usingRecipe={interactions[foundItem.name]}
                                />
                    }
                }

                return (
                    <>
                        {renderComponent()}
                        {!foundItem.collectable && foundItem.recipes && renderComponents(foundItem.recipes[0].components, component.amount * wantedAmount)}
                        {foundItem.collectable && foundItem.recipes && interactions[foundItem.name] && renderComponents(foundItem.recipes[0].components, component.amount * wantedAmount)}
                    </>

                )    
            } else {
                return <div>error {component.itemName} not found in items :/</div>
            }
            
        })
    }

    if(props.selectedItem.recipes === undefined || props.selectedItem.recipes.length <= selectedRecipe) {
        return (
            <CenterContainer>
                <div>Collectable in the wild</div>
            </CenterContainer>
        )
    }

    return(
         <Container>
             <Header>
                <Image width={100} height={100} src={"/images/ITEM_" + props.selectedItem.name.split(' ').join('_') + ".png" } alt={`${props.selectedItem.name} image`}/>
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
                    onChange={() => setOnlyBaseComponents(!onlyBaseComponents)}
                    label={'only show base components'}
                />
                <RecipeSelectionBox>
                    {renderRecipeSelection()}
                </RecipeSelectionBox>
             </ControlsBox>
             {renderComponents(props.selectedItem.recipes[selectedRecipe].components, amount)}
         </Container>
    )
}
export default RighContainer