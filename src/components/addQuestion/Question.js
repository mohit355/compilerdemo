import React from 'react';

function Question(props) {

    function titleChanged(event) {
        const val = event.target.value;
        props.titleChangeHandler(val);
    }
    function statementChanged(event) {
        const val = event.target.value;
        props.statementChange(val);
    }
    
    return (
        <div>
            <form>
                <label>
                    Title:<input type='text' name='title' onChange={titleChanged}></input>
                </label>
                <br />
                <label>
                    Problem Statement:<textarea name='stmt' onChange={statementChanged}></textarea>
                </label>
            </form>
        </div>
    );
}

export default Question;