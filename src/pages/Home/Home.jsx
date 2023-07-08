import Header from './components/Header';
import ContainerResult from './components/ContainerResult';
import Logo from './components/Logo';
import TextIntro from './components/TextIntro';
import Footer from './components/Footer';

function Home() {
    console.log('Home');
    return (
        <div className="wrapper">
            <Header />
            <ContainerResult />
            <Logo />
            <TextIntro />
            <Footer />
        </div>
    );
}

export default Home;
