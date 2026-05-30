const TemplateExpressions = () => {

    const name = "Arthur"
    const data = {
        age: 19,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você tem {data.age} e atua como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;