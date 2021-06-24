const person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName 
    }
}

const person1 = [{
    firstName: 'Rukon',
    lastName: 'Khan'
},{
    firstName: 'Ripon',
    lastName: 'Khan'
}]


for (let item of person1) {
console.log(person.fullName.apply({...item}))
}

//Result :
// Rukon Khan
// Ripon Khan
