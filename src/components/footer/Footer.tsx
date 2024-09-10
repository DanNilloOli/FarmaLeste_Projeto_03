import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-red-800 text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>FarmaLeste Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4 mt-2'>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <LinkedinLogo size={48} weight='bold' className="text-white hover:text-red-300 transition duration-200" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <InstagramLogo size={48} weight='bold' className="text-white hover:text-red-300 transition duration-200" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <FacebookLogo size={48} weight='bold' className="text-white hover:text-red-300 transition duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer