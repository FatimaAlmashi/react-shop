import React, { Component } from 'react';

class Order extends Component {
    render() {
      return (
       <div className="container">
        <div>logo</div>
        
        <div><ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <button type="button" class="btn btn-danger">delete</button>
    <button type="button" class="btn btn-info">detail</button>

  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <button type="button" class="btn btn-danger">delete</button>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <button type="button" class="btn btn-danger">delete</button>
  </li>
</ul>
<button type="button" class="btn btn-primary">checkout</button>
</div>
  
        </div>
      );
    }
  }

export default Order