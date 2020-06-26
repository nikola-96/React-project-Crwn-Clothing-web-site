import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style'

const WithSpinner = WrappedComponent => {
    const Spiner = ({ isLoading, ...otherComponent }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer>

                </SpinnerContainer>
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherComponent} />
            )
    }
    return Spiner;
}
export default WithSpinner