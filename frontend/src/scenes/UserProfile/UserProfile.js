import React, { Component } from 'react';
import './UserProfile.scss';
import { connect } from 'react-redux';
import userActions from '../../services/user/reducer';
import { Link } from 'react-router-dom';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.props.getUser(this.props.match.params.id);
        this.state = {
            load: true
        };
    }

    componentWillMount() {

    }

    render() {
        const { user } = this.props
        return (
            <div>
                {user &&
                    <div className="banner">
                        <div className="d-flex banner-img">
                            <img src={user.avatar} />
                        </div>
                        <Link to="/" className="logo">
                            <span>Atras</span>
                        </Link>
                        <div className="info">
                            <div className="d-flex flex-column info-list">
                                <img src={user.avatar} />
                                <span className="title">{`${user.first_name} ${user.last_name}`}</span>
                                <span style={{ fontSize: '22px' }}>Información:</span>
                                <span>email: {user.email}</span>
                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user.userProfile
})

const mapDispatchToProps = {
    getUser: userActions.getUser
}


export default connect(mapStateToProps, mapDispatchToProps)((UserProfile));
