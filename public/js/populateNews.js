fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    const currentDate = new Date();

    data.forEach(news => {
      const element = document.createElement('div');

      // Convert date string to Date object
      let newsDate = new Date(news.date);

      // Calculate the difference in days
      let differenceInDays = Math.floor((currentDate - newsDate) / (1000 * 60 * 60 * 24));

      // Check if the date is within 90 days
      let newTag = (differenceInDays <= 90) ? "<span style='color:red;'>NEW!</span>" : "";

      // Render the text in Markdown format
      // let markdownText = marked(`${news.text} ${newTag}`);

      // Set inner HTML of the element
      element.innerHTML = `<p>[${news.date}] ${news.text} ${newTag}</p>`;

      newsContainer.appendChild(element);
    });
  })
  .catch(error => console.error('Error loading news:', error));
