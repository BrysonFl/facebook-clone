import React, { useState } from 'react'
import logo from '../assets/facebook.svg'
import search from '../assets/search.svg'
import { Link } from 'react-router';

export const Header = () => {
  const [value, setValue] = useState<string>('');

  const onChangedInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <header className='bg-[#252728] flex justify-between items-center w-full h-14'>
      <div className='flex items-center gap-x-1 px-4'>
        <div className='w-[40px] h-[40px]'>
          <Link to="/">
            <img className='w-full h-full object-cover' src={ logo } alt="" />
          </Link>
        </div>
        <div>
          <label className='flex p-1 bg-[#333334] rounded-2xl justify-center items-center gap-x-1'>
            <figure className='h-[16px] w-[16px]'>
              <img className='' src={ search } alt="Search" />
            </figure>
            <input className='border-none outline-0 text-white' type="text" onChange={ onChangedInput } placeholder='Buscar en Facebook' />
            { value }
          </label>
        </div>
      </div>
      <div></div>
      <div></div>
    </header>
  )
}