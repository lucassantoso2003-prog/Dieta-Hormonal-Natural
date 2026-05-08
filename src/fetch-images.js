async function getImages() {
  const res = await fetch('https://desafio.nutrimarinacardoso.com.br');
  const data = await res.text();
  console.log("Includes 'Meire':", data.includes('Meire'));
  console.log("Includes 'Desinflama':", data.includes('Desinflama'));
  
  // print all http/https urls
  const links = data.match(/https?:\/\/[^"'\s)]+/g);
  if (links) {
    const unique = [...new Set(links)];
    console.log(unique.filter(u => !u.includes('w3.org') && !u.includes('google')));
  }
}
getImages();
