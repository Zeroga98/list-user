import React, { Component } from 'react';
import './UserProfile.scss';
import { connect } from 'react-redux';


class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: true
        };
    }

    render() {
        return (
            <div>
                <div>
                    <div className="banner">
                        <div className="d-flex banner-img">
                            <img src={`https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg`} />
                        </div>
                        <div className="info">
                            <div className="d-flex flex-column info-list">
                                <img src={`https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg`} />
                                <span style={{ fontSize: '22px' }}>Información:</span>
                                <span>Año: 2015</span>
                                <span>Generos: accion </span>
                                <span>hola</span>
                            </div>
                            <div className="detail d-flex flex-column mt-5 ml-4">
                                <span className="title">sebastian</span>
                                <span className="genered">accion</span>
                                <span className="ranked">10</span>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = {
};

UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile);

export default UserProfile;
