export default function FooterSection () {
    return (
        <div className="container footer-section d-flex justify-content-between" style={{marginTop: '200px'}}>
        <div className="mb-5">
            <h4 className="text-primary">BitMarket</h4>
            <p>We're a security company above<br /> all else. Our secure core servers<br />operate</p>
            <div className="text-primary">
                <i className="bi bi-facebook me-2"></i>
                <i className="bi bi-twitter me-2"></i>
                <i className="bi bi-youtube me-2"></i>
            </div>
        </div>
        <div className="mb-5">
            <h5>Company</h5>
            <p className="mt-3">About</p>
            <p>Legal & Privacy</p>
            <p>Investors</p>
            <p>Cookie preferences</p>
        </div>
        <div className="mb-5">
            <h5>Exchange</h5>
            <p className="mt-3">Buy Crypto</p>
            <p>Exchanges</p>
            <p>Watchlist</p>
            <p>Portfolio</p>
        </div>
        <div className="mb-5">
            <h5>Help & Support</h5>
            <p className="mt-3">Help Center</p>
            <p>Contact Us</p>
            <p>System Status</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    )
}