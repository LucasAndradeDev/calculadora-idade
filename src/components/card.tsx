// Componente card

import CabecalhoCard from "./cabecalhoCard"
import FormCard from "./formCard"


function Card() {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <CabecalhoCard />
            <div className="px-8 py-6">
                <FormCard />
            </div>
        </div>
    )
}


export default Card