
export default function PriceFormatter({children}) {
	let Rupiah = new Intl.NumberFormat('id_ID', {
		style: 'Currency', 
		currency: 'IDR',
	});

	return (
		<>
			{Rupiah.format({children})}
		</>
	)
}