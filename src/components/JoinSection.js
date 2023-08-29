import * as Icon from 'react-bootstrap-icons';

export function App() {
  return (
    <>
  <Icon.Star />
  <Icon.Funnel />
  <Icon.ThreeDots />
  </>
  );
}

export default function JoinSection () {
    return (
        <div className="container d-flex joinSection rounded-4 mb-4 bg-body-tertiary" id="section4" style={{height:'310px', marginTop: '100px'}}>
        <div className="col-6 col1-6 ms-4 mt-4">
            <h2 className="fw-bold lh-base">Start earning with<br /> bitmarket today!</h2>
            <p className="mt-3">Join thousands of members earning passively<br /> with bitmarket <span>&#129297;</span>.</p>
            <button className="btn btn-primary mt-2 f-size">Get Started</button>
        </div>
        <div className="col-6 col1-6">
            <div className="mx-auto border border-bottom-0 border-card rounded-top" style={{height: '307px' , width: '300px'}}>
            <div className="mx-auto border border-bottom-0 rounded-top mt-2 bg-white" style={{height: '297px' , width: '280px'}}>
                <div className="mx-auto bg-primary mt-5 p-3 text-white rounded-3" style={{width: '250px', height: '120px'}}>
                    <p className="fw-lighter mb-1">Total balance</p>
                    <p className="fw-lighter mb-1"><span className="fw-medium fs-5">$34,922.32</span> USD</p>
                    <p className="fw-lighter mb-1">+7.98%  |  +2,579.52</p>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                    <button className="btn text-black btn-font-size me-2 border rounded-4" >Trade</button>
                    <button className="btn text-black btn-font-size me-2 border rounded-4">Transfer</button>
                    <button className="btn text-black btn-font-size me-2 border rounded-4">Convert</button>
                    <button className="btn btn-lg text-black btn-font-size me-2 border rounded-4"><i className="bi bi-three-dots"></i><Icon.ThreeDots /></button>
                </div>
                <div className="mt-3 ms-3"><h5>Markets</h5></div>
                <div className="ms-3">
                    <button className="btn text-black border rounded-4 btn-market">All</button>
                    <button className="btn text-black border rounded-4 btn-market"><Icon.Star /></button>
                    <button className="btn text-black border rounded-4 btn-market icon-margin"><Icon.Funnel /></button>
                </div>
            </div>
            </div>
        </div>
      </div>

    )
}