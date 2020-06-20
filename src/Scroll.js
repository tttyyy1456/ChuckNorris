import React from 'react';

const Scroll = (prop) =>{
   return(
	<div style ={{overflowY:'scroll', height:'900px'}}>
		{prop.children}	
	</div>
  )
}

export default Scroll;