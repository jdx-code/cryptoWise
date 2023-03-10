const modeBtn = document.getElementById('mode');

modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  } else {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
  }
}

const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  modeBtn.checked = true;
  document.documentElement.classList.remove("light")
  document.documentElement.classList.add("dark")
}

if (mode == 'light') {
  modeBtn.checked = false;
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")
}

const updateAssetInformation = () => {    
    let rowData = "";
    fetch('https://api.coincap.io/v2/assets/?limit=25')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        data.data.forEach(ele => {
  
          const color = ele.changePercent24Hr < 0 ? "#f44336" : "#8A9A5B";
  
          rowData += `
                        <tr>
                            <td>${ele.rank}</td>
                            <td>${ele.name}</td>
                            <td>${Number(ele.priceUsd).toFixed(2)}</td>
                            <td>${Number(ele.marketCapUsd).toFixed(2)}</td>
                            <td>${Number(ele.supply).toFixed(2)}</td>
                            <td style="color:${color}">${Number(ele.changePercent24Hr).toFixed(2)}</td>
                        </tr>
                    `
  
          document.querySelector('tbody').innerHTML = rowData;
        })
        console.log(rowData);
      })
      .catch(err => {
        console.log(`Error : ${err}`);
      })
  }
  
  
  
  updateAssetInformation()
  setInterval(updateAssetInformation, 3000);