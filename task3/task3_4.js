const dog = {
    sound: 'bark',
    greet: function() {
        setTimeout(() => { // Using pointer (arrowing) function
            console.log(this.sound)
        }, 0)
      }
   }
    
   dog.greet(); // printout "bark"