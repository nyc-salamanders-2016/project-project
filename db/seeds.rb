# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

salamanders = ["henri", "terence", "melissa", "daniel", "anders", "rachael", "matt", "moin", "kiren", "parker", "ephraim", "josh", "elisa", "sean", "adam", "richie"]
admins = ["iullia", "pan"]

salamanders.each do |name|
	User.create(username: name, email:"#{name}@email.com", password:"123456", admin: false)
end

admins.each do |name|
	User.create(username: name, email:"#{name}@email.com", password:"123456", admin: true)
end

32.times do |i|
	id = rand(1..16)
	Pitch.create(title: "Pitch #{i}", body: "This is pitch numero #{i}", creator_id: "#{id}")
end

User.where(admin: false)[4..-1].each do |student|
	6.times do |i|
		pitch = Pitch.all.sample
		vote = student.votes.new(pitch_id: pitch.id)
		if vote.save
			next
		else
			next
		end
	end
end

ordered_pitches = Pitch.order_pitches_by_votes.first(7)
User.where(admin: false)[4..-1].each do |student|
	7.times do |i|
		pitch = ordered_pitches.sample
		rank = student.rankings.new(rank: rand(1..7), pitch_id: pitch.id)
		if rank.save
			next
		else
			next
		end
	end
end


# user.pitches.create(title: "A good pitch", body: "blah blah blah blah blah blah blah blah blah, blah")
# user2.pitches.create(title: "A better pitch", body: "blah blah blah blah blah blah blah blah blah, blah")
# user3.pitches.create(title: "The best pitch", body: "blah blah blah blah blah blah blah blah blah, blah")


# Vote.create(user_id: 1, pitch_id: 1)
# Vote.create(user_id: 3, pitch_id: 2)
# Vote.create(user_id: 2, pitch_id: 2)
# Vote.create(user_id: 4, pitch_id: 2)
# Vote.create(user_id: 4, pitch_id: 3)
# Vote.create(user_id: 3, pitch_id: 3)
# Vote.create(user_id: 2, pitch_id: 3)


