# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "Guy", email: "guy@guy.com", password: "123456", admin: false)
user2 = User.create(username: "Hey", email: "hey@hey.com", password: "123456", admin: false)
user3 = User.create(username: "Henri", email: "henri@henri.com", password: "123456", admin: false)
user4 = User.create(username: "Terence", email: "terence@terence.com", password: "123456", admin: false)

user.pitches.create(title: "A good pitch", body: "blah blah blah blah blah blah blah blah blah, blah")
user2.pitches.create(title: "A better pitch", body: "blah blah blah blah blah blah blah blah blah, blah")
user3.pitches.create(title: "The best pitch", body: "blah blah blah blah blah blah blah blah blah, blah")

Membership.create(member_id: 1, pitch_id: 1)
Membership.create(member_id: 3, pitch_id: 1)
Membership.create(member_id: 2, pitch_id: 2)
Membership.create(member_id: 4, pitch_id: 2)


Vote.create(user_id: 1, pitch_id: 1)
Vote.create(user_id: 3, pitch_id: 2)
Vote.create(user_id: 2, pitch_id: 2)
Vote.create(user_id: 4, pitch_id: 2)
Vote.create(user_id: 4, pitch_id: 3)
Vote.create(user_id: 3, pitch_id: 3)
Vote.create(user_id: 2, pitch_id: 3)


