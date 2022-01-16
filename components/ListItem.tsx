import { Item } from "../types/Item"
import styled from 'styled-components'
import Image from "next/image"
import { MouseEventHandler } from "react"
import { Divider } from "./Divider"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;

    div:first-child {
        margin-left: 16px;
        margin-right: 16px;
        font-weight: bold;
    }

    div:last-child {
        margin-left: 16px;
    }

    
`

type Props = {
    amount?: number
    item: Item
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const ListItem = (props: Props) => {
    if(!props.item) {
        return <></>
    }
    
    return(
        <>
            <Wrapper onClick={props.onClick}>
                {
                    props.amount && (
                        <div>{props.amount.toFixed(2)}x</div>
                    )
                }
                <Image src={props.item.imageUrl} alt={props.item.name + 'image'} width={40} height={40}/>
                <div>
                    {props.item.name}
                </div>
            </Wrapper>
            <Divider/>
        </>
         
    )
}
export default ListItem