var person = {
    name: 'Василий',
    year: 1990,
    family: ['Елена', 'Игорь'],
    car: {
      year: 2010,
      model: 'Ford'
    },
    calculateAge: function() {
      this.age = 2018 - this.year // = person.year
      this.city = 'moscow'
      this.appartment = 247
    }
  }

  person.calculateAge()
  console.log(person)
  

  console.log('Hello')