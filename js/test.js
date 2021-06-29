// test

const Guest = function (name, room) {
    this.name = name;
    this.room = room;
}


Guest.prototype.showGuestInfo = function () {
    console.log(`Hello ${this.name} your room ${this.room}`);
}


const sergio = new Guest('Sergio', 5);
const ansul = new Guest('Ansul', 4);


sergio.showGuestInfo();
ansul.showGuestInfo();