import react from "react";

function DataFormatada({ format, children }) {  
  
    return (
        <span>       
            {new Intl.DateTimeFormat({format}).format(children)}
        </span>
    )
}

export default DataFormatada;