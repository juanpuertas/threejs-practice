// pages/_app.js
import '../styles/style.css'; // Importa el archivo CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
