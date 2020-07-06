import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import NavBar from './NavBar';

export default class employeelist extends Component {

    state = {
        list: null
    }

    componentDidMount() {
        fetch('./employees.json')
        .then(response => {
          return response.json();
        })
        .then(result => {
          this.setState({list: result});
          console.log(this.state.list);
        }
        )
      }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>Employee List</h1>
                 {
                     this.state.list ? 
                     <div>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                            this.state.list.map((item, i) => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phoneNo}</td>
                                </tr>
                                
                                )
                         }
                         </tbody>
                         </Table>           
                     </div> : <p>Please Wait...</p>
                        }
            </div>
        );
    }
}
