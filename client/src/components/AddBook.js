import React, { Component } from 'react'
import * as q from '../queries/queries';
import { graphql, compose } from 'react-apollo';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


class AddBook extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: "",
            genre: "",
            authorId: ""
        }
    }
    displayAuthors() {
        var data = this.props.getAuthorsQuery;

        if (data.loading) {

        } else {
            return data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        }
    }
    submitform(e) {
        e.preventDefault();
        
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: q.getBooksQuery }]
        });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9" >
                        <Form id="addform" onSubmit={this.submitform.bind(this)}>
                            <FormGroup>
                                <Label for="bookname">Book name</Label>
                                <Input onChange={(e) => this.setState({ name: e.target.value })} type="text" name="bookname" id="bookname" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="genre">Genre</Label>
                                <Input onChange={(e) => this.setState({ genre: e.target.value })} type="text" name="genre" id="genre" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="authors">Select</Label>
                                <Input onChange={(e) => this.setState({ authorId: e.target.value })} type="select" name="authors" id="authors">
                                    <option>Select author</option>
                                    {this.displayAuthors()}
                                </Input>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default compose(
    graphql(q.getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(q.addBookMutation, { name: "addBookMutation" })
)(AddBook);