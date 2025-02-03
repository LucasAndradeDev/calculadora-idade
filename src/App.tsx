import Card from "./components/card"
import ThemeToggle from "./components/themeToggle"
import Footer from "./components/footer"

function App() {

  return (
    <body className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full space-y-4">
        <ThemeToggle />
        <Card />
        <Footer/>
      </div>
    </body>

  )
}

export default App
