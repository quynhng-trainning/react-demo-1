var Component_demo1 = React.createClass({
    getInitialState(){
        return {
            age:25
        };
    },
    render: function(){
        return(
            <div>
                <h2>{ 'FullName: '+ this.props.fistName + ' ' + this.props.lastName}</h2>
                <h2>{ 'Age: '+ this.state.age}</h2>
            </div>);
    }
});


ReactDOM.render(
    <div>
        <h1>Nguyen Cong Quynh</h1>
        <Component_demo1 fistName="Quynh" lastName="Nguyen Cong"/>
    </div>
,document.getElementById('root'));