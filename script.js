window.addEventListener('load',function(){
    $('.field').css({
        "width":window.innerWidth*0.7,
        "height":window.innerHeight*0.6,

    })
    let size = window.innerWidth * 0.7 / 7 - 3;
    let amount = 0;
    $('.amount').html(15 -amount);
    $('.thanos').on('click',function(){
        amount = amount + 1;
        $('.amount').html(15 -amount);
        if(amount < 15){
            let cell = $('<div class="cell"></div>');
            cell.css({'width': size, 'height': size});
            $('.field').append(cell);
            anime({
                targets: '.thanos',
                left: function () { return anime.random(0, window.innerWidth - 200); },
                top: function () { return anime.random(0, window.innerHeight - 350); },
                duration: function () { return anime.random(1200, 1800); },
                delay: 200,
                direction: 'alternate',
                loop: false
            });

        }
        else{
            let cell = $('<div class="cell"></div>');
            cell.css({'width': size, 'height': size});
            $('.field').append(cell);
            $('.text').html('Вы спасли путешественника!');
            anime({
                targets: 'img',
                duration: 15000,
                delay: 500,
                opacity:0,
                width:$('.thanos').width() *1.5,
                height:$('.thanos').height() *1.5,
                loop: false
            });

        }
    })
})