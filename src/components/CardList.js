import React from 'react'
import Card from './Card'
export default function CardList({robots}) {
    // if(1){
    //     throw new Error("Ohh no")
    // }
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
