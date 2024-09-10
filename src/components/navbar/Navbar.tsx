import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className="w-full bg-red-800 text-white flex justify-center py-4">
            <div className="flex justify-between text-lg container">
                <Link to='/home'>
                    <img
                        src="https://i.postimg.cc/wMc7jRWq/heart-medical-care-black-and-white-icon-by-Vexels.png"
                        alt="Logo"
                        className="w-62 h-20 object-cover"
                    />
                </Link>

                <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input 
                            className="px-4 py-4 rounded-lg w-10/12 h-9 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-red-700 hover:bg-red-900 p-2.5 border border-red-900 rounded-lg focus:ring-4 focus:ring-red-600 w-9 h-9 font-medium text-sm text-white ms-2 focus:outline-none">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-4 py-4'>
                    <div className='hover:underline'>Produtos</div>
                    <div className='hover:underline'>Categorias</div>
                    <div className='hover:underline'>Cadastrar Categoria</div>
                    <User size={32} weight='bold' className="text-white" />
                    <ShoppingCart size={32} weight='bold' className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Navbar