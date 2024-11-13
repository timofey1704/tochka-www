import withReduxProvider from '../HOC/withReduxProvider'
import TrackFormPopup from './TrackFormPopup'
import { LeadPopupContentProps } from '@/app/types'

const PopupProvider = withReduxProvider<LeadPopupContentProps>(TrackFormPopup)

export default PopupProvider
