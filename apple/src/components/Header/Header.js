import './style.css';
import { FiSearch } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='App-header' id='myHeader'>
			<div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
				<a className='App-header-icon' href='https://www.apple.com/tr/'>
					<FaApple size='20px' />
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					Mac{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					iPad{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					iPhone{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					Watch{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					TV{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					Music{' '}
				</a>
				<a className='App-header-button' href='http://localhost:3000/'>
					{' '}
					Destek{' '}
				</a>
				<a className='App-header-icon' href='http://localhost:3000/'>
					<FiSearch size='20px' />
				</a>
				<a className='App-header-icon' href='http://localhost:3000/'>
					<BsBag size='20px' />
				</a>
				<Link className='App-header-button' to='/about'>
					{' '}
					ÖZGEÇMİŞ{' '}
				</Link>
			</div>
		</header>
	);
}

export default Header;
