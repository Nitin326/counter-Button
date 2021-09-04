var count = document.getElementById('number').innerHTML;

const Increment = () =>{
    count++;
    document.getElementById('number').innerHTML = count;
}

const Decrement = () =>{
    count--;
    document.getElementById('number').innerHTML = count;
}