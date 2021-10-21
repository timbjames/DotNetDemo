import React from 'react';

import { PersonList } from '@features/person/list.component';

const People: React.FC = () => {
    return (
        <div>
            <h1>People</h1>

            <PersonList />

            <ParentComponent />
        </div>
    );
};

class ParentComponent extends React.Component<{}, {}> {

    private child: React.RefObject<ChildOneComponent>;

    constructor(props: any){
        super(props);

        this.child = React.createRef();
    }

    doSomething = () => {
        this.child.current?.doSomething();
    }

    render(){

        return (
            <div>
                <h1>Parent {Date.now()}</h1>
                <ChildOneComponent ref={this.child} />
                <ChildTwoComponent handleClick={this.doSomething} />
            </div>
        )
    }
};

class ChildOneComponent extends React.Component<{}, {}> {

    public doSomething() {
        alert('here');
    }

    render() {
        return (
            <div>Child One</div>
        );
    }
}

class ChildTwoComponent extends React.Component<{ handleClick: () => void }, {}> {


    render(){
        return (
            <div>Child Two
                <button onClick={() => {
                    this.props.handleClick();
                }}>Click This Button</button>
            </div>
        );
    }
}

export default People;