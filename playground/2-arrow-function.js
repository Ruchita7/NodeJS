//const square = (x) => { return x * x}

//const square= (x) => x*x 

//console.log(square(4))

/*const event = {
    name :  "Birthday party",
    printGuestList : function() {
        console.log("Guest list for "+this.name)
    }
}
*/

const event = {
    name :  "Birthday party",
    guestList : ['Andrew','Jen','Mike'],
    printGuestList(){
        console.log("Guest list for "+this.name)
        this.guestList.forEach(guest => 
            console.log(guest + " is attending " + 
        this.name))
    }
}
event.printGuestList()


/*const event1 = {
    name : "Birthday party",
    printGuestList : () =>console.log("Guest list for "+this.name)
}

event1.printGuestList()*/