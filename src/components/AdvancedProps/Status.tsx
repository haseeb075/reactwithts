import React from 'react'

export type StatusProps = {   
    // status:  //this can take everything
    status: 'loading' | 'success' | 'error'
}

function Status(props : StatusProps) {
  
    // restructuring

    let message
    
    if(props.status === 'loading'){
         message = 'Loading....'
    }
    else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }
    else if(props.status === 'error'){
        message = 'Error Fetching data'
    }
    


    return (
    <div>
        <h2>Status = {message}</h2>
    </div>
  )
}

export default Status