      const btn5 = document.querySelector("#btn5");
      let btn1 = document.querySelector("#btn1");
      let btn2 = document.querySelector("#btn2");
      let btn3 = document.querySelector("#btn3");
      let btn4 = document.querySelector("#btn4");
      let btn6 = document.querySelector("#btn6");
      let btn7 = document.querySelector("#btn7");
      let btn8 = document.querySelector("#btn8");
      let btn9 = document.querySelector("#btn9");
      
      function shift() {
          [btn1.innerHTML, btn2.innerHTML, btn3.innerHTML, btn4.innerHTML, btn6.innerHTML, btn7.innerHTML, btn8.innerHTML, btn9.innerHTML] = [btn4.innerHTML, btn1.innerHTML, btn2.innerHTML, btn7.innerHTML, btn3.innerHTML, btn8.innerHTML, btn9.innerHTML, btn6.innerHTML]
        
      };
      
      
      
      
      btn5.addEventListener("click", shift );
  