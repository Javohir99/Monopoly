/*start function*/
function removeChoose(){
    while(choose.children.length){
        choose.children[0].remove();
    }
}
function createPlayers(i){
    if(i <= playerNumber){
        writeName(i);
    }
    else{
        start();
    }
}
function writeName(i){
    /*creat elements*/
    let input = document.createElement('input');
    let submit = document.createElement('div');
    let txPlayer = document.createElement('div');
    /*add atributs*/
    txPlayer.classList.add('txnum');
    submit.classList.add('submit');
    submit.innerHTML = "Готово";
    input.setAttribute('type','text');
    choose.classList.remove('flex');
    choose.classList.add('selectname');
    txPlayer.innerHTML = 'Как вас зовут ' + (i+1) + " игрок:";
    /* add elemnt*/
    choose.append(txPlayer);
    choose.append(input);
    choose.append(submit);
    /*logic onclick*/
    choose.querySelector('.submit').onclick = function(){
        if(!choose.querySelector('input').value){
            alert("Ваше имя не правильно!");
        }
        else{
            Players[i] = new Object();
            Players[i].name = choose.querySelector('input').value;
            chooseFigure(i);
        }
    };   
}
function chooseFigure(i){
    removeChoose();
    choose.classList.remove('selectname')
    choose.classList.add('flex');
    for(k = 0;k<6;k++){
        let div = document.createElement('div');
        for(let j = 0;j<Players.length;j++){
            if(figures[k] == Players[j].figures){
                div.classList.add('picked');
            }
                else{
                div.classList.add(figures[k]);
            }
        }
        choose.append(div);
    }
    for(let j = 0; j<choose.children.length;j++){
        if(choose.children[j].classList.contains('picked')){
            choose.children[j].onclick = function(){
                alert("Выберите другую фигиру");
            }
        }
        choose.children[j].onclick = function(){
            Players[i].figures = figures[j];
            removeChoose();
            createPlayers(i+1);
        }
    }
}
/*end function*/
for(let i = 0; i<choose.children.length;i++){
    choose.children[i].onclick = function(){
        playerNumber = i;
        removeChoose();
        createPlayers(0);
    }
}