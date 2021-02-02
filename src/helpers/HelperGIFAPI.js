export const callFechApi = async (categoria) => {
  const token = "xa6KmdtA90b1jaNKgId4pydhow3ahjTo";
  const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=20&api_key=${token}`;
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
