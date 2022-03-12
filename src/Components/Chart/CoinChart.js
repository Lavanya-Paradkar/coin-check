import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './BitChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement  
)

const CoinChart = () => {

  const baseUrl = "https://api.coinranking.com/v2/coins/?limit=20";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = process.env.CHART_API_KEY;

  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response)=>{
        response.json().then(json => {
          //console.log(json)
          setChart(json.data)
        })
      }).catch(error=> {
        console.log(error)
      })
    }
    fetchCoins();
  }, [baseUrl, proxyUrl, apiKey]);
  

  var data = {
    labels: chart?.coins?.map(dataname => dataname.name),
    datasets: [{
        label: `${chart?.coins?.length} Coins Available`,
        data: chart?.coins?.map(dataprice => dataprice.price),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
var options = {
  maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
}

  return (
    <div className='bitchart'>
      <div className='chart__label'>
        All Cryptocurrency prices in USD
      </div>
      <div>
        <Line
          height={300}
          data={data}
          options={options}
        
        />
      </div>
    </div>
  )
}

export default CoinChart