function searchOnEnter(event) {
    if (event.key === 'Enter') {
      searchDictionary();
    }
  }
  
  function searchDictionary() {
    const wordInput = document.getElementById('wordInput');
    const resultDiv = document.getElementById('result');
    const word = wordInput.value.trim();
  
    if (!word) {
      alert('Please enter a word.');
      return;
    }
  
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        if (data.title === 'No Definitions Found') {
          resultDiv.innerHTML = `<p>No definitions found for "${word}".</p>`;
        } else {
          const definitions = data[0].meanings.map(meaning => meaning.definitions[0].definition);
          resultDiv.innerHTML = `<p>Definitions for "${word}":</p><ul>${definitions.map(def => `<li>${def}</li>`).join('')}</ul>`;
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        resultDiv.innerHTML = `<p>An error occurred. Please try again later.</p>`;
      });
  }
  