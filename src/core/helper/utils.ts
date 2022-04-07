import {useSelector} from 'react-redux';
import { RootState} from '@app/store';
import {useTheme} from '@ui-kitten/components';  




export function isDarkMode(){
    const mode = useSelector((state: RootState) => state.settings.mode);
return mode=='dark'

}
export function getBaseBackGround(){
    const theme = useTheme();
return theme['background-basic-color-1']

}
