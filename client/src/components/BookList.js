import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import * as q from '../queries/queries';


class BookList extends Component {
    displyaBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books..</div>)
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                );
            });
        }
    }
    render() {
        console.log(this.props);

        return (
            <div>
                <ul>
                    {this.displyaBooks()}
                </ul>
            </div>
        )
    }
}

export default graphql(q.getBooksQuery)(BookList);