const updateExchangesData = () => {
    let rowData = '';
    fetch('https://api.coincap.io/v2/exchanges')
    .then(res => res.json())
    .then(data => {
        console.log(data.data);

        data.data.forEach(ele => {

            rowData += `
                        <tr>
                            <td>${ele.rank}</td>
                            <td>${ele.name}</td>
                            <td>${ele.tradingPairs}</td>
                            <td>${Number(ele.volumeUsd).toFixed(2)}</td>
                            <td>${Number(ele.percentTotalVolume).toFixed(2)}</td>                        
                        </tr>
                    `

            document.querySelector('tbody').innerHTML = rowData;
        })
    })
}

updateExchangesData();
setInterval(updateExchangesData, 3000);