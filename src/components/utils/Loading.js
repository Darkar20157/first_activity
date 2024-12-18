import { FaCheck } from "react-icons/fa";
import './Loading.css'

function Loading(){
    return (
        <div className="Loading-Container">
            <span className="Loading-Icon"><FaCheck/></span>
            <span className="Loading-Text">Cargando</span>
            <span className="Loading-Delete">X</span>
        </div>
    )
}

export { Loading }