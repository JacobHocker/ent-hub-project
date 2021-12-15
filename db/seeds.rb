#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# structure change datetime to time arguments in order (year month date)

puts "Creating Seeds..."
puts 

puts "Creating Movies..."
puts 

lotr_fellowship = Movie.create!(movie_poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", movie_trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4", title: "Lord of the Rings: Fellowship of the Ring", summary: "A dangeros journey begins to destroy the one ring and the fate of middle-earth stands in the hand of the most unlikely creature imaginable a hobbit!")

puts "Creating Actors..."
puts 

elijah_wood = Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_.jpg", name: "Elijah Wood")

puts "Associating Movies & Actors..."
puts 

lotr_fellowship.actors << elijah_wood 

puts "Done seeding!"