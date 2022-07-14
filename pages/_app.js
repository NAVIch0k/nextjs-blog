import { wrapper } from "../store/store";
import style from '../styles/global.css'

const WrappedApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
