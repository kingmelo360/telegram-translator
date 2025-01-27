async function translateText() {
  const apiKey = '5fc61f87-644f-455a-a210-0b8ba71fce33:fx'; // Replace with your DeepL API key
  const textToTranslate = document.getElementById('inputText').value;
  const targetLanguage = document.getElementById('targetLanguage').value;

  const apiUrl = 'https://api-free.deepl.com/v2/translate'; // Use the correct endpoint

  const requestBody = new URLSearchParams({
    auth_key: apiKey,
    text: textToTranslate,
    target_lang: targetLanguage,
  });

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    });

    const data = await response.json();
    const translatedText = data.translations[0].text;
    document.getElementById('translatedText').innerText = translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    document.getElementById('translatedText').innerText = 'Translation failed. Please try again.';
  }
}