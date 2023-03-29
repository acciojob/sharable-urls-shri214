// your code here
 function updateUrl() {
        var nameInput = document.getElementById("name");
        var yearInput = document.getElementById("year");
        var urlOutput = document.getElementById("url");
        var name = nameInput.value;
        var year = yearInput.value;
        var queryString = "?";
        if (name) {
          queryString += "name=" + encodeURIComponent(name) + "&";
        }
        if (year) {
          queryString += "year=" + encodeURIComponent(year) + "&";
        }
        if (queryString.endsWith("&")) {
          queryString = queryString.slice(0, -1);
        }
        urlOutput.textContent = "https://localhost:8080/" + queryString;
      }