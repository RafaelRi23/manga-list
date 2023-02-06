var listaMangas = ['https://m.media-amazon.com/images/I/51kv4hZ+TYL.jpg', 'https://comicvine.gamespot.com/a/uploads/scale_small/11144/111442876/8635741-71joeixtnkl.jpg'];

var nomeMangas = [
  'Blue Lock - 2018', 'Ao Ashi - 2015'
];

var mangaUpdates = ['https://www.mangaupdates.com/series/joxc7wz/blue-lock', 'https://www.mangaupdates.com/series/tszfquh/ao-ashi']

document.write('<div class="container_todosMangas">')

listaMangas.push('https://preview.redd.it/hajime-no-ippo-vol-136-cover-revealed-the-cover-confirms-v0-ayc6vllmnjy91.jpg?auto=webp&s=73d4cde65795415984b3526b3aa3c5318c9d6b70', 'https://m.media-amazon.com/images/I/9119ST+olGL.jpg', 'https://m.media-amazon.com/images/I/81Zgm2wzsML._AC_UF700,800_QL80_.jpg', 'https://m.media-amazon.com/images/I/51d9LG5nzWL._SX349_BO1,204,203,200_.jpg')

nomeMangas.push('Hajime no Ippo - 1989', 'Chainsaw Man - 2018', 'One Piece - 1997', 'Kaiji - 1996')

mangaUpdates.push('https://www.mangaupdates.com/series/9ft0dv5/hajime-no-ippo', 'https://www.mangaupdates.com/series/ylx5wzn/chainsaw-man', 'https://www.mangaupdates.com/series/pb8uwds/one-piece', 'https://www.mangaupdates.com/series/m63uxtz/tobaku-mokushiroku-kaiji')

for(var i = 0; i < listaMangas.length; i++) {
document.write(`<div class="container_manga">`);
document.write(`<a href="${mangaUpdates[i]}" target="_blank"><img src="${listaMangas[i]}"></a>`);
document.write(`<p>${nomeMangas[i]}</p>`);
document.write('</div>');
}