import { NavLink } from "@/components/NavLink"

export default function Page() {
  return (
    <div>
      <h1 className='font-berkeley-mono-black text-7xl text-green-400'>007 Welcome to my corner of the internet!</h1>
      <ul>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink href='/resume'>Contact</NavLink>
        </li>
        <li>
          <NavLink href='/resume'>Github</NavLink>
        </li>
        <li>
          <NavLink href='/resume'>Email</NavLink>
        </li>
        <li>
          <NavLink href='/resume'>LinkedIn</NavLink>
        </li>
      </ul>
    </div>
  )
}
