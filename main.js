let visitorData = [

    {month: "April", visitors: "900"},
    {month: "May", visitors: "1100"},
    {month: "June", visitors: "1500"},
    {month: "July", visitors: "1400"},
    {month: "August", visitors: "1780"},
    {month: "September", visitors: "1950"}
  ];

  buildTable(visitorData);

  function buildTable(visitorData){
    //const body = document.querySelector("body");
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const thForMonth = document.createElement("th");
    thForMonth.innerText = "Month";

    const thForVisitors = document.createElement("th");
    thForVisitors.innerText = "No. of Visitors"

    tr.append(thForMonth, thForVisitors);

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i=0; i<visitorData.length; i++){

        const tr = document.createElement("tr");

        const tdForMonth = document.createElement("td");
        tdForMonth.innerText = visitorData[i].month;
        tr.appendChild(tdForMonth);

        const tdForVisitors = document.createElement("td");
        tdForVisitors.innerText = visitorData[i].visitors;
        tr.appendChild(tdForVisitors);
        tbody.appendChild(tr);

    }
    result.appendChild(table);
    };

    
    const cookieBanner = document.querySelector("#cookieBanner");

    const acceptCookiesLink = document.querySelector("#acceptCookies");
    acceptCookiesLink.addEventListener('click', revoke);
      function revoke() {
      cookieBanner.innerHTML = '<p>Cookies were accepted.Would you like to revoke? <a id="revokeCookies" href="#">Revoke</a></p>';  
    
    
    const revokeCookiesLink = document.querySelector("#revokeCookies");
    revokeCookiesLink.addEventListener('click', accept) 
     function accept(){
     cookieBanner.innerHTML = '<p>We use cookies to improve your experience. <a id="acceptCookies" href="#">Accept Cookies</a></p>';
     }}
  

let highContrast = false;

const toggleButton = document.querySelector("#highContrastToggle");

toggleButton.addEventListener("click", toggle);

function toggle() {
  const body = document.querySelector("body");
  if (!highContrast) {
    body.style.backgroundColor = "black";
    body.style.color = "silver";
    body.style.lineHeight = "2";
    body.style.letterSpacing = "2px";
    body.style.padding = "25px";
    highContrast = !highContrast;
    
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.lineHeight = "1";
    body.style.letterSpacing = ".75px";
    body.style.padding = "0px";
    highContrast = !highContrast;
  }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a') {
      highContrastToggle.click();
    }
  });