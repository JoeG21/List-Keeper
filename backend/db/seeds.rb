# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create({
    first_name: 'Joe',
    last_name: 'Gomez',
    email: 'joe@gmail.com',
    password: '12345'
})

n1 = Note.create({
    user_id: u1.id,
    title: 'Shopping List',
    body: 'Eggs, milk, and sugar'
})

n2 = Note.create({
    user_id: u1.id,
    title: 'ABC',
    body: '123'
})