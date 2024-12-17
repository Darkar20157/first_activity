import './ListProducts.css'

function ListProducts( {children} ){
    return (
        <ul className="Row">
            {children}
        </ul>
    );
}

export { ListProducts };