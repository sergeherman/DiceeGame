var randomNumber1 = Math.round((Math.random()*5)+1);

var leftName = "dice" + randomNumber1 + ".png";
      
     
      // Construct the image source URL
      var imageUrl = './images/' + leftName;
      
      // Set the src attribute of the image using setAttribute
      document.querySelector('.img1').setAttribute('src', imageUrl);

var randomNumber2 = Math.round((Math.random()*5)+1);

var rightName = "dice" + randomNumber1 + ".png";
      
     
      // Construct the image source URL
      var imageUrl2 = './images/' + rightName;
      
      // Set the src attribute of the image using setAttribute
      document.querySelector('.img1').setAttribute('src', imageUrl2);
