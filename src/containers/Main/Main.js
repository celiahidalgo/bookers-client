import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "../../containers/Login";
import Home from "../../containers/Home";
import Signup from "../../containers/Signup";
import Footer from "../../components/Footer";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/es/styles'
import { withTheme } from '@material-ui/core/styles';

const bookersTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#304ffe"
        },
        secondary: {
            main: "#ffab00"
        },
    }
});
class Main extends React.Component {
    state = { theme: bookersTheme }
    render() {
        return (
            <MuiThemeProvider theme={this.state.theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Signin} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}
// const Main = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/" component={Signin} />
//             <Route exact path="/home" component={Home} />
//             <Route exact path="/signup" component={Signup} />
//         </Switch>
//         <Footer />
//     </BrowserRouter>
// );

export default withTheme(Main)



