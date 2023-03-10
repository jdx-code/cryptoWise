fetch('https://api.coindcx.com/exchange/ticker')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.map((ele, idx) => {        
        console.log(ele);
        let div = document.createElement('div');                      // Creates a div dynamically for each coin info

        let para1 = document.createElement('p');                      // Create a new <p> 
        let coinName = document.createTextNode(data[idx].market);     // Storing name of coin in variable coinName 
        para1.appendChild(coinName);                                  // Appending value of coinName in <p>

        let para2 = document.createElement('p');                      // Create a new <p> 
        let todaysHigh = document.createTextNode(data[idx].high);     // Storing 24 hours high price in variable todaysHigh 
        para2.appendChild(todaysHigh);                                // Appending value of todaysHigh in <p>

        let para3 = document.createElement('p');                      // Create a new <p> 
        let todaysLow = document.createTextNode(data[idx].low);       // Storing 24 hours low price in variable todaysLow 
        para3.appendChild(todaysLow);                                 // Appending value of todaysLow in <p>

        div.appendChild(para1);                                       // Append collected values to dynamically created <div>
        div.appendChild(para2);
        div.appendChild(para3);
        
        let container = document.querySelector('.container');         // Grab the container from the DOM

        container.appendChild(div);                                   // Append each <div> to the container
        div.style.width = '15%';                                      // Set CSS styles to <div>
        div.style.height = '15%';
        div.style.margin = '2%';        
        div.style.textAlign = 'center';
        div.style.border = '1px solid red';
        
    })    
})
.catch(err => {
    console.log(`error ${err}`)
})