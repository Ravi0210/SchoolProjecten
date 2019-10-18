

    var teller = 5;
//easter egg titel verandert van kleur "portofolio van ravi"
    var h1 = document.getElementById("h1");
    var wit = style.color = "white"
    h1();
    function h1() {
        if(h1 == wit ){
          alert("uwu");
        }
    }

    function knipperen(){
      teller++;
      console.log(teller);
      if (teller === 10) {
          setInterval(function () {
              document.getElementById("h1").style.color = "red";
          }, 601);
          setInterval(function () {
              document.getElementById("h1").style.color = "white";
          }, 300);
          if (teller === 15) {
              setInterval(function () {
                  document.getElementById("h1").style.color = "red";
              }, 60);
              setInterval(function () {
                  document.getElementById("h1").style.color = "white";
              }, 30);
          }
      }
    }
    button();
    function button() {
        document.documentElement.scrollTop = 0;
        slideUp(300);
    }
