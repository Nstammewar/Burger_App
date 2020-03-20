import React, { Component } from 'react';
import Merge from '../../hoc/Merge';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout  extends Component{
    state={

    }
    sideDrawerClosedHandler = ()=> {

    }
    render(){

        return(
            <Merge>
        <Toolbar />
        <SideDrawer/>
            {/* <div>Toolbar,SideDrawer,Backdrop</div> */}
             <main className={classes.Content}>
                 {this.props.children}
             </main>
         </Merge>
        )
    }
}
    
export default Layout;