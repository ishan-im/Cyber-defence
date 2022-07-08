
export const showSuccessMessage = (success)=>(
   
   
            <div className="alert alert-info " role="alert">
              {success}
             </div>

       

)



export const showErrorMessage = (error)=>(

    <div className="alert alert-warning " role="alert">
            {error}
    </div>

)