fetch('/publications.json')
  .then(response => response.json())
  .then(data => {
    const publicationsContainer = document.getElementById('publications-container');
    
    data.forEach((pub, index) => {
      const pubElement = document.createElement('div');
      const authors = pub.authors.map(author =>
        (author === "Yiqiao Jin" || author.startsWith("Yiqiao Jin*")) ? `<u><b>${author}</b></u>` : author
      ).join(', ');

      let presentationTypeHtml = pub.presentationType ? `(${pub.presentationType})` : '';

      let acceptanceRate = pub.acceptanceRate ? `Acceptance rate: ${pub.acceptanceRate}` : '';

      let venue = pub.venueShort ? `<i>In ${pub.venue} (${pub.venueShort})</i>` : `<i>${pub.venue}</i>`;

      let arxivLink = pub.arXiv ? `[<a href="${pub.arXiv}">arXiv</a>]` : '';
      let note = pub.note ? `(<text style='color:red'>${pub.note}</text>)` : '';

      let paperLink = pub.paperLink ? `[<a href="${pub.paperLink}">Paper</a>]` : '';
      let websiteLink = pub.website ? `[<a href="${pub.website}">Website</a>]` : '';
      let codeLink = pub.GitHub ? `[<a href="${pub.GitHub}">Code</a>]` : '';

      let links = [arxivLink, paperLink, websiteLink, codeLink].filter(link => link !== '').join(' ');


      pubElement.innerHTML = `<h5>[${index + 1}] ${pub.title}</h5><p>${authors}</p><p>${venue} ${note} ${presentationTypeHtml}</p><p>${links}</p>`;
      // Add more details as needed
      publicationsContainer.appendChild(pubElement);
    });
  })
  .catch(error => console.error('Error loading publications:', error));
