var a=['red','green','blue','yellow'];
var r=0;
var stk=[];
var l=0;
var user=[];
var u=0;
var i=0;
var flag=0;
function nextsequence()
{
    var r=Math.floor(Math.random()*4);
    let c=a[r];
    stk.push(c);
    console.log(c);
    console.log(stk);
    var audio=$('#'+c+'a')[0];
    audio.play();
    $('.'+c).fadeOut(100);
    $('.'+c).fadeIn(100);
}

function gameover(){
    //alert('gameover');
    console.log('gameover');
    $('body').addClass('game-over');
    setTimeout(function() {
        //your code to be executed after 1 second
        $('body').removeClass('game-over');
        l=0;
        u=0;
        user=[];
        stk=[];
        $('#level-title').html('Press A to restart');
      }, 1000);
}

function startgame()
{
    l=l+1;
    $('#level-title').html('Level '+l);
    nextsequence();
}

$(document).keypress(function(event){
    if(event.which==97){
        if(l==0)
        {
            startgame();
        }
    }
});


$('.btn').click(function(event){
    if(l>0)
    {

        var t=$(this).attr('id');
        //    console.log(t);
        user[u++]=t;
        console.log(user);
        flag=0;
        var audio=$('#'+t+'a')[0];
        audio.play();
        $('.'+t).fadeOut(100);
        $('.'+t).fadeIn(100);
        console.log(l);
        for(i=0;i<u;i++)
        {
            console.log(user[i],stk[i]);
            if(user[i]!=stk[i])
            {
                console.log('aaaaa');
                flag=1;
                
            }
        }
        console.log(flag);
        if(flag==0 && l==u)
        {
            user=[];
            u=0;
            console.log(user);
            //var delayInMilliseconds = 1000; //1 second
            setTimeout(function() {
          //your code to be executed after 1 second
          startgame();
        }, 1000);
    }
    
    if(flag==1)
    {
        gameover();
    }
    }
});

