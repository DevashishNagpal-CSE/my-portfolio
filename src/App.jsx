import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project'; // Import Project component
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498]">
            <Header />
            
            <div id="home" className="section h-screen px-8 md:px-14 lg:px-36 pb-10 pt-7">
                <Hero />
            </div>

            <div id="about" className="section h-screen px-8 md:px-14 lg:px-36 pb-10 pt-7">
                <About />
            </div>

            <div id="projects" className="section h-screen px-8 md:px-14 lg:px-36 pb-10 pt-7">
                <Project /> 
            </div>

            <div id="contact" className="section h-screen px-8 md:px-14 lg:px-36 pb-10 pt-7">
                <Contact />
            </div>

            <Footer />
        </div>
    );
}

export default App;
