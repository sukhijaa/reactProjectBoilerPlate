import React from 'react';
import PropTypes from 'prop-types';
import './TestItem.scss';

export default class TestItem extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        return (
            <div className={'my-test-class-item-wrapper'}>My Test Class</div>
        );

    }
}