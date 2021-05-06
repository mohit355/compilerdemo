import React, { useState } from 'react';

function SampleTest(props) {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }
    function outputChangeHandler(event) {
        setOutput(event.target.value);
    }

    function setTest() {
        const inp = input;
        const out = output;
        props.addTest(inp, out);
    }

    return (
        <div>
            <form>
                <label>
                   Hidden Test Input: <textarea name='input' onChange={inputChangeHandler}></textarea>
                </label>
                <label>
                    Hidden Test Output:<textarea name='output' onChange={outputChangeHandler}></textarea>
                </label>
                <button type='reset' onClick={setTest}>Add</button>
            </form>
        </div>
    );
}

export default SampleTest;