const useSleep = ms => new Promise(
	resolve => setTimeout(resolve, ms)
);

export default useSleep;