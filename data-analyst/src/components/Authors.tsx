import { useQuery, gql } from '@apollo/client';

function Authors() {

    interface Author {
        author: string;
        id: number;
      }

      const GET_AUTHORS = gql`
      query GetAuthors {
        authors {
          author
          id
        }
      }
    `;

    const { loading, error, data } = useQuery(GET_AUTHORS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;

    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {data.authors.map((author: Author, index: number) => (
                    <li key={index}>
                        <div className="book">
                            <p>{author.author}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Authors;