#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# structure change datetime to time arguments in order (year month date)

puts "Creating Seeds..."
puts 

### WHERE THE MOVIES ARE SEEDED
puts "Creating Movies..."
puts 

lotr_fellowship = Movie.create!(movie_poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", movie_trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4", title: "Lord of the Rings: Fellowship of the Ring", summary: "A dangeros journey begins to destroy the one ring and the fate of middle-earth stands in the hand of the most unlikely creature imaginable a hobbit!")


### WHERE THE ACTORS ARE SEEDED
puts "Creating Actors..."
puts 

elijah_wood = Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_.jpg", name: "Elijah Wood")


### WHERE THE DIRECTORS ARE SEEDED
puts "Creating Directors..."
puts 

peter_jackson = Director.create!(name: "Peter Jackson")


### WHERE THE GENRES ARE SEEDED
puts "Creating Genres..."
puts 

fantasy = Genre.create!(name: "Fantasy")

### WHERE EVERYTHING ASSOCIATED WITH THE MOVIES IS DONE 
puts "Associating All Data..."
puts 

lotr_fellowship.actors << elijah_wood 
lotr_fellowship.directors << peter_jackson 
lotr_fellowship.genres << fantasy 

puts "Done seeding!"