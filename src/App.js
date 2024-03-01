import './App.scss';
import EVs from './components/EVs/EVs';
import Explore from './components/Explore/Explore';
import FeedBack from './components/FeedBack/FeedBack';
import Footer from './components/Footer/Footer';
import Main1 from './components/Main1/Main1';
import Main1Footer from './components/Main1_footer/Main1Footer';
import Main2 from './components/Main2/Main2';
import OurServer from './components/OurServer/OurServer';

function App() {
    return (
        <div className="App">
            <Main1 />
            <Main1Footer />
            <Main2 />
            <Explore />
            <OurServer />
            <EVs />
            <FeedBack />
            <Footer />
        </div>
    );
}

export default App;
