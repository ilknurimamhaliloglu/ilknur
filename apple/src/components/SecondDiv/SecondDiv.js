import './style.css';
import { FiChevronRight } from 'react-icons/fi';
import image from '../../images/seconddiv1.jpg';

function SecondDiv() {
	return (
		<div className='Second-App'>
			<div className='Second-Div'>
				<p className='Second-Div-p1'>iPhone 12 </p>
				<p className='Second-Div-p2'>Hızını anlatmaya kelimeler yetişemez.</p>
				<div className='link-container'>
					<a className='link2' href='http://localhost:3000/'>
						Daha fazla bilgi
						<FiChevronRight size='20px' />
					</a>
					<a className='link2' href='http://localhost:3000/'>
						Satın al
						<FiChevronRight size='20px' />
					</a>
				</div>
				<img src={image} className={'Image2'} />
				<p className='second-bottom-p1'>iPhone 12 Mini</p>
				<p className='second-bottom-p2'>18 Aralık'ta ön siparişte.</p>
				<p className='second-bottom-p2'>23 Aralık'ta satışta.</p>
			</div>
		</div>
	);
}

export default SecondDiv;
