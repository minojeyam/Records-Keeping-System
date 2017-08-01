import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/Students');
    }
    render(){
        const Students = this.props.route.data;
        const id = this.props.params.id;
        const car = Students.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>dob</strong>: {car[0].dob}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Students</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail