import React, { Component } from 'react';

class NHMClassComp extends Component {
    constructor(props) {
        super(props);
        // tạo đối tượng dữ liệu
        this.state = {
            firstName: "Ngo",
            lastName: "Minh",
            userName: "K22CNTT3",
        }
    }

    Member = (props) => {
        return (
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn: {props.age} Tuổi.</h3>
            </div>
        )
    }

    MemberList = () => {
        return (
            <>
                <this.Member fullName="Ngo Hoàng Minh" age="19" />
                <this.Member fullName="Ngo Hoàng Minh" age="21" />
            </>
        )
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class Component Demo</h2>
                <hr />
                <h3>Dữ liệu trong state</h3>
                <h4>Xin chào: {this.state.firstName} {this.state.lastName}</h4>
                <hr />
                <h3>Dữ liệu từ props</h3>
                <p>Company: {this.props.company}</p>
                <p>Course: {this.props.course}</p>
                <hr />
                <this.Member fullName="Ngo Hoàng Minh" age="20" />
                <hr />
                {this.MemberList()}
            </div>
        );
    }
}

export default NHMClassComp;
