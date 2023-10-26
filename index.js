const filme = [
 {
    id: 1,
    nome: "trancada",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXc1LbBINFyR4gyJ6a8eJjAA-5c2bp-Dxmg&usqp=CAU",
    dataPassado: "12/05/2022",
    dataLancamento: "05/05/2022",
    emLancamento: true,
    precoTicket: 20,
    quantidadeTickets: 100,
 },
 {
    id: 2,
    nome: "avatar",
    imagem: "https://blog.fotoregistro.com.br/wp-content/uploads/2018/11/capa-filme-avatar.jpg",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
{
    id: 3,
    nome: "coringa",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-r4JY_glyCyypaoctI5WS4aWfZ96XY3PRw&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
{
    id: 4,
    nome: "venom",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyNLrum53__nD6lWIElcZC4aj9HEGrNtxdg&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
 {
    id: 5,
    nome: "tempo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzgNLz3AKCUrzOzCaLNK-cUq5h1tgc2X_aw&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
 {
    id: 6,
    nome: "na toca do coelho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrF-ZybgBHsLq317ZAclrvXfZKuvZbRYYdQ&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
 {
    id: 7,
    nome: "a queda",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UKMwkcFuYIQTOPN7pI0hTBfIPyfLwfdxFA&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
{
    id: 8,
    nome: "scream",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElA8roMBdNTDmDtw3Gv9JqsK5_4Bu1d958ll4iVQm3eFfNELW4PjmPQmXx7WAraCXHDQ&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
 {
    id: 9,
    nome: "divergent",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHrplteY9SdLfqM2kN8_2r0DKENJ56V6zfA&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 50,
 },
 {
    id: 10,
    nome: "sherlock holmes",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZIMEoXiLCRKfQK5P56ytIaTKW7jk3iaBkg&usqp=CAU",
    dataPassado: "25/04/2022",
    dataLancamento: "15/04/2022",
    emLancamento: false,
    precoTicket: 25,
    quantidadeTickets: 59,
 },
];
filme.forEach((filme) => {
 const divFilme = document.createElement("div");
 divFilme.className = "filme";
 divFilme.innerHTML = `
    <h2>${filme.nome}</h2>
    <img src="${filme.imagem}" alt="${filme.nome}">
    <p>Data Passado: ${filme.dataPassado}</p>
    <p>Data Lançamento: ${filme.dataLancamento}</p>
    <p>Em Lançamento: ${filme.emLancamento ? "Sim" : "Não"}</p>
    <p>Preço do Ticket: ${filme.precoTicket}</p>
    <p>Quantidade de Tickets: ${filme.quantidadeTickets}</p>
 `;
 document.body.appendChild(divFilme);
});
