var randomNumber1 = Math.round((Math.random()*5)+1);

var leftName = "dice" + randomNumber1 + ".png";
      
     
      // Construct the image source URL
      var imageUrl = './images/' + leftName;
      
      // Set the src attribute of the image using setAttribute
      document.querySelector('.img1').setAttribute('src', imageUrl);

var randomNumber2 = Math.round((Math.random()*5)+1);

var rightName = "dice" + randomNumber2 + ".png";
      
     
      // Construct the image source URL
      var imageUrl2 = './images/' + rightName;
      
      // Set the src attribute of the image using setAttribute
      document.querySelector('.img2').setAttribute('src', imageUrl2);

      function titleUpdate(n1, n2)  {
        if (n1==n2) {
            document.querySelector("h1").textContent="Draw!";
        }

       else if (n1>n2) {
            document.querySelector("h1").textContent="🚩 Luka Wins !";
        }
        else {
            document.querySelector("h1").textContent="Mark 2 Wins ! 🚩";
        }
      }

      titleUpdate(randomNumber1, randomNumber2)
