import LogoImg from '../assets/images/mascot.png'

export const Logo = () => {
  return (
    <div className='cursor-pointer relative flex font-DrukCondTrial text-6xl text-[#3E404B]'>
      <p className='mr-8'>Alaska</p> <p> Pete's</p>
      <div className='absolute w-full h-full justify-center flex'>
        <img src={LogoImg} className='ml-1' />
      </div>
    </div>
  )
}

