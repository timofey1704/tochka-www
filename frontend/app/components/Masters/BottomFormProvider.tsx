import withReduxProvider from '../HOC/withReduxProvider'
import BottomForm from './BottomForm'
import { BottomFormProps } from '@/app/types'

const BottomFormProvider = withReduxProvider<BottomFormProps>(BottomForm)

export default BottomFormProvider
