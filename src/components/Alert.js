import '../styles/components/Alert.css';

export const Alert = ({ closeModal }) => {
	return (
		<div className="alert-something-happen">
			<div className="modal-alert">
				<header className="modal-header">
					<img src="https://img.icons8.com/material-outlined/344/delete-sign.png" alt="close" id="close-modal" onClick={() => closeModal()}/>
					<img src={require('../img/icons-geography.png')} alt="Don't founded." className="modal-header-image"/>
				</header>
				<article className="modal-body">
					<h3>Tú país no fue encontrado</h3>
					<p>Verifica haberlo escrito correctamente.</p>
				</article>
			</div>
		</div>
	)
}