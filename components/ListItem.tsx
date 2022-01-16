import { Item } from "../types/Item"
import styled from 'styled-components'
import Image from "next/image"
import { MouseEventHandler, useState } from "react"
import { Divider } from "./Divider"
import { Form, ToggleButton } from "react-bootstrap"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;

    div:first-child {
        margin-left: 16px;
        margin-right: 16px;
        font-weight: bold;
        width: 100px;
    }

    div {
        margin-left: 32px;
    }
`

type Props = {
    amount?: number
    item: Item
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
    onUseRecipeClicked?: (itemName: string, active: boolean) => void
    usingRecipe?: boolean
}

const ListItem = (props: Props) => {
    const [useRecipe, setUseRecipe] = useState(props.usingRecipe)
    
    if(!props.item) {
        return <></>
    }
    
    const handleUseRecipeClick = () => {
        props.onUseRecipeClicked && props.onUseRecipeClicked(props.item.name, !useRecipe)
        setUseRecipe(!useRecipe)
    }

    return(
        <>
            <Wrapper onClick={props.onClick}>
                {
                    props.amount && (
                        <div>{props.amount.toFixed(2)}x</div>
                    )
                }
                <Image src={"/images/ITEM_" + props.item.name.split(' ').join('_') + ".png" } alt={props.item.name + ' image'} width={40} height={40}/>
                <div>
                    {props.item.name}
                </div>
                {
                    props.item.collectable && props.item.recipes && props.onUseRecipeClicked && (
                      <Form.Check checked={useRecipe} onChange={handleUseRecipeClick} label='Use Recipe'/>
                    )
                }
            </Wrapper>
            <Divider/>
        </>
         
    )
}
export default ListItem