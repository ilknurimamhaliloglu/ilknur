import './style.css';
import { FiChevronRight } from 'react-icons/fi';
import image from '../../images/firstdiv1.jpg';
function FirstDiv() {
	return (
		<div className='First-App'>
			<div className='First-Div'>
				<p className='First-Div-p1'>iPhone 12 Pro </p>
				<p className='First-Div-p2'>İkonik yenilik.</p>
				<div className='link-container'>
					<a className='link' href='http://localhost:3000/'>
						Daha fazla bilgi
						<FiChevronRight size='20px' />
					</a>
					<a className='link' href='http://localhost:3000/'>
						Satın al
						<FiChevronRight size='20px' />
					</a>
				</div>
				<img src={image} className={'Image'} />
				<div className='bottom-container'>
					<p className='bottom-p1'>iPhone 12 Pro Max</p>
					<p className='bottom-p2'>18 Aralık'ta ön siparişte.</p>
					<p className='bottom-p2'>23 Aralık'ta satışta.</p>
				</div>
			</div>
		</div>
	);
}

export default FirstDiv;
