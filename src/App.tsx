import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import ThingsWeDo from "./components/ThingsWeDo";

function App() {
  return (
    <main className={styles.app}>
      <Navbar />
      <Highlights />
      <ThingsWeDo />
      <LatestNews />
      <Footer />
    </main>
  );
}

export default App;
