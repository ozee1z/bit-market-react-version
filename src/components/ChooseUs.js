import mobileImage from '../img/mobile.png';
import saleImage from '../img/sale.png';
import walletImage from '../img/wallet.png';

export default function ChooseUs () {
    return (
        
      <div className="container chooseUs-section" id="section3" style={{marginTop: '100px'}}>
        <h2 className="fw-bold text-center">Become a crypto trader in seconds</h2>
        <p className="text-center mt-3 fw-medium">Discover how specific crytocurrencies work and get a bit<br /> of each crypto to try out for yourself</p>

       
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4 cryptoTrade">
                <div className="col text-center">
                  <div className="card cardborder" style={{height:'300px',width:'300px'}}>
                    <div className="d-flex justify-content-center mt-5">
                        <img src={saleImage} className="card-img-top" alt="sale" style={{width:'50px', height:'50px'}} />
                    </div>
                    
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Buy & Sell Crypto</h5>
                      <p className="card-text">Buy and sell digital currencies keep<br /> track of them in the one place</p>
                      <a href="#buyCrypto" className="btn btn-outline-primary mt-3">Buy crypto</a>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div className="card cardborder" style={{height:'300px',width:'300px'}}>
                    <div className="d-flex justify-content-center mt-5">
                        <img src={walletImage} className="card-img-top" alt="sale" style={{width:'50px', height:'50px'}} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Recurring Buys</h5>
                      <p className="card-text">Invest in cryptocurrency scheduling<br /> buys daily, weekly or monthly</p>
                      <a href="#buyCrypto" className="btn btn-outline-primary mt-3">Buy crypto</a>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div className="card cardborder" style={{height:'300px',width:'300px'}}>
                    <div className="d-flex justify-content-center mt-5">
                        <img src={mobileImage} className="card-img-top" alt="sale" style={{width:'50px', height:'50px' }}/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Mobile Apps</h5>
                      <p className="card-text">Stay on top of the market with the<br /> bit market app on android or IOS.</p>
                      <a href="#buyCrypto" className="btn btn-outline-primary mt-3">Buy crypto</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

    )
}