const _0x2a3829=_0x3c00;(function(_0x6da9fc,_0x3cfe74){const _0x1a0ab6=_0x3c00,_0x2f3eec=_0x6da9fc();while(!![]){try{const _0x3fca2f=-parseInt(_0x1a0ab6(0x161))/0x1+parseInt(_0x1a0ab6(0x164))/0x2+parseInt(_0x1a0ab6(0x163))/0x3+parseInt(_0x1a0ab6(0x156))/0x4*(parseInt(_0x1a0ab6(0x155))/0x5)+-parseInt(_0x1a0ab6(0x15e))/0x6+parseInt(_0x1a0ab6(0x158))/0x7*(-parseInt(_0x1a0ab6(0x15c))/0x8)+parseInt(_0x1a0ab6(0x154))/0x9;if(_0x3fca2f===_0x3cfe74)break;else _0x2f3eec['push'](_0x2f3eec['shift']());}catch(_0x120d8e){_0x2f3eec['push'](_0x2f3eec['shift']());}}}(_0x55b8,0x2fc38));import _0x4deb7c from'node:path';import{LogLevel}from'@/common/utils/log';import{ConfigBase}from'@/common/utils/ConfigBase';function _0x55b8(){const _0x1ca44c=['4153590AqJKrc','1115lBqsmG','212bOJJOD','uin','896QpdYvZ','consoleLog','napcat_','.json','20120PFFkpt','DEBUG','1406256LvdFIF','fileLogLevel','consoleLogLevel','209011hyIudM','INFO','798279KDzNOi','443050lBaHVi'];_0x55b8=function(){return _0x1ca44c;};return _0x55b8();}import{selfInfo}from'@/core/data';function _0x3c00(_0x13605d,_0x358797){const _0x55b8d8=_0x55b8();return _0x3c00=function(_0x3c0003,_0x351e5f){_0x3c0003=_0x3c0003-0x154;let _0x291a57=_0x55b8d8[_0x3c0003];return _0x291a57;},_0x3c00(_0x13605d,_0x358797);}class Config extends ConfigBase{['fileLog']=!![];[_0x2a3829(0x159)]=!![];[_0x2a3829(0x15f)]=LogLevel[_0x2a3829(0x15d)];[_0x2a3829(0x160)]=LogLevel[_0x2a3829(0x162)];constructor(){super();}['getConfigPath'](){const _0x1f3fd3=_0x2a3829;return _0x4deb7c['join'](this['getConfigDir'](),_0x1f3fd3(0x15a)+selfInfo[_0x1f3fd3(0x157)]+_0x1f3fd3(0x15b));}}export const napCatConfig=new Config();