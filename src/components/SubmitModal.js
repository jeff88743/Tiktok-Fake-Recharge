import { useEffect, useState } from 'react';

function PaymentSuccessfuly({ coin }) {
	return (
		<form method="dialog" class="modal-box p-0 w-6/12 h-4/6 max-w-3xl">
			<div className='flex justify-end p-6'>
				<button class="text-xl font-bold">✕</button>
			</div>
			<div className='flex flex-col justify-center items-center mt-20 p-6 text-center'>
				<div className='mb-6 flex flex-col justify-center items-center bg-green-100 rounded-full w-20 h-20'>
					<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
				</div>
				<span className="mb-3 text-3xl font-semibold">Pembayaran selesai</span>
				<span className="text-lg">Anda mengisi ulang {coin} koin. Anda dapat menggunakan koin untuk mengirim hadiah virtual</span>
			</div>
		</form>
	)
}

function ProcessingPayment({ setStep }) {

	const [minutes, setMinutes] = useState(4);
	const [seconds, setSeconds] = useState(59);
	const [countdown, setCountdown] = useState(Math.floor(Math.random() * (8 - 2 + 1)) + 2)

	useEffect(() => {
		const interval = setInterval(() => {

			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}

			if (seconds < 60 - countdown && minutes === 4) {
				setStep(2);
			}

		}, 1000);
		return () => clearInterval(interval);
	}, [seconds]);

	return (
		<form method="dialog" class="modal-box p-0 w-6/12 h-4/6 max-w-3xl divide-y">
			<div className='flex flex-col justify-center items-center h-full p-6'>
				<span className="mb-6 loading loading-spinner w-16 bg-[#fe2c55]"></span>
				<span className="mb-3 text-3xl font-semibold">Memproses pembayaran anda</span>
				<span className="mb-16 text-xl">Ini bisa memakan waktu beberapa detik</span>
				<span className='mb-20 text-xl'>0{minutes}:{seconds}</span>
			</div>
		</form>
	)
}

function PaymentDetails({ user, coin, price, step, setStep }) {

	return (
		<form method="dialog" class="modal-box p-0 w-9/12 max-w-4xl divide-y">
			<div className='flex justify-between p-6'>
				<span className='font-bold text-2xl'>Ringkasan Pesanan</span>
				<button class="text-xl font-bold">✕</button>
			</div>
			<div className='divide-y px-6'>
				<div className='flex justify-between py-6 text-xl font-bold'>
				<span>Akun</span>
				<span>{  user }</span>
				</div>
				<div className='py-3'>
				<div className='flex justify-between'>
					<span>{coin} Koin</span>
					<span>Rp. {price}</span>
				</div>
				<div className='flex justify-between text-lg font-bold'>
					<span>Total</span>
					<span>Rp. {price} </span>
				</div>
				</div>
				<div className='py-3'>
				<div className='flex justify-between mb-2'>
					<span>Pilih metode pembayaran</span>
					<span className='text-[#fe2c55] font-semibold'>Kelola</span>
				</div>
				<div className='flex justify-between text-lg font-bold mb-2'>
					<span>ShoopePay 6284XXXXXXXXX</span>
					<span>Rp. {price} </span>
				</div>
				<span class="text-sm">Mengeklik "Bayar Sekarang" berarti Anda menyetujui <b>Ketentuan Pembelian Koin</b>. 
					Dengan menggunakan jumlah Koin dalam <span>14</span> hari setelah mengeklik "Bayar Sekarang", Anda menyetujui dan menegaskan bahwa Anda tidak akan lagi memenuhi syarat untuk mendapatkan pengembalian uang atas pesanan ini. Transaksi pembayaran diproses oleh PIPO. <b>Kebijakan Privasi PIPO</b>
					<div class="tiktok-l41yxy-DivRegionChangeText epvo4198 mt-2">Dengan melanjutkan pembelian ini, Anda mengonfirmasi bahwa Anda tinggal di <b>Indonesia</b>.</div>
				</span>
				</div>
				<div className='flex justify-end py-6 font-bold'>
					<div onClick={() => setStep(1)} className='text-white cursor-pointer font-bold p-2 px-3 rounded-[4px] bg-[#fe2c55]'>Bayar Sekarang</div>
				</div>
			</div>
		</form>
	)
}

export default function SubmitModal({user, coin, price, submit}) {

	const [step, setStep] = useState(0);

	useEffect(() => {
		setStep(0);
	}, [submit]);

	return (
		<dialog id="paymentDetails" class="modal">
			{ 
				(() => {
					switch (step) {
						case 0:
							return <PaymentDetails user={user} coin={coin} price={price} step={step} setStep={setStep} />
						case 1:
							return <ProcessingPayment setStep={setStep} />
						case 2:
							return <PaymentSuccessfuly coin={coin} />
						default:
							<PaymentDetails user={user} coin={coin} price={price} setStep={setStep} />
					}
				})()
			}
		</dialog>
	)
}