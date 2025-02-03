// Componente theme toggle
function ThemeToggle() {
    // Função para alternar o tema
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        // O valor 'dark' é adicionado ou removido do atributo 'class' do elemento 'html'
        // Por padrao o elemento 'html' não tem a classe 'dark'
    }
    
    return (
        <div className="flex justify-end">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
                <i className="fas fa-moon text-gray-600 dark:hidden group-hover:text-blue-600 transition-colors"></i>

                <i className="fas fa-sun text-yellow-400 hidden dark:block group-hover:text-yellow-300 transition-colors"></i>
            </button>
        </div>
    )
}

export default ThemeToggle