import React, { Component } from 'react'
import * as q from '../queries/queries';
import { graphql } from 'react-apollo';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


class AddBook extends Component {
    displayAuthors() {
        var data = this.props.data;

        if (data.loading) {

        } else {
            return data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9" >
                        <Form>
                            <FormGroup>
                                <Label for="bookname">Book name</Label>
                                <Input type="text" name="bookname" id="bookname" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="genre">Genre</Label>
                                <Input type="text" name="genre" id="genre" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="authors">Select</Label>
                                <Input type="select" name="authors" id="authors">
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
export default graphql(q.getAuthorsQuery)(AddBook);