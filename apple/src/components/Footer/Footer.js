import './style.css';

function Footer() {
	return (
		<div className='Footer-App'>
			<div className='Footer-Div-container'>
				<div className='Footer-Div'>
					<div className='Footer-Div1'>
						<p className='Footer-Div-p1'>Alışveriş ve Detaylı Bilgi</p>
						<p className='Footer-Div-p2'>Mac</p>
						<p className='Footer-Div-p2'>iPad</p>
						<p className='Footer-Div-p2'>iPhone</p>
						<p className='Footer-Div-p2'>Watch</p>
						<p className='Footer-Div-p2'>TV</p>
						<p className='Footer-Div-p2'>Music</p>
						<p className='Footer-Div-p2'>AirPods</p>
						<p className='Footer-Div-p2'>iPod touch</p>
						<p className='Footer-Div-p2'>Aksesuarlar</p>
					</div>
					<div className='Footer-Div2'>
						<p className='Footer-Div-p1'>Servisler</p>
						<p className='Footer-Div-p2'>Apple Music</p>
						<p className='Footer-Div-p2'>Apple Arcade</p>
						<p className='Footer-Div-p2'>iCloud</p>
						<p className='Footer-Div-p2'>Apple Books</p>
						<p className='Footer-Div-p1'>Hesap</p>
						<p className='Footer-Div-p2'>Apple ID’nizi Yönetin</p>
						<p className='Footer-Div-p2'>Apple Store Hesabı</p>
						<p className='Footer-Div-p2'>iCloud.com</p>
					</div>
					<div className='Footer-Div3'>
						<p className='Footer-Div-p1'>Apple Store</p>
						<p className='Footer-Div-p2'>Mağaza Bulun</p>
						<p className='Footer-Div-p2'>Online Alışveriş Yapın</p>
						<p className='Footer-Div-p2'>Genius Bar</p>
						<p className='Footer-Div-p2'>Today at Apple</p>
						<p className='Footer-Div-p2'>Apple Yaz Kampı</p>
						<p className='Footer-Div-p2'>Apple Store Uygulaması</p>
						<p className='Footer-Div-p2'>Ödeme Kolaylıkları</p>
						<p className='Footer-Div-p2'>Apple Geri Dönüşüm Programı</p>
						<p className='Footer-Div-p2'>Sipariş Durumu</p>
						<p className='Footer-Div-p2'>Alışveriş Yardımı</p>
					</div>
					<div className='Footer-Div4'>
						<p className='Footer-Div-p1'>Kurumsal Müşteriler İçin</p>
						<p className='Footer-Div-p2'>Apple ve İş Dünyası</p>
						<p className='Footer-Div-p2'>Şirketiniz için Alışveriş Yapın</p>
						<p className='Footer-Div-p1'>Eğitim İçin</p>
						<p className='Footer-Div-p2'>Apple ve Eğitim</p>
						<p className='Footer-Div-p2'>K-12 için Alışveriş Yapın</p>
						<p className='Footer-Div-p2'>Üniversite için Alışveriş Yapın</p>
					</div>

					<div className='Footer-Div5'>
						<p className='Footer-Div-p1'>Apple’ın Değerleri</p>
						<p className='Footer-Div-p2'>Erişilebilirlik</p>
						<p className='Footer-Div-p2'>Çevre</p>
						<p className='Footer-Div-p2'>Gizlilik</p>
						<p className='Footer-Div-p2'>Tedarikçi Sorumluluğu</p>
						<p className='Footer-Div-p1'>Apple Hakkında</p>
						<p className='Footer-Div-p2'>Newsroom</p>
						<p className='Footer-Div-p2'>Apple Yönetimi</p>
						<p className='Footer-Div-p2'>İş Fırsatları</p>
						<p className='Footer-Div-p2'>Garanti</p>
						<p className='Footer-Div-p2'>Etkinlikler</p>
						<p className='Footer-Div-p2'>Apple ile İletişim</p>
					</div>
				</div>
				<div className='footer-sub'>
					<div className='Footer-Div-p3'>
						<p>
							Diğer alışveriş seçenekleri: Yakınınızda{' '}
							<a className='footer-link' href='http://localhost:3000/'>
								bir Apple Store
							</a>{' '}
							veya{' '}
							<a className='footer-link' href='http://localhost:3000/'>
								başka bir yetkili satıcı
							</a>{' '}
							bulun. Veya 00800 448 829 873 ya da 0216 282 15 11 numaralı telefonu arayın.
						</p>
					</div>
					<hr className='hr' />
					<div className='Footer-Div-p3'>Telif Hakkı © 2020 Apple Inc. Tüm hakları saklıdır.</div>
					<div className='Footer-Div-p2'>
						Gizlilik Politikası | Çerezlerin Kullanımı | Kullanım Şartları | Satış ve Para İadesi | Yasal Bilgiler |
						Site Haritası | Bilgi Toplumu Hizmetleri
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
