import './App.scss';
import EVs from './components/EVs/EVs';
import Explore from './components/Explore/Explore';
import FeedBack from './components/FeedBack/FeedBack';
import Footer from './components/Footer/Footer';
import Main1 from './components/Main1/Main1';
import Main1_footer from './components/Main1_footer/Main1_footer';
import Main2 from './components/Main2/Main2';
import Navbar from './components/Navbar/Navbar';
import OurServer from './components/OurServer/OurServer';

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Main1 />
            <Main1_footer />
            <Main2 />
            <Explore />
            <OurServer />
            {/* <EVs /> */}
            {/* <FeedBack /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
