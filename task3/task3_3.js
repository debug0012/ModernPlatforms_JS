const cat = {
    sound: 'meow',
    greet: function() {
      setTimeout(() => { // Using pointer (arrowing) function
          console.log(this.sound)
      }, 0)
    }
   };
   cat.greet(); // printout "meow"