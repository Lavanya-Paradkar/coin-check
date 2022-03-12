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

const BitChart = () => {

  const baseUrl = "https://api.blockchain.info/charts/transactions-per-second?timespan=1week&rollingAverage=8hours&format=json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "";

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
          //console.log(json.values)
          setChart(json.values) 
        })
      }).catch(error=> {
        console.log(error)
      })
    }
    fetchCoins();
  }, [baseUrl, proxyUrl, apiKey]);
  

  var data = {
    labels: chart?.map(dataX => dataX.x),
    datasets: [{
        label: `${chart?.length} Coins Available`,
        data: chart?.map(dataY => dataY.y),
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
        The number of Bitcoin transactions added to the mempool per second.
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

export default BitChart