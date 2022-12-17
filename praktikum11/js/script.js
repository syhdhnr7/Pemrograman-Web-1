document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan Random Komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WINNN")
    } 

    // Jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("KOMPUTER WIN")
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("KOMPUTER WINN")
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("KOMPUTER WINNN")
    } 
}