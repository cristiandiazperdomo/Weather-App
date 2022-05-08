import '../styles/components/Input.css';

export const Input = ({ setLocation, className }) => {
	return (
		<input type="text" placeholder="Ingresa aquí tu país o ciudad" className={className} onChange={e => setLocation(e.target.value)}/>
	)
}