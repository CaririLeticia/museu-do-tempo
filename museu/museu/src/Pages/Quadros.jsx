import { ListQuadros } from "../components/ListQuadros"
import quadros from "../database/quadros.json";

export const Quadros = () => {

    return(
        <>
        <ListQuadros 
        QuadrosArr={quadros}
        />    

        </>
    )
}