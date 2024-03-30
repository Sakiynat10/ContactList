import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";



class UsersForm extends Component {
  render() {
    const {validated , handleSubmit ,selected , handleValue , user} = this.props;

    return (
      <Form
        className="w-50 mx-auto form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="form-wrapper mb-3" controlId="name">
          <Form.Label className="form-label">First Name</Form.Label>
          <Form.Control
            className="form-input"
            required="required"
            type="text"
            onChange={handleValue}
            value={user.name}
          ></Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-wrapper mb-3" controlId="lastName">
          <Form.Label className="form-label">Last Name</Form.Label>
          <Form.Control
            className="form-input"
            required
            type="text"
            onChange={handleValue}
            value={user.lastName}
          ></Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-wrapper mb-3" controlId="importance">
          <Form.Label className="form-label">Importance</Form.Label>
          <Form.Select onChange={handleValue}  value={user.importance} className="form-wrapper mb-3">
            <option value="Family">Family</option>
            <option value="Friend">Friends</option>
            <option value="Relative">Relatives</option>
        </Form.Select> 
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>      
        <Form.Group className="form-wrapper mb-3" controlId="phoneNumber">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            className="form-input"
            required
            type="text"
            onChange={handleValue}
            value={user.phoneNumber}
          ></Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="info" className="mb-4 add-btn text-white w-100">
          {selected === null ? "Add infos"  : "Save changes"}
        </Button>
      </Form>
    );
  }
}

export default UsersForm;
