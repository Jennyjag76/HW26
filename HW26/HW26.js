let hair = {
    _length: "long",
    _color: "black",
    _style: "layered",
    _type: "curly",
    set color(newColor) {
        if(typeof newColor != "black") {
            console.log('not black');
        } else {
            this._color = newColor;
        }
    },
     get color() {
         return this._color;
     }
}
console.log(hair._color);
console.log(hair.color);

let family = {
    Niece: "Amber",
    Nephew: "Ayden",
    Daughter: "Erin",
    Daughter1: "Jackie",
    new_obj1: {Sister: "Lisa", Brother: "Steven"},
    new_family1: function() {
        console.log(`Some of my family members are ${this.Niece},
         ${this.Nephew}, ${this.Daughter}, ${this.Daughter1},
          ${this.new_obj1.Brother}, 
        and ${this.new_obj1.Sister}`);
    }
}
console.log(family);
family.new_family1();

let family_values = Object.values(family);

family_values.forEach(item => {
    console.log(item);
});