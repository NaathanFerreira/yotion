import './styles/global.css'

import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

export function App() {
  return (
    <div className="h-screen w-screen bg-yotion-900 text-yotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center text-yotion-400">
          Selecione ou crie um documento
        </main>
      </div>
    </div>
  )
}
