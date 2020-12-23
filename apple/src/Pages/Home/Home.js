import './style.css';
import Header from '../../components/Header/Header';
import FirstDiv from '../../components/FirstDiv/FirstDiv';
import SecondDiv from '../../components/SecondDiv/SecondDiv';
import Footer from '../../components/Footer/Footer';

function Home() {
	return (
		<div className='App'>
			<Header />
			<FirstDiv />
			<SecondDiv />
			<Footer />
		</div>
	);
}

export default Home;
