import equilibrium from '../../assets/image-equilibrium.jpg'
import avatar from '../../assets/image-avatar.png'
import IconeClock from '../../assets/icon-clock.svg'
import IconeEthereum from '../../assets/icon-ethereum.svg'
import IconeView from '../../assets/icon-view.svg'

export default function Home() {
    return (
        <div className='w-80 h-[542px] mx-auto my-5 p-6 bg-[#14253d] text-white rounded-xl'>
            <div className='group/img'>
                <div className='relative w-[272px] h-[272px] '>
                    <img src={equilibrium} alt='Equilibrium' className='rounded-xl' />
                    <div className='hidden absolute rounded-xl inset-0 group-hover/img:block cursor-pointer duration-300 w-full h-full'>
                        <div className='bg-[#00fff7] w-full h-full rounded-xl opacity-50'></div>
                        <img src={IconeView} className='absolute right-[40%] top-[41%] group-hover/img:opacity-100' />
                    </div>

                </div>

                <div className=' cursor-default'>
                    <h1 className='font-bold my-3 mt-4 text-2xl group-hover/img:text-[#00fff7] cursor-pointer'>Equilibrium #3429</h1>
                    <p className='font-extralight'>Our Equilibrium collection promotes balance and calm.</p>
                    <div className="flex flex-row justify-between my-3 mb-5">
                        <div className='flex flex-row items-center'>
                            <img src={IconeEthereum} className='' />
                            <p className='font-bold ml-2 text-[#00fff7]'>0.041ETH</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={IconeClock} />
                            <p className='font-light ml-2 text-[#8bacda]'>3 days left</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700' />

            <div className='flex flex-row mt-5 items-center'>
                <div className='w-[33px] border rounded-2xl'>
                    <img src={avatar} />
                </div>
                <div>
                    <p className='font-extralight ml-5 cursor-default'>Creation of <strong className='hover:text-[#00fff7] cursor-pointer'>Jules Wyvern</strong></p>
                </div>
            </div>
        </div>
    )
}