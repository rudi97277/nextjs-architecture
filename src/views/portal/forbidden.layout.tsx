import Image from 'next/image';

export function ForbiddenPage(): React.JSX.Element {
  return (
    <div className='flex flex-col justify-center items-center gap-4 h-full mt-[-56px] '>
      <Image alt="acces blocked" src={'image'} />
      <p className='text-black font-medium text-[22px]'>Sorry, you don’t have permission to access this feature.</p>
    </div>
  )
}