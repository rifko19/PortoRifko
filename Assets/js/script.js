//span text berubah-ubah
const txtElement = ['Mahasiswa' , 'Freelancer' , 'Barudak Palembang' , 'Barudak Unsri'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.typing').textContent=words;

    if(words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
    }

    setTimeout(ngetik, 200);
})();

//sidebar
const navTogglerBtn = document.querySelector(".nav-toggler"),
    sidebar = document.querySelector(".sidebar");
    navTogglerBtn.addEventListener("click", ()=>
    {
        sidebarSectionTogglerBtn();
    })
    function sidebarSectionTogglerBtn()
    {
        sidebar.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }
//catatan untuk sidebarnya diklik kembali agar tertutup. (karena tidak sempat waktu untuk mengaturnya)