import React from 'react'
import "../Home/Home1"
import "../Proyects/Proyects.css"


const Proyects = () => {
  return (
    
    <div className='pr-container'>

    <div className='box-container'>

    
    <div className='proyect1'> 
    
      <a href='https://challenger-one-david-chaban.vercel.app/' target="_blank" rel="noopener noreferrer"><button  className='demo-button'>Demo</button> </a>
        <a href='https://github.com/DavidChaban/ChallengerOne-DavidChaban'target="_blank" rel="noopener noreferrer"><button className='code-button'>Code</button></a>


 </div>





    <div className='proyect2'>
    <a href='https://mindy-pet-shop.vercel.app/'target="_blank" rel="noopener noreferrer"><button className='demo-button'>Demo</button>  </a>
    <a href='https://github.com/DavidChaban/Mindy-PetShop' target="_blank" rel="noopener noreferrer"><button className='code-button'>Code</button>  </a>
    
    
    
    </div>

    {/* <div className='proyect3'>Amazing Events</div>

    <div className='proyect4'>My Tinerary</div> */}

    <div className='proyect5'>
    <a href='https://rftc-web.vercel.app/' target="_blank" rel="noopener noreferrer">
    <button className='demo-button'>Demo</button> 
    </a>
    <a href='https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-Front' target="_blank" rel="noopener noreferrer">
    <button className='code-button'>Code</button> 
    </a>

    </div>

    {/* <div className='proyect6'>Todo List</div> */}

    
    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Proyects