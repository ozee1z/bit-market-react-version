import btcimage from '../img/btc-img.png'
import { ArrowRight } from 'react-bootstrap-icons';



export function App() {
  return <ArrowRight />;
}

export default function HeroSection () {
    return (
        <div className="container hero-section d-flex justify-content-between" id="section1" style={{marginTop: '100px'}}>
        <div>
            <a href="#" className="link-underline link-underline-opacity-0 link-opacity-100-hover"><i className="bi bi-currency-bitcoin border border-primary rounded-circle bg-primary text-white me-2"></i>Start your portfolio<i className="ms-2" ></i><ArrowRight/></a>
            <div className="mt-3">
                <h1 className="fw-bold lh-base">Buy, Sell and Trade<br /> Your Cryto</h1>
                <p className="fw-semibold lh-base">Bit market is the easiest place to buy and sell<br /> cryptocurrency. Sign up and get started today.</p>
                <button className="btn btn-primary mt-5 btn-lg">Get Started</button>
            </div>

        </div>
        <div>
            <img src={btcimage} alt="bitcoin" className="btc-img img-fluid" style={{width: '420px'}} />
        </div>
      </div>
    )
}