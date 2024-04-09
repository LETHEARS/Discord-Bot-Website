import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Kanka Yanlış Geldin Sanırım.',
        'BU Web-sitesi Kapanmış Veya Bağlantı Adresini Yanlış Yazdın..',
        'Yolunu mu kaybettin; Ah Sana Vah Sana'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

