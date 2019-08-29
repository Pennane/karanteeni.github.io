'use strict';

class Month extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            month: this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        }
    }
    render() {
        return (
            <div className='card bg-transparent border-gold'>
                <div class='card-header' id={this.props.month + '_1'}>
                    <h5 class='mb-0'>
                        <button className='btn btn-link' type='button' data-toggle='collapse' data-target={'#' + this.props.month} aria-expanded='false' aria-controls={this.props.month}>
                        {this.props.btntext}
                        </button>
                    </h5>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class Changebody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            class: this.props.class,
            month: this.props.month
        }
    }

    render() {
        const showing = this.props.showing
        if (showing) {
            return (
                <div id={this.props.month} className='collapse show' aria-labelledby={this.props.month + '_1'} data-parent='#muutokset'>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            )
        }
        return (
            <div id={this.props.month} className='collapse' aria-labelledby={this.props.month + '_1'} data-parent='#muutokset'>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )

    }
}

class ChangeDate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: this.props.date /* Päivämäärä */
        }
    }

    render() {
        return(
            <p>{this.props.date}</p>
        )
    }
}

class Changelist extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            change: this.props.change
        }
    }

    render() {
        return (
            <li>{this.props.change}</li>
        )
    }
}

class ChangeLog extends React.Component {
    render() {
        return (
            <div className='accordion text-left'>
                <Month month='elokuu2019' btntext='Elokuu 2019'>
                    <Changebody month='elokuu2019' showing>
                        <ChangeDate date='11.08.2019'/>
                        <ul>
                            <Changelist change='Uusi versio ja uudet kujeet. 1.14 on saapunut.'/>
                        </ul>
                    </Changebody>
                </Month>
            </div>
        )
    }
}

ReactDOM.render(<ChangeLog/>, document.getElementById('muutokset'));