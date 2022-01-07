#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# structure change datetime to time arguments in order (year month date)
puts "Destroying Data..."
puts 
Movie.destroy_all 
Actor.destroy_all 
Director.destroy_all 
Genre.destroy_all 
MovieReview.destroy_all 
User.destroy_all 

puts "Finished Destroying Data..."
puts 
puts "Creating Seeds..."
puts 

### WHERE THE MOVIES ARE SEEDED
puts "Creating Movies..."
puts 
Movie.create!(movie_poster: "https://motionarray.imgix.net/preview-902643-6VSxG8mRQNW68Njh-large.jpg?w=1400&q=60&fit=max&auto=format", title: "Test Movie #1", summary: "Testing for Database Purposes", awards: "N/A", run_time: 1, release_date: "January 1, 1900")
Movie.create!(movie_poster: "https://motionarray.imgix.net/preview-902643-6VSxG8mRQNW68Njh-large.jpg?w=1400&q=60&fit=max&auto=format", title: "Test Movie #2", summary: "Testing for Database Purposes", awards: "N/A", run_time: 1, release_date: "January 1, 1900")
Movie.create!(movie_poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", movie_trailer: "https://www.youtube.com/embed/V75dMMIW2B4", title: "Lord of the Rings: Fellowship of the Ring", summary: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.", awards: "Won 4 Oscars, also with 121 wins & 126 nominations total", run_time: 178, release_date: "December 19, 2001", gross_worldwide: "$897,690,072")


### WHERE THE ACTORS ARE SEEDED
puts "Creating Actors..."
puts 

Actor.create!(actor_image: "https://us.123rf.com/450wm/ominaesi/ominaesi1609/ominaesi160900004/62191790-man-medieval-suit-tragic-actor-theater-stage-retro-cartoon-character-vector-illustration.jpg?ver=6", name: "Test Actor #1", brief_history: "Testing for Database Purposes")
Actor.create!(actor_image: "https://us.123rf.com/450wm/ominaesi/ominaesi1609/ominaesi160900004/62191790-man-medieval-suit-tragic-actor-theater-stage-retro-cartoon-character-vector-illustration.jpg?ver=6", name: "Test Actor #2", brief_history: "Testing for Database Purposes")
Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_.jpg", actor_video: "https://www.youtube.com/embed/wLnoXkDZNNI", name: "Elijah Wood", brief_history: "Elijah Wood is an American actor and producer. He is best known for his portrayal of Frodo Baggins in the Lord of the Rings film trilogy and The Hobbit: An Unexpected Journey. Wood made his film debut with a small part in Back to the Future Part II.", accomplishments: "29 wins & 48 nominations", net_worth: "$20 Million", birth_date: "January 28, 1981" )
Actor.create!(actor_image: "https://www.gannett-cdn.com/authoring/2019/05/16/PROC/33097709-2587-4e43-a3a1-654bd4bd4bb5-ROCBrd_03-31-2016_DandC_1_B006__2016_03_30_IMG_GettyImages-46374404_1_1_0KDTT0EH_L786490466_IMG_GettyImages-46374404_1_1_0KDTT0EH.jpg", actor_video: "https://www.youtube.com/embed/A_u9Hc0Yg1o", name: "Sean Astin", brief_history: "Sean Patrick Astin is an American actor. His acting roles include Samwise Gamgee in The Lord of the Rings trilogy, Mikey Walsh in The Goonies, Daniel Ruettiger in Rudy, Doug ...", accomplishments: "Nominated for 1 Oscar. Another 24 wins & 27 nominations.", net_worth: "$10 Million", birth_date: "February 25, 1971")
Actor.create!(actor_image: "https://deadline.com/wp-content/uploads/2018/08/dominic-monaghan.jpg?w=1024", actor_video: "https://www.youtube.com/embed/TE2n2YbGqWE", name: "Dominic Monaghan", brief_history: "Dominic Monaghan is a British actor. He is best known for playing Meriadoc 'Merry' Brandybuck in Peter Jackson's film trilogy The Lord of the Rings, and Charlie Pace on J. J. Abrams' television show Lost.", accomplishments: "Nominated for 1 Primetime Emmy. Another 10 wins & 16 nominations", net_worth: "$12 Million", birth_date: "December 8, 1976")
Actor.create!(actor_image: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2014/06/GettyImages-459789806.jpg", actor_video: "https://www.youtube.com/embed/07tyg4JZWkA", name: 'Billy Boyd', brief_history: "William Nathan Boyd is a Scottish actor and musician. He played Peregrin 'Pippin' Took in Peter Jackson's epic film trilogy The Lord of the Rings, Barret Bonden in Master and Commander: The Far Side of the World and Glen/Glenda in Seed of Chucky", accomplishments: "9 wins & 10 nominations", net_worth: "$6 Million", birth_date: "August 28, 1968")
Actor.create!(actor_image: "https://m.media-amazon.com/images/M/MV5BMTkzMzc4MDk5OF5BMl5BanBnXkFtZTcwODg3MjUxNw@@._V1_.jpg", actor_video: "https://www.youtube.com/embed/dHHaKtVdfa0", name: 'Sean Bean', brief_history: "Sean Bean is an English actor. After graduating from the Royal Academy of Dramatic Art, Bean made his professional debut in a theatre production of Romeo and Juliet in 1983", accomplishments: "17 wins & 14 nominations", net_worth: "$20 Million", birth_date: "April 17, 1959" )
### WHERE THE DIRECTORS ARE SEEDED
puts "Creating Directors..."
puts 

Director.create!(director_image: "http://unblast.com/wp-content/uploads/2020/10/Movie-Director-Vector-Illustration.jpg", name: "Test Director #1", brief_history: "Testing for Database Purposes")
Director.create!(director_image: "http://unblast.com/wp-content/uploads/2020/10/Movie-Director-Vector-Illustration.jpg", name: "Test Director #1", brief_history: "Testing for Database Purposes")
Director.create!(director_image: "https://m.media-amazon.com/images/M/MV5BYjFjOThjMjgtYzM5ZS00Yjc0LTk5OTAtYWE4Y2IzMDYyZTI5XkEyXkFqcGdeQXVyMTMxMTIwMTE0._V1_.jpg", name: "Peter Jackson", birth_date: "October 31, 1961", brief_history: "Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien", accomplishments: "Won 3 Oscars. Another 139 wins & 139 nominations.", net_worth: "$1 Billion")


### WHERE THE GENRES ARE SEEDED
puts "Creating Genres..."
puts 

Genre.create!(genre_picture: "https://thumbs.dreamstime.com/z/movie-genres-icons-vector-10044244.jpg", name: "Test Genre #1", description: "Test for database purposes")
Genre.create!(genre_picture: "https://thumbs.dreamstime.com/z/movie-genres-icons-vector-10044244.jpg", name: "Test Genre #2", description: "Test for database purposes")
Genre.create!(genre_picture: "http://www.rantingdragon.com/wp-content/uploads/big8.jpg", name: "Fantasy", description: "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Its roots are in oral traditions, which then became fantasy literature and drama")

 




 

puts "Done seeding!"