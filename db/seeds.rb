# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "Guy", email: "guy@guy.com", password: "123456", admin: false)
user2 = User.create(username: "Hey", email: "hey@hey.com", password: "123456", admin: false)
pitch = user.pitches.create(title: "A good pitch", body: "blah blah blah blah blah blah blah blah blah, blah")
membership = Membership.create(member_id: 1, pitch_id: 1)
membership = Membership.create(member_id: 2, pitch_id: 1)