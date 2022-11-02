import { useQuery, gql } from '@apollo/client';
import Book from '../Styles/Book';

function Books() {

    interface Book {
        title: string;
        author: string;
        id: number;
        rate?: number;
    }

    const GET_BOOKS = gql`
      query GetBooks {
        books {
          title
          author
          id
          rate
        }
      }
    `;

    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {data.books.map((book: Book) => (
                    <li key={book.id}>
                        <Book>
                            <h1>{book.title}</h1>
                            <p>{book.author}</p>
                            <p>{book.rate}/10</p>
                        </Book>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;