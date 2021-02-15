// Micro Sistema de Biblioteca 

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você É Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },

        ],
    },
];


// 1. Contar o numero de categorias e o numero de livros em cada categoria
const totalCategories = booksByCategory.length
console.log(totalCategories);

for(let  category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// 2. Contar o numero de autores

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}


countAuthors()

// 3. Monstrar livro por nome do autor

function booksofAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
               
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`) // join transforma Array em String pode-se acrescentar espaço ou virgula etc...
}


booksofAuthor('Augusto Cury')
