import { useState } from "react";

const Portfolio = () =>{
    const [ver, setVer] = useState(false)

    const direcionamento = () => {
        window.open('https://arthurresendes.github.io/Portfolio/portfolio2.html', '_blank', 'noopener,noreferrer');
        {/*window.location.href = 'https://arthurresendes.github.io/Portfolio/portfolio2.html'*/}
        setVer(true)
    }
    return(
        <div>
            <br />
            <button onClick={direcionamento}>
                Ver portfolio
            </button>
            <br />
            {ver ? 'Redirecionado com sucesso' : ''}
        </div>
    )
}

export default Portfolio;