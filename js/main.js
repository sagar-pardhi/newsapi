let apiKey = config.API_KEY;

function getData() {
  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      let output = "";
      console.log(data.articles);
      let articles = data.articles;
      articles.forEach(article => {
        let date = new Date(article.publishedAt);
        let datestring =
          date.getDate() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getFullYear() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
        output += `
        <div class="col s12 m7">
        <div class="card horizontal hoverable">
          <div class="card-image article-img">
            <img src="${article.urlToImage}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
            <span class="card-title">${article.title}</span>
            <p style="margin-top: 30px;">${datestring}</p>
            </div>
            <div class="card-action">
              <a href="${article.url}">Read More</a>
            </div>
          </div>
        </div>
      </div>
        `;
      });

      document.getElementById("output").innerHTML = output;
    });
}

getData();
