import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        id: 1,
        rate: 4
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        id: 2,
        rate: 5
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        id: 3,
        rate: 5
    }
];
const typeDefs = `#graphql
    type Book {
        title: String
        author: String
        id: Int
        rate: Int
    }

    type Author {
        author: String
        id: Int
    }

    type Query {
        books: [Book]
        authors: [Author]
        bookById(id: Int): Book
    }
`;
const getAuthors = (books) => {
    return books.map(book => {
        return { author: book.author };
    });
};
const resolvers = {
    Query: {
        books: () => books,
        authors: () => getAuthors(books),
        bookById: (parent, args) => books.find(book => book.id === args.id)
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});
console.log(`🚀 Server ready at ${url}`);
