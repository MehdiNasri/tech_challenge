import React from "react";

const List = (props) =>{
   

    return(
        <>  
            <h3 className="text-center mb-5 mt-5">Membres de l'équipage</h3>
          
                <div className="row mb-5">
                        
                            {props.argonautes.map((data,index) =>
                                <div className="col-md-4 col-4 mb-4 text-center border"key={index}>{data}</div>
                            )}
                    
                </div>
           
        </>
    );
}
export default List;