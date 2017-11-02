import React from 'react';
function handleDelete(props) {
  props.onDelete(props.whichItem)
}
const  FunctionalSubComponent = function(props)  {
  
  return(
<li className="media-body">
  <div><button onClick = {() => handleDelete(props)}>delete</button></div>
<div>
<span>{props.itemName.petName} </span>
<span>{props.itemName.aptDate}</span>
</div>
<div>
<span>Owner name : {props.itemName.ownerName}</span>
</div>
<div>
<span>Notes : {props.itemName.aptNotes}</span>
</div>

</li>
  );
}


export default FunctionalSubComponent;