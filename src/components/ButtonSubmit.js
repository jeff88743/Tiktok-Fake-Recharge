export default function ButtonSubmit({submit, onClick, children}) {
	return (
		<button 
			disabled={submit} 
			onClick={onClick} 
			className={'text-white font-bold px-16 p-3 rounded-[4px] w-52 ' + (submit ? ('bg-zinc-100') : ('bg-[#fe2c55]'))}
		>
			{submit ? <span className='loading loading-spinner loading-xs text-zinc-400'></span> : <span>{children}</span>}
		</button>
	)
}