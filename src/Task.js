function Task (props) {
    return (
     <div>
       <li className=" p-3 px-3 my-2 col-sm-9">{props.value}</li>
       <button className="btn btn-danger mx-3 px-2 my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>X</button>
    </div>);
}
export default Task;