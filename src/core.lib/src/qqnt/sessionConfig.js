(function(_0x103cd6,_0x277383){const _0x4b26fb=_0x4f51,_0x377062=_0x103cd6();while(!![]){try{const _0x38b1b5=-parseInt(_0x4b26fb(0x1b3))/0x1+parseInt(_0x4b26fb(0x1ad))/0x2+parseInt(_0x4b26fb(0x1a8))/0x3*(-parseInt(_0x4b26fb(0x1a4))/0x4)+-parseInt(_0x4b26fb(0x1b7))/0x5*(-parseInt(_0x4b26fb(0x1ae))/0x6)+-parseInt(_0x4b26fb(0x1b2))/0x7*(parseInt(_0x4b26fb(0x1af))/0x8)+parseInt(_0x4b26fb(0x1b6))/0x9+-parseInt(_0x4b26fb(0x1b0))/0xa;if(_0x38b1b5===_0x277383)break;else _0x377062['push'](_0x377062['shift']());}catch(_0x1e373c){_0x377062['push'](_0x377062['shift']());}}}(_0xb71e,0x46a1c));import{appid,qqPkgInfo,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemName,systemVersion}from'@/common/utils/system';import _0x5af569 from'node:path';import _0x29c6c0 from'node:fs';import{randomUUID}from'crypto';export let sessionConfig=null;function _0x4f51(_0x2d5dd8,_0x234025){const _0xb71e7e=_0xb71e();return _0x4f51=function(_0x4f51b3,_0xa2c047){_0x4f51b3=_0x4f51b3-0x1a1;let _0x3b2bee=_0xb71e7e[_0x4f51b3];return _0x3b2bee;},_0x4f51(_0x2d5dd8,_0x234025);}export function genSessionConfig(_0x2b0092,_0x4037e1,_0x584399){const _0x3b8dad=_0x4f51,_0x5de293={'yyBgM':_0x3b8dad(0x1ac),'edCMk':_0x3b8dad(0x1a7),'EAWEz':_0x3b8dad(0x1a5),'ySthY':function(_0x166bc9){return _0x166bc9();},'nDJie':'utf-8'},_0x3a4db3=_0x5af569[_0x3b8dad(0x1a2)](_0x584399,_0x5de293[_0x3b8dad(0x1b5)],_0x5de293[_0x3b8dad(0x1a6)]);console[_0x3b8dad(0x1aa)](_0x3b8dad(0x1a9),_0x3a4db3),_0x29c6c0['mkdirSync'](_0x3a4db3,{'recursive':!![]});const _0x4f864b=_0x5af569[_0x3b8dad(0x1a2)](_0x584399,_0x5de293[_0x3b8dad(0x1b5)],_0x5de293[_0x3b8dad(0x1ab)]);let _0x2c7864=_0x5de293[_0x3b8dad(0x1a1)](randomUUID);try{_0x2c7864=_0x29c6c0[_0x3b8dad(0x1a3)](_0x5af569[_0x3b8dad(0x1a2)](_0x4f864b),_0x5de293['nDJie']);}catch(_0x5d690a){_0x29c6c0['writeFileSync'](_0x5af569[_0x3b8dad(0x1a2)](_0x4f864b),_0x2c7864,_0x5de293[_0x3b8dad(0x1b4)]);}const _0x36cd20={'selfUin':_0x2b0092,'selfUid':_0x4037e1,'desktopPathConfig':{'account_path':_0x584399},'clientVer':qqVersionConfigInfo[_0x3b8dad(0x1b1)],'a2':'','d2':'','d2Key':'','machineId':'','platform':0x3,'platVer':systemVersion,'appid':appid,'rdeliveryConfig':{'appKey':'','systemId':0x0,'appId':'','logicEnvironment':'','platform':0x3,'language':'','sdkVersion':'','userId':'','appVersion':'','osVersion':'','bundleId':'','serverUrl':'','fixedAfterHitKeys':['']},'defaultFileDownloadPath':_0x3a4db3,'deviceInfo':{'guid':_0x2c7864,'buildVer':qqPkgInfo['version'],'localId':0x804,'devName':hostname,'devType':systemName,'vendorName':'','osVer':systemVersion,'vendorOsName':systemName,'setMute':![],'vendorType':0x0},'deviceConfig':'{\x22appearance\x22:{\x22isSplitViewMode\x22:true},\x22msg\x22:{}}'};return sessionConfig=_0x36cd20,console['log'](sessionConfig),_0x36cd20;}function _0xb71e(){const _0x4c4d7a=['2682729IzzXMA','76700tJzNzx','ySthY','join','readFileSync','17732cuyxpW','guid.txt','edCMk','temp','201MqcLgF','downloadPath','log','EAWEz','NapCat','754152gYwDMu','192AWlJHl','527112XMnJNG','4461910KLYJzW','curVersion','7xgDtdi','67638UZtvnY','nDJie','yyBgM'];_0xb71e=function(){return _0x4c4d7a;};return _0xb71e();}