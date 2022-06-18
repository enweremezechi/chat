// dome manupulation

const jane = document.getElementById('jane');
const frank = document.getElementById('frank');

// eventlitener
jane.addEventListener('click', function(e){
    e.preventDefault();
    let Alertmessage = document.querySelector('.alert-message');
    if(Alertmessage.style.display == 'none'){
        Alertmessage.style.display = 'block';
        let DisplayUsermessage = document.querySelector('.user-display').style.display = 'block';
    
    }else{
        Alertmessage.style.display = 'none';
    }
})

let SendBtn = document.getElementById('send-btn');



SendBtn.addEventListener('click', function(){
    let KeyDownBtn = document.getElementById('keydown-btn').value;
    let ownUser = document.querySelector('.own-display').innerHTML = KeyDownBtn;
   
    
})


