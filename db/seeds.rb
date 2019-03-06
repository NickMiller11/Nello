# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all
List.destroy_all
Board.destroy_all

board1 = Board.create(title: 'Board 1');
#board2 = Board.create(title: 'Board 2');
list1 = List.create({title: 'list 1', board: board1})
list2 = List.create({title: 'list 2', board: board1})

card1 = Card.create(title: 'card', list: list1, labels: ['red', 'blue'])
card2 = Card.create(title: 'card', list: list1, labels: ['red', 'blue'])
card3 = Card.create(title: 'card', list: list2, labels: ['red', 'blue'])
card4 = Card.create(title: 'card', list: list2, labels: ['red', 'blue'])
card5 = Card.create(title: 'card', list: list2, labels: ['red', 'blue'])
