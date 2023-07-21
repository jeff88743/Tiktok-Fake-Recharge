import { useEffect, useState, useRef } from 'react';
import usePriceFormat from '../hooks/usePriceFormat';

function CoinVariant({ price, subprice, onClick, isActive, isSubmit, activeIndex, setCoin, setPrice }) {

	const [coin, thisSetCoin] = useState(0);
	const thisPrice = usePriceFormat(coin * 17);

	return (
		<button 
			disabled={isSubmit} 
			onClick={onClick} 
			className={"block justify-center w-full rounded-[4px] py-[0.90rem] border-spacing-56 " 
					+ (isSubmit ? " opacity-40 " : "opacity-100") 
					+ (isActive ? (" border-yellow-400 border border-solid ") : (" border-zinc-400 border "))} 
		>
			<div className='flex justify-center gap-1.5 mb-1'>
				<svg class="mt-1" width="2em" data-e2e="" height="2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle><circle cx="24" cy="24" r="17" fill="#FACE15"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z" fill="#FABC15"></path><path d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z" fill="#FEF5CD"></path></svg> 
				{
					(activeIndex === 7) 
					? <input onChange={(e) => {setCoin(e.target.value); thisSetCoin(e.target.value); setPrice(coin * 170) }} className='outline-none border-b border-black w-32 text-2xl text-center'></input>
					: <h3 className='font-bold text-2xl'>{price}</h3>
				}
			</div>
			{
				(activeIndex === 7)
				? <p className='text-zinc-400 font-semibold text-sm'>{thisPrice}</p>
				: <p className='text-zinc-400 font-semibold text-sm'>{subprice}</p>
			}
		</button>
	)
}

export default function GridCoinVariant({ setCoin, setPrice, isSubmit }) {

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<ul className='grid grid-cols-4 gap-y-6 gap-x-24'>
			<li className='col-span-1'>
				<CoinVariant 
					id="1"  
					price="70" 
					subprice={usePriceFormat(11900)} 
					isSubmit={isSubmit} 
					isActive={activeIndex === 0} 
					onClick={() => {setActiveIndex(0); setPrice(11900); setCoin(70)}} 
				/>
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="2" 
					price="350" 
					subprice={usePriceFormat(59500)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 1} 
					onClick={() => {setActiveIndex(1); setPrice(59500); setCoin(350)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="3" 
					price="700" 
					subprice={usePriceFormat(119000)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 2} 
					onClick={() => {setActiveIndex(2); setPrice(119000); setCoin(700)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="4" price="1,400" 
					subprice={usePriceFormat(238000)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 3} 
					onClick={() => {setActiveIndex(3); setPrice(238000); setCoin(1400)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="5" price="3,500" 
					subprice={usePriceFormat(595000)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 4} 
					onClick={() => {setActiveIndex(4); setPrice(595000); setCoin(3500)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="6" 
					price="7,000" 
					subprice={usePriceFormat(1190000)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 5} 
					onClick={() => {setActiveIndex(5); setPrice(1190000); setCoin(7000)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="7" 
					price="17,500" 
					subprice={usePriceFormat(2975000)}
					isSubmit={isSubmit} 
					isActive={activeIndex === 6} 
					onClick={() => {setActiveIndex(6); setPrice(2975000); setCoin(17500)}} />
			</li>
			<li className='col-span-1'>
				<CoinVariant 
					id="8" 
					price="Khusus" 
					subprice="Mendukung jumlah besar" 
					isSubmit={isSubmit} 
					isActive={activeIndex === 7}
					activeIndex={activeIndex}
					setCoin={setCoin}
					setPrice={setPrice}
					onClick={() => setActiveIndex(7)} />
			</li>
		</ul>
	)
}