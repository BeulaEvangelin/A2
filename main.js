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
  
    acceptCookiesLink.addEventListener('click', function() {
      cookieBanner.innerHTML = '<p>Cookies were accepted.Would you like to revoke? <a id="revokeCookies" href="#">Revoke</a></p>';
  
      const revokeCookiesLink = document.getElementByIdquerySelector("#revokeCookies");
      revokeCookiesLink.addEventListener('click', function() {
        cookieBanner.innerHTML = '<p>We use cookies to improve your experience. <a id="acceptCookies" href="#">Accept Cookies</a></p>';
  
        acceptCookiesLink = document.querySelector("#acceptCookies");
        acceptCookiesLink.addEventListener('click', function() {
          cookieBanner.innerHTML = '<p>Cookies were accepted.Would you like to revoke? <a id="revokeCookies" href="#">Revoke</a></p>';
        });
      });
    });