export default async function (...args: [string]) {
	const res = await fetch(...args)
	return await res.json()
}
