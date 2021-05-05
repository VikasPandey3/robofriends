import React from 'react'
import {robots} from '../robots'
import Card from './Card'
export default function CardList() {
    return (
        <div>
           {
               robots.map((robot,i)=>{
                return(
                    <Card key={i} name={robot.name} id={robot.id} email={robot.email}/>
                )
               })
           } 
        </div>
    )
}
