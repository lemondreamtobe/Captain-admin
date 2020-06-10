import { LoginMode } from './Login';
import { HomeMode } from './Home';
// 一个方法里有多个await调用 以该方式导出的mode会引起编译异常 

export const loginMode = new LoginMode();
export const homeMode = new HomeMode();