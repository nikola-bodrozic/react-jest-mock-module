import React from 'react';

export class Home extends React.PureComponent {
    componentDidMount() {
        this.props.loadMessage();
    }

    render() {
        return (
            <section className="home-section">
                <h2 className="title">Home</h2>
                <div className="message">{this.props.message}</div>
            </section>
        );
    }
}

export default Home;