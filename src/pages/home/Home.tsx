
function Home() {
    return (
        <>
            <div className="bg-gradient-to-b from-rose-800 to-rose-900 flex justify-center">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Seja bem-vinde!
                        </h2>
                        <p className='text-xl'>Seu bem-estar é a nossa receita diária!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-rose-900 px-4 py-2 border-solid rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/e5otp0bxb/gif%20farmacia.gif?updatedAt=1725459561149"
                            alt="Imagem Página Home"
                            className="w-3/4 h-92 rounded-full object-cover mb-6"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home