import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import * as q from '../queries/queries';
import BookDetails from './BookDetails';
import { Container, Row, Col } from 'reactstrap';

class BookList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selected: null
        }
    }

    displyaBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books..</div>)
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }}>{book.name}</li>
                );
            });
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="5">
                        <ul>
                            {this.displyaBooks()}
                        </ul>

                    </Col>
                    <Col>
                        <BookDetails bookId={this.state.selected} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default graphql(q.getBooksQuery)(BookList);