export default function Card(props){
    return(
        <div>
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button type="button" onClick={() => alert()}>Buy now</button>

        </div>
    )
}
function alert(){
    alert ("Mua thanh cong!")
}