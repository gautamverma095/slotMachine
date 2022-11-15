import Matching from "./Matching"
import NotMatching from "./NotMatching"

const SlotMachine = (props) => {
    const {x,y,z} = props
     return (
    ((x == y) && (y == z))  ?   <Matching props  = {props}/> : <NotMatching props = {props}/>
)


    // if((x == y) && (y == z))
    // {
    //     return (
    //         // <Matching x = {props.x}  y = {props.y} z = {props.z}/>
    //         <Matching props  = {props}/>
    //     )
    // }

    // else{
    //     return (
    //         <NotMatching props = {props}/>
    //     )

    // }


}

export default SlotMachine