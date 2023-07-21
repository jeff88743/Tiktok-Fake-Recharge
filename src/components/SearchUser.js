import { useState, useRef } from 'react';

export default function SearchUser({ setUser }) {
	
	const [userTarget, setUserTarget] = useState();
	const userSearchInput = useRef(null);
	const userDropdownContent = useRef();
	const dropdownOnFocus = () => {
		setTimeout(() => {
		  userDropdownContent.current.classList.remove('hidden');
		}, 2000);
	}
	const dropdownOnBlur = () => { 
		setTimeout(() => {
			userDropdownContent.current.classList.add('hidden');
		}, 1000)
	}
	
	return (
		<div className='dropdown dropdown-open'>
			<div className="bg-zinc-100 px-5 flex w-fit mt-6" >
			<input ref={userSearchInput} value={userTarget} onFocus={dropdownOnFocus} onBlur={dropdownOnBlur} on  onChange={(e) => setUserTarget(e.target.value)} className="bg-zinc-100 py-2.5 focus:outline-none placeholder-zinc-400" placeholder="Cari" />
			<button onClick={(e) => setUserTarget("")} tabIndex={0} className="border-l-zinc-300 my-2 pl-3">
				<svg width="16" data-e2e="" height="16" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"></path></svg>
			</button>
			</div>
			<ul ref={userDropdownContent} tabIndex={0} className="dropdown-content hidden mt-2 z-[1] px-3 py-3 hover:bg-zinc-100 shadow bg-base-100 rounded-md w-full">
			<li>
				<button onClick={(e) => setUser(userTarget)} className='flex w-full justify-self-start font-semibold'>{ userTarget }</button>
			</li>
			</ul>
		</div>
	)
}