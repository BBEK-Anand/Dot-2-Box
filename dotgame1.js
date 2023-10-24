 function enterFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  }else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  }else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  }else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
};
 function get(d){
           let g=document.querySelector(d);
           return g
       }
 function crt(g){
    let y = document.createElement(g)
    return y
}
function crtx(g){
    let y = document.createTextNode(g)
    return y
}



function store(wnr,lsr){
    
 let data={
     winner_name:wnr.Name,
     winner_score:wnr.score,
     looser_name:lsr.Name,
     looser_score:lsr.score,
     time:new Date
 }   
    
let yo= $.param(data)



$.ajax({
        url:'https://api.apispreadsheets.com/data/6RLLyimIcNB416gY/',
        type:'post',
        data:yo,
        success: function(){
         // alert("Form Data Submitted :)")
        },
        error: function(){
         // alert("There was an error :(")
        }
    });
    
} //store






function ending(p1,p2){
let winner , looser ;
if (p1.score>p2.score){
    winner=p1
    looser=p2
}else {
     winner=p2
    looser=p1
}

store(winner,looser)
 
 let b=crt("div");
let yop=" background:rgba( 205, 17, 1, 0.25 );box-shadow:0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter:blur( 4.5px );-webkit-backdrop-filter:blur( 4.5px );border-radius:60px;border:1px solid rgba( 255, 0, 255, 0.18 );"
//yop=" background:rgba( 255, 0, 80, 0.5 );box-shadow:0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter:blur( 8.5px );-webkit-backdrop-filter:blur( 8.5px );border-radius:10px;border:1px solid rgba( 255, 255, 255, 0.18 );"




 b.style="height:400px;width:300px;background:#a1f7df;position:absolute;top:40px;left:20px;border-radius:60px;"+yop;
 
 let w=crt("div");  //winner
 
 let op="background: #eb9d9d;box-shadow: inset 4px 4px 9px #c88585,inset -4px -4px 9px #ffb5b5;";
 
 op="box-shadow:0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter:blur( 4.6px );-webkit-backdrop-filter:blur( 5px );border-radius:10px;border:1px solid rgba( 10, 105, 5, 0.8 );"

//op=""




 let sty="position: absolute;height:170px;width:290px; border:solid blue 1px; text-align: center;"+op;
 
 let y=crt("h1")
 
 let h1="font-family:'Brush Script MT', cursive;font-size:40px;line-height:0px;text-shadow: 0 0 3px #FFFFFF, 0 0 5px #ffdc00;";
 
 y.style=h1;
 y.appendChild(crtx("WINNER"))

 w.style=sty+" background:"+winner.Colour+";top:4px;left:4px;border-radius:60px 60px 5px 5px;"
 
w.appendChild(y)

let t=crt("table")
t.innerHTML="<tr><td style='text-align:right;color:;'>Name</td><td style='text-align:left;' ><b>"+winner.Name+"</b></td></tr><tr><td style='text-align:right;color:;'>Score</td><td style='text-align:left'><b>"+winner.score+"</b></td></tr>"

t.style="max-width:40%;background:;border-collapse:separate ;border-spacing:15px 5px;font-family: Brushstroke, fantasy;color:"
let td= crt("tr")

t.align="center"

//t.appendChild(td)


w.appendChild(t)

b.appendChild(w)
//b.innerText="5tg"


let fi=crt("div")
fi.style="background:#ffbd6a00;position:absolute;left:1px;top:176px;width:300px;font-size:20px;text-align:center;"

let tx=crt("span")
tx.innerHTML="PLAY TO WINE".strike()
fi.appendChild(tx)
fi.appendChild(crt("br"))
fi.appendChild(crtx("PLAY TO ENJOY THE FUN"))


b.append(fi)


// w.style=sty+" background:"+winner.color+";top:4px;left:4px;border-radius:60px 60px 5px 5px;"


  w=crt("div");  //looser  
 w.style=sty+"background:"+looser.Colour+"; bottom:4px;left:4px; border-radius:5px 5px 60px 60px;"
 
  y=crt("h1");
  y.style=h1;
y.appendChild(crtx("looser"))
 w.appendChild(y)
 
 
 
 
  t=crt("table")
t.innerHTML="<tr><td style='text-align:right;color:;'>Name</td><td style='text-align:left;' ><b>"+looser.Name+"</b></td></tr><tr><td style='text-align:right;color:;'>Score</td><td style='text-align:left'><b>"+looser.score+"</b></td></tr>"

t.style="max-width:40%;background:;border-collapse:separate ;border-spacing:15px 5px;font-family: Brushstroke, fantasy;color:"
 td= crt("tr")

t.align="center"

//t.appendChild(td)


w.appendChild(t)



 
 b.appendChild(w)
// g.appendChild(b);




 return b
 }
 //ending()



