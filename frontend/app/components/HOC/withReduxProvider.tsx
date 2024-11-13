import { Provider } from 'react-redux'
import { ComponentType } from 'react'
import store from '../../redux/store'

const withReduxProvider = <P extends object>(Component: ComponentType<P>) => {
  return function WithReduxProvider(props: P) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }
}

export default withReduxProvider
