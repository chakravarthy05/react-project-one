import 'bootstrap/dist/css/bootstrap.min.css';

// by using if...else condition
function ConditionRanderingifElse() {
    let element = null;
    let isLoggedIn = false;
        if(isLoggedIn){
           element = <>
            <h3>Welcome to Dashboard Else if</h3>
            <button className='btn btn-danger'  >Log Out</button>
            </>
        } else {
          element =  <>
            <h3>Welcome to Login Page Else if</h3>  
            <button className='btn btn-primary' >Log In</button>
            </>
        }
    return element;
}
// by using ternary operator
function ConditionRanderingTernary() {
    let isLoggedIn = false;
    let element = isLoggedIn ? <> <h4>I Am log in Ternary</h4> </> : <> <h4>I Am log out Ternary</h4> </>;
    return element;
    // return (
    //     isLoggedIn ? 
    //     <>
    //         <h3>Welcome to Dashboard</h3>
    //         <button className='btn btn-danger'  >Log Out</button>
    //     </> 
    //     : 
    //     <>
    //         <h3>Welcome to Login Page</h3>  
    //         <button className='btn btn-primary' >Log In</button>
    //     </>
    // );
}

//by using Short-circuit operator
function ConditionRanderingShortCircuit() {
    let isLoggedIn = false;
    return (
        <>
            <h3>Welcome to Dashboard Short Circuit</h3>
            { isLoggedIn && <button className='btn btn-danger'  >Log Out</button> }
            { !isLoggedIn && <button className='btn btn-primary' >Log In</button> }
        </>
    );
}

// by using variable to store elements
function ConditionRanderingVariable() {
    let isLoggedIn = false;
    let buttonElement = null;
    if(isLoggedIn){
        buttonElement = <button className='btn btn-danger'  >Log Out</button>
    } else {
        buttonElement = <button className='btn btn-primary' >Log In</button>
    }
    return (
        <>
            <h3>Welcome to Dashboard Variable</h3>
            { buttonElement }
        </>
    );

}

export default ConditionRanderingifElse;