import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function ExchangeGraph() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch historical exchange rate data
    axios.get('/api/exchange-rates') // Proxy to backend
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'USD to CAD',
        data: data.rates,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default ExchangeGraph;
