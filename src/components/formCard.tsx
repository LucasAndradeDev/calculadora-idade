import React from 'react';

// Component FormCard
function FormCard() {

    function calcularIdade(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
    
        // Obtém o elemento do DOM
        const elemento = document.getElementById('data-nascimento');
    
        // Verifica se é um input antes de prosseguir
        if (!(elemento instanceof HTMLInputElement)) {
            alert('Erro: O campo de data de nascimento não foi encontrado.');
            return;
        }
    
        const dataNascimento = elemento.value;
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const mesAtual = dataAtual.getMonth() + 1; // Mês atual (1-12)
        const diaAtual = dataAtual.getDate(); // Dia atual
    
        // Validação: garantir que a data foi preenchida corretamente
        if (!dataNascimento) {
            alert('Por favor, insira uma data de nascimento válida.');
            return;
        }
    
        // Extrai ano, mês e dia do valor do input
        const [anoNascimentoStr, mesNascimentoStr, diaNascimentoStr] = dataNascimento.split('-');
        const anoNascimento = parseInt(anoNascimentoStr, 10);
        const mesNascimento = parseInt(mesNascimentoStr, 10);
        const diaNascimento = parseInt(diaNascimentoStr, 10);
    
        let idade: number;
    
        // Verifica se a pessoa já fez aniversário este ano
        if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
            idade = anoAtual - anoNascimento;
        } else {
            idade = anoAtual - anoNascimento - 1;
        }
    
        // Exibe a idade calculada
        const elementoIdade = document.getElementById('idade') as HTMLParagraphElement;
        if (elementoIdade) {
            elementoIdade.innerHTML = `Você tem <strong>${idade}</strong> ${idade === 1 ? 'ano' : 'anos'} de idade.`;
        }
    }
    

    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="data-nascimento" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Data de Nascimento
                </label>
                <div className="relative">
                    <input
                        type="date"
                        id="data-nascimento"
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 ease-in-out"
                        required
                    />
                </div>
            </div>

            <div className="pt-2">
                <button
                    onClick={calcularIdade}
                    type="button"
                    className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                    <i className="fas fa-calculator mr-2"></i>
                    Calcular Idade
                </button>
            </div>

            {/* Exibição da idade */}
            <p id="idade" className="text-center text-gray-700 dark:text-gray-200"></p>
        </form>
    );
}

export default FormCard;