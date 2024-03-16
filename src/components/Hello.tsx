import React from "react"
import {Button} from "antd";

interface IProps {
    title: string
}

interface IState {
    count: number
}

export default class Hello extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 1000
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    // public readonly state: Readonly<IState> = {
    //     count: 1000
    // }

    public clickHandler(){
        this.setState({
            count:2000
        })
    }

    public componentDidMount() {
        // fetch()
    }

    public render() {
        const {title} = this.props
        return (
            <div>
                <div>HelloWorld:{title}</div>
                <div>
                    {this.state.count}
                    <Button type={"primary"} onClick={this.clickHandler}>点击</Button>
                </div>
            </div>
        )
    }
}
