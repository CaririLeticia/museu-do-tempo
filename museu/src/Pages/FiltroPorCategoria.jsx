import { useParams } from "react-router-dom";
import obras from "../database/quadros.json";
import { ListQuadros } from "../components/ListQuadros";

function FiltroPorCategoria() {
  const { categoria } = useParams();

  const result = obras.filter((item) =>
    item.tema.toLowerCase().includes(categoria.toLowerCase())
  );

  return (
    <ListQuadros
    QuadrosArr={result} 
    />  
  );
}

export default FiltroPorCategoria;
