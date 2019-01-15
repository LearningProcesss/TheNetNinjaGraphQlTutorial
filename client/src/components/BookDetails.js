import React, { Component } from 'react'
import * as q from '../queries/queries';
import { graphql, compose } from 'react-apollo';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, CardTitle, CardText, CardFooter } from 'reactstrap';

class BookDetails extends Component {

    displayDetails() {
        const { book } = this.props.data;

        if (book) {
            return (
                <Container>
                    <Row>
                        <Col md="9">
                            <Card>
                                <CardHeader>{book.name}</CardHeader>
                                <CardBody>
                                    <CardTitle>{book.author.name}</CardTitle>
                                    <CardText>
                                        <div>
                                            <ul>
                                                {
                                                    book.author.books.map(item => {
                                                        return <li key={item.id}>{item.name}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </CardText>
                                    <Button>Go somewhere</Button>
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    render() {
        return (
            <div>
                {this.displayDetails()}
            </div>
        )
    }
}

export default graphql(q.getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);