const booksData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Classic",
    description: "A powerful story of racial injustice and moral growth, set in the American South during the 1930s.",
    buyLink: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0060935464/"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    description: "A dystopian novel set in a totalitarian society where critical thought is suppressed under a surveillance state.",
    buyLink: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934/"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic",
    description: "A tale of wealth, love, and the American Dream during the Roaring Twenties.",
    buyLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567/"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    description: "A romantic novel that explores themes of class, marriage, and morality in 19th-century England.",
    buyLink: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439518/"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Coming-of-age",
    description: "A coming-of-age novel that explores themes of alienation and the loss of innocence.",
    buyLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487/"
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Magical Realism",
    description: "A magical realist novel that chronicles the history of the fictional town of Macondo.",
    buyLink: "https://www.amazon.com/One-Hundred-Years-Solitude-Gabriel/dp/0060883286/"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: "Dystopian",
    description: "A dystopian novel that explores themes of technology, consumerism, and the loss of individuality.",
    buyLink: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "High Fantasy",
    description: "A high fantasy novel that follows the journey of hobbit Frodo Baggins to destroy the One Ring.",
    buyLink: "https://www.amazon.com/J-R-R-Tolkien-4-Book-Boxed-Set/dp/0345538374/ref=sr_1_3?dib=eyJ2IjoiMSJ9.KoIBs7OgnGORmX4YPPvV8P7uqnVq-ZkKHPGVuEfQwriZfnJKvbpWHnmq32No9URLKjrYHt7qrMl5jAqAr1Y17VOtI-N0sonMc7I_YHqqaKMgLczyS9DJgttqHC7gyQLXH56kaygd6e5zw8MPC49H_A5n0u6IqfnZU9lL9NL7Cf6TPkC5YwlZrHhDEECo3algapbNHnGYrpL4jyslF0_UJGLeRem3n4nYU7ytTHKWWvY.5BycJZsyPC6YKc3-vtslWa3N7OdO4OYpnldry2oUdck&dib_tag=se&keywords=lord+of+the+rings&qid=1749656924&sr=8-3"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    genre: "Psychological",
    description: "A psychological novel that explores themes of morality, guilt, and redemption.",
    buyLink: ""
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    description: "A prequel to The Lord of the Rings, following the adventures of hobbit Bilbo Baggins.",
    buyLink: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X/"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Philosophical Fiction",
    description: "A mystical story about following your dreams and listening to your heart.",
    buyLink: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Dystopian",
    description: "In a dystopian future, teenagers are forced to fight to the death in a televised spectacle.",
    buyLink: "https://www.amazon.com/Hunger-Games-Suzanne-Collins/dp/0439023483/"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    description: "A young wizard discovers his magical heritage and begins his education at Hogwarts School of Witchcraft and Wizardry.",
    buyLink: "https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/1408855658/"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Thriller",
    description: "A murder in the Louvre Museum leads to the discovery of a religious mystery protected by a secret society for two thousand years.",
    buyLink: "https://www.amazon.com/Da-Vinci-Code-Dan-Brown/dp/0307474275/"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    year: 2003,
    genre: "Historical Fiction",
    description: "A story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's tumultuous history.",
    buyLink: "https://www.amazon.com/Kite-Runner-Khaled-Hosseini/dp/159463193X/"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    description: "A journalist and a troubled hacker investigate a wealthy family's dark secrets.",
    buyLink: "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium/dp/0307949486/"
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Post-Apocalyptic",
    description: "A father and son journey through a post-apocalyptic America, struggling to survive.",
    buyLink: "https://www.amazon.com/Road-Cormac-McCarthy/dp/0307387895/"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    year: 2012,
    genre: "Young Adult",
    description: "Two teenagers with cancer fall in love and embark on a journey to meet their favorite author.",
    buyLink: "https://www.amazon.com/Fault-Our-Stars-John-Green/dp/014242417X/"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    year: 2012,
    genre: "Thriller",
    description: "A woman disappears on her fifth wedding anniversary, and her husband becomes the prime suspect.",
    buyLink: "https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378/"
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    year: 2011,
    genre: "Science Fiction",
    description: "An astronaut is stranded on Mars and must use his ingenuity to survive.",
    buyLink: "https://www.amazon.com/Martian-Andy-Weir/dp/0553418025/"
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    year: 1985,
    genre: "Dystopian",
    description: "In a totalitarian society, women are valued only for their reproductive capabilities.",
    buyLink: "https://www.amazon.com/Handmaids-Tale-Margaret-Atwood/dp/038549081X/"
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    description: "A family becomes isolated in a remote hotel for the winter, where supernatural forces influence the father into violence.",
    buyLink: "https://www.amazon.com/Shining-Stephen-King/dp/0307743659/"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    description: "The obsessive quest of Captain Ahab for revenge on the white whale that bit off his leg.",
    buyLink: "https://www.amazon.com/Moby-Dick-Herman-Melville/dp/1503280780/"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    genre: "Historical Fiction",
    description: "A panoramic study of early 19th-century Russian society during the Napoleonic Wars.",
    buyLink: "https://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985/"
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    year: 1922,
    genre: "Modernist",
    description: "A day in the life of Leopold Bloom in Dublin, paralleling the Odyssey.",
    buyLink: "https://www.amazon.com/Ulysses-James-Joyce/dp/1840226358/"
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    year: 1605,
    genre: "Satire",
    description: "The adventures of a man who reads too many chivalric romances and loses his grip on reality.",
    buyLink: "https://www.amazon.com/Quixote-Penguin-Classics-Miguel-Cervantes/dp/0142437239/"
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: 1880,
    genre: "Philosophical",
    description: "A passionate philosophical novel that enters deeply into questions of God, free will, and morality.",
    buyLink: "https://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373/"
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Magical Realism",
    description: "The multi-generational story of the Buendía family in the fictional town of Macondo.",
    buyLink: "https://www.amazon.com/Hundred-Solitude-Harper-Perennial-Classics/dp/0060883286/"
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    year: 1987,
    genre: "Historical Fiction",
    description: "A powerful examination of the legacy of slavery and its impact on a family in post-Civil War Ohio.",
    buyLink: "https://www.amazon.com/Beloved-Toni-Morrison/dp/1400033411/"
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    year: 1982,
    genre: "Epistolary",
    description: "The story of African American women in rural Georgia in the early 20th century.",
    buyLink: "https://www.amazon.com/Color-Purple-Alice-Walker/dp/0156028352/"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    genre: "Gothic",
    description: "A scientist creates a living being from dead tissue, with tragic consequences.",
    buyLink: "https://www.amazon.com/Frankenstein-Mary-Shelley/dp/0486282112/"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Gothic",
    description: "The story of a young governess who falls in love with her mysterious employer.",
    buyLink: "https://www.amazon.com/Jane-Bantam-Classics-Charlotte-Bronte/dp/0553211404/"
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    year: 1847,
    genre: "Gothic",
    description: "A passionate and destructive love story set on the Yorkshire moors.",
    buyLink: "https://www.amazon.com/Wuthering-Heights-Emily-Bronte/dp/0141439556/"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    genre: "Gothic",
    description: "A man remains young while his portrait ages and reflects his moral corruption.",
    buyLink: "https://www.amazon.com/Picture-Dorian-Gray-Oscar-Wilde/dp/0486278077/"
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    year: 1844,
    genre: "Adventure",
    description: "A man wrongfully imprisoned escapes and seeks revenge on those who betrayed him.",
    buyLink: "https://www.amazon.com/Count-Monte-Cristo-Penguin-Classics/dp/0140449264/"
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    year: 1862,
    genre: "Historical Fiction",
    description: "The story of ex-convict Jean Valjean and his redemption in 19th-century France.",
    buyLink: "https://www.amazon.com/Mis%C3%A9rables-Signet-Classics-Victor-Hugo/dp/045141943X/"
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    year: 1877,
    genre: "Realist",
    description: "The tragic story of a married aristocrat and her affair with a wealthy count.",
    buyLink: "https://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002/"
  },
  {
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    year: 1856,
    genre: "Realist",
    description: "A doctor's wife engages in adulterous affairs to escape the banality of provincial life.",
    buyLink: "https://www.amazon.com/Madame-Bovary-Gustave-Flaubert/dp/0140449124/"
  },
  {
    title: "The Odyssey",
    author: "Homer",
    year: -800,
    genre: "Epic",
    description: "The adventures of Odysseus as he tries to return home after the Trojan War.",
    buyLink: "https://www.amazon.com/Odyssey-Homer/dp/0140268863/"
  },
  {
    title: "The Iliad",
    author: "Homer",
    year: -800,
    genre: "Epic",
    description: "The story of the Trojan War and the wrath of Achilles.",
    buyLink: "https://www.amazon.com/Iliad-Homer/dp/0140275363/"
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    year: 1320,
    genre: "Epic",
    description: "A journey through Hell, Purgatory, and Paradise.",
    buyLink: "https://www.amazon.com/Divine-Comedy-Dante-Alighieri/dp/0142437220/"
  },
  {
    title: "Paradise Lost",
    author: "John Milton",
    year: 1667,
    genre: "Epic",
    description: "The biblical story of the Fall of Man, including Satan's temptation of Adam and Eve.",
    buyLink: "https://www.amazon.com/Paradise-Lost-John-Milton/dp/0140424393/"
  },
  {
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
    year: 1400,
    genre: "Poetry",
    description: "A collection of stories told by pilgrims on their way to Canterbury.",
    buyLink: "https://www.amazon.com/Canterbury-Tales-Geoffrey-Chaucer/dp/0140424385/"
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    year: 1600,
    genre: "Tragedy",
    description: "The Prince of Denmark seeks revenge for his father's murder.",
    buyLink: "https://www.amazon.com/Hamlet-Folger-Library-Shakespeare-William/dp/074347712X/"
  },
  {
    title: "Macbeth",
    author: "William Shakespeare",
    year: 1606,
    genre: "Tragedy",
    description: "A Scottish general's ambition leads him to commit regicide.",
    buyLink: "https://www.amazon.com/Macbeth-Folger-Shakespeare-Library-William/dp/"
  }
];

// Add IDs to all books
const books = booksData.map((book, index) => ({
  id: index + 1,
  ...book
}));

export default books;
