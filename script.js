let result = document.getElementById("inputtext");

let calculate = (number) =>{
    
    result.value += number;
}
console.log({result})

let final = () =>{
    try{

        result.value =eval(result.value)
    }
    catch(err){
        alert('Enter the valid input')
    }
}

function clr(){
    result.value = " "
}

function del(){
    result.value = result.value.slice(0,-1)
}

result.addEventListener("keypress", function(event) {
    // Memeriksa apakah karakter yang ditekan adalah angka atau bukan
    if (isNaN(event.key)) {
    // Menghalangi karakter yang ditekan jika bukan angka
    event.preventDefault();
    }
});