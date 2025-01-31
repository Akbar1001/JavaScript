// First understand "THIS" keyword
// "this" keyword used to refer Current context/Scope

const user={
    username: "Akbar",
    id: 4455,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome on this website`); // o/p-> Akbar , welcome on the website
        //for the above "this" keyword the context or scope is Object->user
    }
}
user.welcomeMessage() //calling function welcomeMessage
//Now if we change the username it will consider the modified value

//NOte
// value of "this" keyword in NODE js enviroment is {}(an Empty object).
// value of "this" keyword in console of browser enviroment is Window{} <- window object.