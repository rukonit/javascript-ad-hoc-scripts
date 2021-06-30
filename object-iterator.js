const person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName 
    }
}

const personData = [{
    firstName: 'Rukon',
    lastName: 'Khan'
},{
    firstName: 'Ripon',
    lastName: 'Khan'
}]


for (let item of personData) {
console.log(person.fullName.apply({...item}))
}

//Result :
// Rukon Khan
// Ripon Khan
