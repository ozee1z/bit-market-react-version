import { useEffect, useState } from "react";




export default function CryptoMarket () {
    const [coins, setCoins] = useState([]);
    
    useEffect( ()=> {
      const apiKey = "coinranking0dfc210581401a0a038f41d12112e0c92e7870db187c7429";

const options = {
    headers: {
      'x-access-token': apiKey,
    },
  };

  fetch('https://api.coinranking.com/v2/coins?limit=10', options)
  .then((response) => response.json())
  .then((result) => {
      let coinsData = result.data.coins;
      console.log(coinsData);
      setCoins(coinsData)

     
  });
    },[])

    return (
        <div className="container market-section" style={{marginTop:'100px'}} id="section2">
        <h2 className="fw-bold">Market Update</h2>

        
        <div className="table-responsive mt-5">
            <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">Change (24h)</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Symbol</th>
                  </tr>

                </thead>

                
                <tbody>
                  {coins.map((item, index) => (
                    <tr key={item.uuid}>
                    <th scope="col">{index + 1}</th>
                    <th scope="col">{item.name}</th>
                    <th scope="col">{item.price}</th>
                    <th scope="col">{item.change}</th>
                    <th scope="col">{item.marketCap}</th>
                    <th scope="col">{item.symbol}</th>
                  </tr>
                  )

                  )}
                
                </tbody>
              </table>
        </div>
      </div>
    )
}