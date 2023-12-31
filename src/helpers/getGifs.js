export const getGifs = async (category) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=UhNngbbTnn9RqkzDZpFvG507RX3ZDGp2&q=${ category }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map(( img ) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    console.log({ gifs });
    return gifs;
}