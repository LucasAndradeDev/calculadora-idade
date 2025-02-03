// Componente cabecalhoCard

function CabecalhoCard() {
    
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 px-8 py-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        </div>
        <h1 className="text-2xl font-bold text-white text-center relative z-10">Calculadora de Idade</h1>
        <p className="text-blue-100 text-center mt-2 relative z-10">Descubra sua idade exata</p>
    </div>
    )
}

export default CabecalhoCard