window.onload = function(){
    const btn = document.getElementById('upBtn');



    btn.addEventListener('click', function(){
        console.log('subiu');
        window.scrollTo(0,0);
    });
    document.addEventListener('scroll', hideBtn);

    function hideBtn(){
        if(window.scrollY > 400){
            btn.style.display = 'flex';
            console.log('escondeu');
        }else{
            btn.style.display = 'none';
            console.log('mostrou');
        }
    }

    hideBtn()    
}

