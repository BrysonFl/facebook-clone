import logo from '../assets/facebook.svg'
import search from '../assets/search.svg'
import home from '../assets/home.svg'
import videos from '../assets/videos.svg'
import marketplace from '../assets/marketplace.svg'
import games from '../assets/games.svg'

import options from '../assets/options.svg'
import messages from '../assets/messages.svg'
import notifications from '../assets/notifications.svg'

import { Link, NavLink } from 'react-router';

export const Header = () => {
  const applyStyleActiveLink = (isActive: boolean) => {
    return isActive ? 'h-full w-full flex justify-center items-center rounded-lg bg-[#414142]' : 'h-full w-full flex justify-center items-center'
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
          <label className='flex bg-[#333334] rounded-3xl justify-center items-center gap-x-1'>
            <span className='pl-4'>
              <figure className='h-[16px] w-[16px]'>
                <img className='' src={ search } alt="Search" />
              </figure>
            </span>
            <input className='border-none outline-0 text-[#E2E5E9] pt-[7px] px-2 pb-[9px] placeholder:text-[#E2E5E9] placeholder:font-thin placeholder:text-sm'
              type="text" placeholder='Buscar en Facebook' />
          </label>
        </div>
      </div>
      <div className='h-full'>
        <ul className='flex h-full'>
          <li className='min-w-[112px] p-1'>
            <NavLink to='/' className={({ isActive }) => applyStyleActiveLink(isActive)}>
              <figure className='h-6 w-6'>
                <img src={ home } className='w-full h-full' alt="" />
              </figure>
            </NavLink>
          </li>
          <li className='min-w-[112px] p-1 group'>
            <NavLink to='videos' className={({ isActive }) => applyStyleActiveLink(isActive)}>
              <figure className='h-6 w-6'>
                <img src={ videos } className='w-full h-full' alt="" />
              </figure>
            </NavLink>
          </li>
          <li className='min-w-[112px]'>
            <NavLink to='marketplace' className={({ isActive }) => applyStyleActiveLink(isActive)}>
              <figure className='h-6 w-6'>
                <img src={ marketplace } className='w-full h-full' alt="" />
              </figure>
            </NavLink>
          </li>
          <li className='min-w-[112px] h-full p-1'>
            <NavLink to='games' className={({ isActive }) => applyStyleActiveLink(isActive)}>
              <figure className='h-6 w-6'>
                <img src={ games } className='w-full h-full' alt="" />
              </figure>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='pr-4'>
        <ul className='flex gap-x-2'>
          <li className='w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,.1)]'>
            <Link to=''>
              <img src={ options } alt="" />
            </Link>
          </li>
          <li className='w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,.1)]'>
            <Link to=''>
              <img src={ messages } alt="" />
            </Link>
          </li>
          <li className='w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,.1)]'>
            <Link to=''>
              <img src={ notifications } alt="" />
            </Link>
          </li>
          <li className='w-10 h-10 flex items-center justify-center bg-amber-50 rounded-full'>
            <Link to=''></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}