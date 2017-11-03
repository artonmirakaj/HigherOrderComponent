import React, { Component } from 'react';
import { connect } from 'react-redux';
import authentication from '../reducers/authentication';

export default function(ComposedComponent) {
    class Authentication extends Component {

        // accessing react router context
        // static defines class level property - gives any other application/code gives ability to reference authentication contextTypes
        // Authentication.contextTypes
        static contextTypes = {
            router: React.PropTypes.object
        }

        // if not authentocated, navigate user to root route '/'
        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/')                
            }
        }

        // when its handed a new set of props or be rerendered
        // when user clicks sign out, they shouldnt see resources
        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }
        
        render() {
            return <ComposedComponent {...this.props} />
        }
    }
    
    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}