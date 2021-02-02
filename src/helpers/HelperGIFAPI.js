export const callFechApi = async (categoria) => {
  const token = "TqIdkhjVAUkZtobw2VIIgQFra0j9mr5L";
  const url = `http://api.giphy.com/v1/gifs/search?q=${categoria}&limit=20&api_key=${token}`;
  const response = await fetch(url);
  if (response.ok) {
    const {data} = await response.json();
    
    const gifts = data.map((img) => {
      return {
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url 
      };
    });
    return gifts;
  }
};
