import React from 'react'


export default class WaitSpinner extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex spinner-margin justify-content-center align-items-center text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}
