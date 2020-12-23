import './style.css';
import Header from '../../components/Header/Header';
import image from '../../images/about.png';
import { Table } from 'react-bootstrap';
function About() {
	return (
		<div className='About-App'>
			<div className='About-Header'>
				<div>HAKKIMDA</div>
			</div>
			<div className='About-Container'>
				<img src={image} className={'About-Image'} />
				<div className='About-Container-Text'>
					<p className='About-p1'>Ben İlknur İMAMHALİLOĞLU. </p>
					<p className='About-p1'>
						Erciyes Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web ve mobil uygulama üzerine
						çalışmalarda bulunmaktayım. Görüntü işleme ve yapay zekâ üzerine TÜBİTAK projeleri geliştirmekteyim. Aşağıda
						proje, yarışmalarım ve proje geliştirmekte olduğum alanlar yer almaktadır.{' '}
					</p>
					<li>
						TÜBİTAK 2209-A 2019/2 - BİREYLERDEKİ DENGE BOZUKLUĞUNU, FİZYOLOJİK PARAMETRELER ve HİGROMETRİK KOŞULLARIN
						ETKİSİYLE TAKİP EDEBİLEN IoT TABANLI VERİ MADENCİLİĞİ SİSTEMİ (Destekleniyor)
					</li>
					<li>
						{' '}
						TÜBİTAK 2242 ve 2020/1 - BİLGİSAYARLI GÖRÜ İLE VÜCUT DIŞ ORGANLARININ TESPİT EDİLMESİ (2242 Bölge Sergisi){' '}
					</li>
					<li>
						TEKNOFEST İnsanlık Yararına Teknoloji Kategorisi - Yapay Zekâ Tabanlı Yük Asansörü Kontrol ve Uyarı Sistemi
					</li>
					<li> TEKNOFEST Tarım Teknolojileri Kategorisi - Zirai Ürünler Tanıma ve Tavsiye Sistemi</li>
					<li>TEKNOFEST Eğitim Teknolojileri Kategorisi - Bilgisayarlı Görü Tabanlı Öğrenci Yoklama Sistemi</li>
					<div className='About-Container'>
						<div className='About-Container-2'>
							<p className='About-p1'>Web Programlama</p>
							<li>HTML&CSS</li>
							<li>JavaScript</li>
							<li>Bootstrap</li>
							<li>PHP</li>
							<li>React</li>
						</div>
						<div className='About-Container2'>
							<p className='About-p1'> Mobil Programlama</p>
							<li>React Native</li>
						</div>
						<div className='About-Container2'>
							<p className='About-p1'> Veri Tabanı</p>
							<li>MsSQL</li>
							<li>MySQL</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
