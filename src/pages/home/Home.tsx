function Home() {
    return (
        <>
            <div className="bg-gradient-to-b from-red-700 to-red-900 flex justify-center">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h1 className="text-6xl font-extrabold tracking-wide text-yellow-300 drop-shadow-lg uppercase">
                            FARMA LESTE
                        </h1>
                        <br />
                        <h2 className='font-bold text-5xl'>
                            Seja bem-vindo!
                        </h2>
                        <p className='text-xl'>Saúde à um clique de distância!!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 border-white bg-red-800 px-4 py-2 rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://i.postimg.cc/BQTxjX81/pharmacy-shopping-cart-icon-by-Vexels.png"
                            alt="Imagem Página Home"
                            className="w-3/4 h-92 rounded-full object-cover mb-6"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;