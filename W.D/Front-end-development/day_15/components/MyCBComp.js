import React from 'react';

class MyCBComp extends React.Component {
    componentDidMount() {
        console.log('MyCBComp componentDidMount');
    }
    render() {
        return (
            <div>
                <input type="checkbox" />
                <label>My Checkbox</label>
            </div>
        );
    }
}

