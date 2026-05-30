// Importações

import MyComponents from "./MyComponents";
import TemplateExpressions from "./TemplateExpression";

const FirstComponent =() => {
    return (
        <div>
            {/* Outro tipo de comentario */}
            <h1>Meu componente</h1>
            <p className="text">Meu texto</p>
            <TemplateExpressions />
            <MyComponents/>
        </div>
    )
}

export default FirstComponent;