import { DrawerScreenOptions } from './types';

// export const drawerScreenOptions: DrawerScreenOptions = {
//     headerShown: false,
// };
export const drawerScreenOptions: DrawerScreenOptions = ()=> {
    return {headerShown: false}
};

export const settingsScreenOptions: DrawerScreenOptions = ()=> {
    return {title: 'Settings'}
};