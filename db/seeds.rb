#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# structure change datetime to time arguments in order (year month date)

puts "Creating Seeds..."
puts 

### WHERE THE MOVIES ARE SEEDED
puts "Creating Movies..."
puts 

lotr_fellowship = Movie.create!(movie_poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", movie_trailer: "https://www.youtube.com/embed/V75dMMIW2B4", title: "Lord of the Rings: Fellowship of the Ring", summary: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.", awards: "Won 4 Oscars, also with 121 wins & 126 nominations total", run_time: 178, release_date: "December 19, 2001")


### WHERE THE ACTORS ARE SEEDED
puts "Creating Actors..."
puts 

elijah_wood = Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_.jpg", actor_video: "https://www.youtube.com/embed/wLnoXkDZNNI", name: "Elijah Wood", brief_history: "Elijah Wood is an American actor and producer. He is best known for his portrayal of Frodo Baggins in the Lord of the Rings film trilogy and The Hobbit: An Unexpected Journey. Wood made his film debut with a small part in Back to the Future Part II.", accomplishments: "29 wins & 48 nominations", birth_date: "January 28, 1981" )
sean_bean = Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTkzMzc4MDk5OF5BMl5BanBnXkFtZTcwODg3MjUxNw@@._V1_.jpg", actor_video: "https://www.youtube.com/embed/dHHaKtVdfa0", name: 'Sean Bean', brief_history: "Sean Bean is an English actor. After graduating from the Royal Academy of Dramatic Art, Bean made his professional debut in a theatre production of Romeo and Juliet in 1983", accomplishments: "17 wins & 14 nominations", birth_date: "April 17, 1959" )
billy_boyd =Actor.create!(actor_image: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2014/06/GettyImages-459789806.jpg", actor_video: "https://www.youtube.com/embed/07tyg4JZWkA", name: 'Billy Boyd', brief_history: "William Nathan Boyd is a Scottish actor and musician. He played Peregrin 'Pippin' Took in Peter Jackson's epic film trilogy The Lord of the Rings, Barret Bonden in Master and Commander: The Far Side of the World and Glen/Glenda in Seed of Chucky", accomplishments: "9 wins & 10 nominations", birth_date: "August 28, 1968")

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

lotr_fellowship.actors << [elijah_wood, sean_bean, billy_boyd] 
lotr_fellowship.directors << [peter_jackson] 
lotr_fellowship.genres << [fantasy] 

puts "Done seeding!"