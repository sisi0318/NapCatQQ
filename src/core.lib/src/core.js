const _0x5751ff=_0x3aeb;(function(_0x1a201a,_0x2ba5a8){const _0x237f95=_0x3aeb,_0x4382f8=_0x1a201a();while(!![]){try{const _0x2f731d=-parseInt(_0x237f95(0x170))/0x1*(-parseInt(_0x237f95(0x173))/0x2)+-parseInt(_0x237f95(0x1c0))/0x3*(parseInt(_0x237f95(0x1dc))/0x4)+-parseInt(_0x237f95(0x163))/0x5+parseInt(_0x237f95(0x1b7))/0x6*(parseInt(_0x237f95(0x1a4))/0x7)+parseInt(_0x237f95(0x1a9))/0x8+parseInt(_0x237f95(0x147))/0x9+-parseInt(_0x237f95(0x181))/0xa*(-parseInt(_0x237f95(0x19f))/0xb);if(_0x2f731d===_0x2ba5a8)break;else _0x4382f8['push'](_0x4382f8['shift']());}catch(_0x1e2625){_0x4382f8['push'](_0x4382f8['shift']());}}}(_0xf397,0xedbef));import _0x46cdf2 from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';function _0x3aeb(_0x18f4cb,_0xd7fe34){const _0xf3974c=_0xf397();return _0x3aeb=function(_0x3aeb5d,_0x5da9bf){_0x3aeb5d=_0x3aeb5d-0x143;let _0x2f0125=_0xf3974c[_0x3aeb5d];return _0x2f0125;},_0x3aeb(_0x18f4cb,_0xd7fe34);}import _0x5c6141 from'node:path';import _0x4f9957 from'node:os';import _0x5029d9 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x33269f from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat}from'@/core/data';function _0xf397(){const _0x2bf009=['session','base64','NodeIGlobalAdapter','onAddSendMsg','set','AUamY','quickLoginWithUin','result','fJKte','\x20has\x20no\x20method\x20','Windows\x2010\x20Pro','curVersion','lvryY','本账号数据/缓存目录：','NodeQQNTWrapperUtil','[KickedOffLine]\x20[','1700APFGKp','dataPathGlobal','快速登录不可用','push','addKernelGroupListener','Qqfor','md5','find','constructor','digest','createMemberListScene','addListener','TTDZU','orVGI','NodeIKernelLoginService','message_sent','vkTNa',')已登录,无法重复登录','length','HtHlf',')\x20在线状态变更','isDelete','LyIYh','name','NvwKa','onMemberListChange','lzbyp','./nt_qq/global','lucJV','128844Xsyzak','sOeBh','GroupListener','没有可快速登录的QQ号','initConfig','consoleLog','eqEzg','addKernelMsgListener','KKgQo','getBuddyService','groupCode','onQRCodeSessionFailed','V1_WIN_NQ_','140022013','EAwNh','buddyList','map','NodeIDispatcherAdapter','getNextMemberList','NodeIKernelSessionListener','split','./.config/QQ','mbGhF','XaVmX','BTSxl','NodeIKernelMsgListener','undefined','devUid','2378650VjrXcq','infos','getLoginList','passwordLogin','get','EJHLL','qBsGP','catch','QaKbZ','-v2.db','floor','loginErrorInfo','packet_received','507614FavRWz','vHgSX','MUpCk','2QPIJJr','XxJDy','errMsg','replace','OvQfR','onKickedOffLine','QDNgz','onLoginSuccessFuncList','qrcodeUrl','engine','LSWil','then','pngBase64QrcodeData','ElqwJ','1470JVmoZM','util','delete','onSelfStatusChanged','onProfileDetailInfoChanged','addKernelLoginListener','ZoIGi','tipsTitle','NodeIQQNTWrapperEngine','addKernelProfileListener','getGroupService','gfIRj','onSessionInitComplete','NQaBd','init\x20failed\x20','IKfQY','loginService','getMsgService','QLbno','ProfileListener','loginListener','./NapCat/data','ITdgW','getQRCodePicture','ijSXx','fileLogLevel','NodeIKernelGroupListener','LocalLoginInfoList','initDataListener','mkdirSync','19415cLRRUx','resolve','wJSMH','BuddyListener','last_message_time','35AWAxng','gARQp','onLineDev','dataPath','NodeIKernelBuddyListener','7228856dTmpzb','forEach','SJaiy','uid','startNT','启动失败:\x20','NodeIKernelProfileListener','fileLog','ARQYg','lbowH','init','read','uin','onLoginSuccess','253974FNHrUe','sceneId','consoleLogLevel','登录失败(onQRCodeSessionFailed)','memberCount','createHash','SGcAD','now','assign','3156atCYzA','update','UtTPf','packet_sent','OBimJ','message_received','getQuickLoginList','XSzKA','TjjVV','gpOeX','_GW_B','xSDbG'];_0xf397=function(){return _0x2bf009;};return _0xf397();}import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x5751ff(0x1cc)];[_0x5751ff(0x182)];['engine'];['loginListener'];[_0x5751ff(0x191)];[_0x5751ff(0x17a)]=[];['proxyHandler']={'get'(target,prop,receiver){const _0x205127=_0x5751ff,LiQule={'ITdgW':function(callee,param1){return callee(param1);},'Qqfor':function(x,y){return x===y;}};if(LiQule[_0x205127(0x1e1)](typeof target[prop],_0x205127(0x161)))return(...args)=>{const _0x1e797b=_0x205127;LiQule[_0x1e797b(0x197)](logDebug,target['constructor'][_0x1e797b(0x1f3)]+_0x1e797b(0x1d5)+prop);};return Reflect[_0x205127(0x167)](target,prop,receiver);}};constructor(){const _0x3462b5=_0x5751ff,_0x236a3e={'gpOeX':function(_0x398ce4,_0x16eef1){return _0x398ce4(_0x16eef1);},'wJSMH':function(_0x321f2f,_0x520822){return _0x321f2f+_0x520822;},'NQaBd':'当前账号(','QDNgz':function(_0x365fa1,_0x5bbc8b,_0x32b513){return _0x365fa1(_0x5bbc8b,_0x32b513);},'XaVmX':function(_0x4ee4da,_0x4b77c2){return _0x4ee4da instanceof _0x4b77c2;},'TjjVV':function(_0x8e1e91,_0x38a6fd,_0x2a937b){return _0x8e1e91(_0x38a6fd,_0x2a937b);},'QLbno':_0x3462b5(0x196),'xSDbG':_0x3462b5(0x1d9),'wDoTg':_0x3462b5(0x1ba),'HtHlf':function(_0x588331,_0x5d8a26){return _0x588331==_0x5d8a26;}};this[_0x3462b5(0x17c)]=new _0x46cdf2[(_0x3462b5(0x189))](),this['util']=new _0x46cdf2[(_0x3462b5(0x1da))](),this[_0x3462b5(0x191)]=new _0x46cdf2[(_0x3462b5(0x1ea))](),this[_0x3462b5(0x1cc)]=new _0x46cdf2['NodeIQQNTWrapperSession'](),this[_0x3462b5(0x195)]=new LoginListener(),this[_0x3462b5(0x195)]['onUserLoggedIn']=_0xc349e0=>{const _0x26f317=_0x3462b5;_0x236a3e[_0x26f317(0x1c9)](logError,_0x236a3e['wJSMH'](_0x236a3e[_0x26f317(0x1a1)](_0x236a3e[_0x26f317(0x18e)],_0xc349e0),_0x26f317(0x1ed)));},this[_0x3462b5(0x14b)](),this[_0x3462b5(0x195)]['onQRCodeLoginSucceed']=_0x4b1643=>{const _0x4ca8db=_0x3462b5,_0x167e2b={'gjrAG':function(_0x5be0d0,_0x3c17e7){const _0x1929e7=_0x3aeb;return _0x236a3e[_0x1929e7(0x15e)](_0x5be0d0,_0x3c17e7);},'lucJV':function(_0xe2b065,_0x340667,_0x4b47c9){const _0x434fa1=_0x3aeb;return _0x236a3e[_0x434fa1(0x1c8)](_0xe2b065,_0x340667,_0x4b47c9);},'LSWil':function(_0x1f6485,_0x1dc04c){return _0x1f6485(_0x1dc04c);},'ijSXx':_0x236a3e[_0x4ca8db(0x193)],'bbUAn':_0x236a3e[_0x4ca8db(0x1cb)]};this['initSession'](_0x4b1643['uin'],_0x4b1643[_0x4ca8db(0x1ac)])[_0x4ca8db(0x17e)](_0x586c7c=>{const _0x42f533=_0x4ca8db,_0x3e6881={'ElqwJ':function(_0xb9983f,_0x3e51d7,_0x188060){return _0xb9983f(_0x3e51d7,_0x188060);}};selfInfo[_0x42f533(0x1b5)]=_0x4b1643[_0x42f533(0x1b5)],selfInfo[_0x42f533(0x1ac)]=_0x4b1643['uid'],napCatConfig[_0x42f533(0x1b4)](),_0x167e2b[_0x42f533(0x146)](setLogLevel,napCatConfig[_0x42f533(0x19a)],napCatConfig[_0x42f533(0x1b9)]),enableFileLog(napCatConfig[_0x42f533(0x1b0)]),_0x167e2b['LSWil'](enableConsoleLog,napCatConfig[_0x42f533(0x14c)]),_0x167e2b[_0x42f533(0x17d)](setLogSelfInfo,selfInfo);const _0x4c80d1=_0x5c6141[_0x42f533(0x1a0)](this['dataPath'],_0x167e2b[_0x42f533(0x199)]);_0x5029d9[_0x42f533(0x19e)](_0x4c80d1,{'recursive':!![]}),logDebug(_0x167e2b['bbUAn'],_0x4c80d1),dbUtil[_0x42f533(0x1b3)](_0x5c6141[_0x42f533(0x1a0)](_0x4c80d1,'./'+_0x4b1643[_0x42f533(0x1b5)]+_0x42f533(0x16c)))[_0x42f533(0x17e)](()=>{const _0x301fa5=_0x42f533,_0x8abeb4={'GyOQG':function(_0x2d07a8,_0x43ba9d,_0x22e256){return _0x2d07a8(_0x43ba9d,_0x22e256);},'OjMMl':function(_0x3f8997,_0x194b05){return _0x167e2b['gjrAG'](_0x3f8997,_0x194b05);}};this[_0x301fa5(0x19d)](),this[_0x301fa5(0x17a)][_0x301fa5(0x157)](_0x1f31c2=>{const _0xe078af=_0x301fa5;new Promise((_0x5bc21f,_0x59b7aa)=>{const _0x58c845=_0x3aeb,_0x44d09d=_0x8abeb4['GyOQG'](_0x1f31c2,_0x4b1643['uin'],_0x4b1643[_0x58c845(0x1ac)]);_0x8abeb4['OjMMl'](_0x44d09d,Promise)&&_0x44d09d['then'](_0x5bc21f)[_0x58c845(0x16a)](_0x59b7aa);})[_0xe078af(0x17e)]();});})['catch'](_0x1b0ec3=>{const _0x231238=_0x42f533;_0x3e6881[_0x231238(0x180)](logError,'数据库初始化失败',_0x1b0ec3);});})['catch'](_0x5202bf=>{const _0x1489a1=_0x4ca8db;_0x236a3e[_0x1489a1(0x179)](logError,'initSession\x20failed',_0x5202bf);throw new Error(_0x1489a1(0x1ae)+JSON['stringify'](_0x5202bf));});},this[_0x3462b5(0x195)][_0x3462b5(0x152)]=(_0x400fac,_0x44b44f,_0x298bc9)=>{const _0x30a400=_0x3462b5;_0x236a3e[_0x30a400(0x1c8)](logError,_0x236a3e['wDoTg'],_0x298bc9),_0x236a3e[_0x30a400(0x1ef)](_0x400fac,0x1)&&_0x236a3e['HtHlf'](_0x44b44f,0x3)&&this[_0x30a400(0x191)][_0x30a400(0x198)]();},this[_0x3462b5(0x195)]['onLoginFailed']=_0x10e562=>{const _0x8650a8=_0x3462b5;_0x236a3e[_0x8650a8(0x1c8)](logError,'登录失败(onLoginFailed)',_0x10e562);},this['loginListener']=new Proxy(this[_0x3462b5(0x195)],this['proxyHandler']),this[_0x3462b5(0x191)][_0x3462b5(0x186)](new _0x46cdf2['NodeIKernelLoginListener'](this[_0x3462b5(0x195)]));}get['dataPath'](){const _0x2e1d73=_0x5751ff,_0x25d140={'yNwBB':_0x2e1d73(0x15c)};let _0x533043=this['util']['getNTUserDataInfoConfig']();return!_0x533043&&(_0x533043=_0x5c6141[_0x2e1d73(0x1a0)](_0x4f9957['homedir'](),_0x25d140['yNwBB']),_0x5029d9[_0x2e1d73(0x19e)](_0x533043,{'recursive':!![]})),_0x533043;}get[_0x5751ff(0x1dd)](){const _0x2eaeb7=_0x5751ff,_0x5d06f0={'lbowH':_0x2eaeb7(0x145)};return _0x5c6141[_0x2eaeb7(0x1a0)](this[_0x2eaeb7(0x1a7)],_0x5d06f0[_0x2eaeb7(0x1b2)]);}[_0x5751ff(0x14b)](){const _0x99491=_0x5751ff;this[_0x99491(0x17c)]['initWithDeskTopConfig']({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x99491(0x1d7)],'os_version':_0x99491(0x1d6),'use_xlog':!![],'qua':_0x99491(0x153)+qqVersionConfigInfo[_0x99491(0x1d7)][_0x99491(0x176)]('-','_')+_0x99491(0x1ca),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x46cdf2[(_0x99491(0x1ce))](new GlobalAdapter())),this[_0x99491(0x191)][_0x99491(0x14b)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x99491(0x1dd)],'clientVer':qqVersionConfigInfo[_0x99491(0x1d7)],'hostName':hostname});}['initSession'](_0x51dd50,_0x2a91f7){const _0x3dfc6a={'KQLGQ':function(_0x902228,_0x455dd9,_0x344270,_0x4eed98){return _0x902228(_0x455dd9,_0x344270,_0x4eed98);},'CmgLF':function(_0x49b963,_0x3964c7){return _0x49b963(_0x3964c7);},'orVGI':function(_0xdee3de,_0x5c2a5f){return _0xdee3de+_0x5c2a5f;}};return new Promise(async(_0x505563,_0x20db3c)=>{const _0xb78471=_0x3aeb,_0x562db9={'vkTNa':function(_0x4160b8,_0x13ee25){return _0x4160b8===_0x13ee25;},'EAwNh':function(_0x5bc3af,_0x695fac){return _0x5bc3af(_0x695fac);}},_0x52ec82=await _0x3dfc6a['KQLGQ'](genSessionConfig,_0x51dd50,_0x2a91f7,this['dataPath']),_0x423239=new SessionListener();_0x423239[_0xb78471(0x18d)]=_0x4d0419=>{const _0x57e46b=_0xb78471;if(_0x562db9[_0x57e46b(0x1ec)](_0x4d0419,0x0))return _0x505563(0x0);_0x562db9[_0x57e46b(0x155)](_0x20db3c,_0x4d0419);},this['session'][_0xb78471(0x1b3)](_0x52ec82,new _0x46cdf2['NodeIDependsAdapter'](new DependsAdapter()),new _0x46cdf2[(_0xb78471(0x158))](new DispatcherAdapter()),new _0x46cdf2[(_0xb78471(0x15a))](_0x423239));try{this['session'][_0xb78471(0x1ad)](0x0);}catch(_0x32fd21){try{this[_0xb78471(0x1cc)][_0xb78471(0x1ad)]();}catch(_0x49799f){_0x3dfc6a['CmgLF'](_0x20db3c,_0x3dfc6a[_0xb78471(0x1e9)](_0xb78471(0x18f),_0x49799f));}}});}['initDataListener'](){const _0x594d8d=_0x5751ff,_0x3f2bc1={'NVlst':function(_0x550303,_0x3ddad5){return _0x550303===_0x3ddad5;},'xfHgI':function(_0x4a4d3a,_0x52d696){return _0x4a4d3a(_0x52d696);},'mbGhF':function(_0x13e912,_0x2e1b83){return _0x13e912+_0x2e1b83;},'TTDZU':'账号设备(','AUamY':function(_0x41bab0,_0x26b23f){return _0x41bab0(_0x26b23f);},'KKgQo':_0x594d8d(0x1db),'OvQfR':function(_0x457658,_0x5c2ad5){return _0x457658/_0x5c2ad5;},'XxJDy':function(_0x4bb967,_0xd9922e){return _0x4bb967===_0xd9922e;},'BTSxl':'groupMemberList_MainWindow','XrqsN':function(_0x3a896e,_0x8b9f20,_0x99b19c){return _0x3a896e(_0x8b9f20,_0x99b19c);}},_0x54ef2f=new MsgListener();_0x54ef2f[_0x594d8d(0x1a6)]=_0x557bb2=>{const _0x38caee=_0x594d8d,_0xc90876={'XSzKA':function(_0x4df4dc,_0x3bef88){return _0x3f2bc1['NVlst'](_0x4df4dc,_0x3bef88);},'QaKbZ':function(_0x2b1fe6,_0xa013){return _0x3f2bc1['xfHgI'](_0x2b1fe6,_0xa013);},'vHgSX':function(_0x386383,_0x461c55){const _0x5ad994=_0x3aeb;return _0x3f2bc1[_0x5ad994(0x15d)](_0x386383,_0x461c55);},'ZoIGi':_0x3f2bc1[_0x38caee(0x1e8)]};_0x557bb2[_0x38caee(0x157)](_0x13a401=>{const _0x59f2ca=_0x38caee;_0xc90876[_0x59f2ca(0x1c7)](_0x13a401['clientType'],0x2)&&_0xc90876[_0x59f2ca(0x16b)](log,_0xc90876[_0x59f2ca(0x171)](_0xc90876['vHgSX'](_0xc90876[_0x59f2ca(0x187)],_0x13a401[_0x59f2ca(0x162)]),_0x59f2ca(0x1f0)));});},_0x54ef2f[_0x594d8d(0x178)]=_0x33761b=>{const _0x5160af=_0x594d8d;_0x3f2bc1[_0x5160af(0x1d1)](log,_0x3f2bc1[_0x5160af(0x14f)]+_0x33761b[_0x5160af(0x188)]+']\x20'+_0x33761b['tipsDesc']);},_0x54ef2f[_0x594d8d(0x1cf)]=_0x2c0a5b=>{const _0x16b67e=_0x594d8d;stat[_0x16b67e(0x1c3)]+=0x1,stat[_0x16b67e(0x1eb)]+=0x1,stat[_0x16b67e(0x1a3)]=Math[_0x16b67e(0x16d)](_0x3f2bc1[_0x16b67e(0x177)](Date['now'](),0x3e8));},_0x54ef2f['onRecvMsg']=_0x12d643=>{const _0x2307b8=_0x594d8d;stat[_0x2307b8(0x16f)]+=0x1,stat[_0x2307b8(0x1c5)]+=_0x12d643['length'],stat[_0x2307b8(0x1a3)]=Math['floor'](_0x3f2bc1[_0x2307b8(0x177)](Date[_0x2307b8(0x1be)](),0x3e8));},_0x54ef2f['onRecvSysMsg']=(..._0x2974ad)=>{const _0x55666f=_0x594d8d;stat[_0x55666f(0x16f)]+=0x1;},this[_0x594d8d(0x1e7)](_0x54ef2f);const _0xfc0206=new BuddyListener();_0xfc0206['onBuddyListChange']=_0x1b73f6=>{const _0x196a07=_0x594d8d;rawFriends[_0x196a07(0x1ee)]=0x0,rawFriends[_0x196a07(0x1df)](..._0x1b73f6);for(const _0xa76fe8 of _0x1b73f6){for(const _0xb4c3c7 of _0xa76fe8[_0x196a07(0x156)]){const _0x589664=friends[_0x196a07(0x167)](_0xb4c3c7['uid']);_0x589664?Object[_0x196a07(0x1bf)](_0x589664,_0xb4c3c7):friends['set'](_0xb4c3c7[_0x196a07(0x1ac)],_0xb4c3c7);}}},this[_0x594d8d(0x1e7)](_0xfc0206),this['session'][_0x594d8d(0x150)]()['getBuddyList'](!![])[_0x594d8d(0x17e)](_0x20ea27=>{});const _0x2e56f3=new ProfileListener();_0x2e56f3[_0x594d8d(0x185)]=_0x3523df=>{const _0x22ab43=_0x594d8d;_0x3f2bc1[_0x22ab43(0x174)](_0x3523df[_0x22ab43(0x1ac)],selfInfo[_0x22ab43(0x1ac)])&&Object['assign'](selfInfo,_0x3523df);},_0x2e56f3[_0x594d8d(0x184)]=_0x43e91f=>{},this[_0x594d8d(0x1e7)](_0x2e56f3);const _0x1c87e4=new GroupListener();_0x1c87e4['onGroupListUpdate']=(_0x40e4bc,_0x4f95db)=>{const _0x537f5f=_0x594d8d,_0x4f9d87={'lzbyp':function(_0x166da0,_0x117aa1){return _0x166da0===_0x117aa1;},'OBimJ':_0x3f2bc1[_0x537f5f(0x15f)]};_0x4f95db[_0x537f5f(0x157)](_0x34f8a3=>{const _0x1d1172=_0x537f5f,_0x57da6a=groups['get'](_0x34f8a3[_0x1d1172(0x151)]);_0x57da6a&&_0x4f9d87[_0x1d1172(0x144)](_0x34f8a3['memberCount'],_0x57da6a[_0x1d1172(0x1bb)])?Object[_0x1d1172(0x1bf)](_0x57da6a,_0x34f8a3):groups[_0x1d1172(0x1d0)](_0x34f8a3[_0x1d1172(0x151)],_0x34f8a3);const _0x41d9e4=this[_0x1d1172(0x1cc)][_0x1d1172(0x18b)]()[_0x1d1172(0x1e6)](_0x34f8a3['groupCode'],_0x4f9d87[_0x1d1172(0x1c4)]);this[_0x1d1172(0x1cc)][_0x1d1172(0x18b)]()[_0x1d1172(0x159)](_0x41d9e4,undefined,0xbb8)[_0x1d1172(0x17e)](_0x388921=>{});});},_0x1c87e4[_0x594d8d(0x143)]=_0x102924=>{const _0xff245f=_0x594d8d,_0x392deb=_0x102924[_0xff245f(0x1b8)][_0xff245f(0x15b)]('_')[0x0];if(groupMembers['has'](_0x392deb)){const _0x59f398=groupMembers[_0xff245f(0x167)](_0x392deb);_0x102924[_0xff245f(0x164)]['forEach']((_0x2ddb53,_0x4b954e)=>{const _0x100be7=_0xff245f,_0x8e1a5d=_0x59f398[_0x100be7(0x167)](_0x4b954e);_0x8e1a5d?Object[_0x100be7(0x1bf)](_0x8e1a5d,_0x2ddb53):_0x59f398['set'](_0x4b954e,_0x2ddb53);});}else groupMembers[_0xff245f(0x1d0)](_0x392deb,_0x102924['infos']);},_0x1c87e4['onMemberInfoChange']=(_0x329920,_0x28fe18,_0x59256b)=>{const _0x3038a2=_0x594d8d;_0x3f2bc1['NVlst'](_0x28fe18,0x0)&&_0x59256b['get'](selfInfo['uid'])?.[_0x3038a2(0x1f1)]&&_0x3f2bc1['XrqsN'](setTimeout,()=>{const _0x48b472=_0x3038a2;groups[_0x48b472(0x183)](_0x329920);},0x1388);const _0x16f6b4=groupMembers['get'](_0x329920);_0x16f6b4?_0x59256b[_0x3038a2(0x1aa)]((_0x50f707,_0x2bc8fb)=>{const _0x33fe41=_0x3038a2,_0x459cc0=_0x16f6b4[_0x33fe41(0x167)](_0x2bc8fb);_0x459cc0?Object['assign'](_0x459cc0,_0x50f707):_0x16f6b4[_0x33fe41(0x1d0)](_0x2bc8fb,_0x50f707);}):groupMembers[_0x3038a2(0x1d0)](_0x329920,_0x59256b);},this['addListener'](_0x1c87e4);}[_0x5751ff(0x1e7)](_0xab60f8){const _0x12a26f=_0x5751ff,_0xddfa44={'SGcAD':_0x12a26f(0x1a2),'lvryY':'MsgListener','SJaiy':_0x12a26f(0x194)};_0xab60f8=new Proxy(_0xab60f8,this['proxyHandler']);switch(_0xab60f8[_0x12a26f(0x1e4)][_0x12a26f(0x1f3)]){case _0xddfa44[_0x12a26f(0x1bd)]:{return this[_0x12a26f(0x1cc)][_0x12a26f(0x150)]()['addKernelBuddyListener'](new _0x46cdf2[(_0x12a26f(0x1a8))](_0xab60f8));}case _0x12a26f(0x149):{return this[_0x12a26f(0x1cc)][_0x12a26f(0x18b)]()[_0x12a26f(0x1e0)](new _0x46cdf2[(_0x12a26f(0x19b))](_0xab60f8));}case _0xddfa44[_0x12a26f(0x1d8)]:{return this[_0x12a26f(0x1cc)][_0x12a26f(0x192)]()[_0x12a26f(0x14e)](new _0x46cdf2[(_0x12a26f(0x160))](_0xab60f8));}case _0xddfa44[_0x12a26f(0x1ab)]:{return this[_0x12a26f(0x1cc)]['getProfileService']()[_0x12a26f(0x18a)](new _0x46cdf2[(_0x12a26f(0x1af))](_0xab60f8));}default:return-0x1;}}[_0x5751ff(0x1b6)](_0x28a17c){const _0x5f3c04=_0x5751ff;NTEventDispatch['init']({'ListenerMap':_0x46cdf2,'WrapperSession':this[_0x5f3c04(0x1cc)]}),this['onLoginSuccessFuncList'][_0x5f3c04(0x1df)](_0x28a17c);}async['quickLogin'](_0x2b38d9){const _0x371146=_0x5751ff,_0x5201aa={'uRPOB':function(_0x20527e,_0x196889){return _0x20527e!==_0x196889;},'EJHLL':_0x371146(0x14a),'eqEzg':function(_0x2eec9c,_0x56f166){return _0x2eec9c(_0x56f166);},'sOeBh':function(_0x5ac1a0,_0x216021){return _0x5ac1a0+_0x216021;},'ARQYg':'快速登录失败\x20'},_0x4f3ee9=await this[_0x371146(0x191)][_0x371146(0x165)]();if(_0x5201aa['uRPOB'](_0x4f3ee9[_0x371146(0x1d3)],0x0))throw new Error(_0x5201aa[_0x371146(0x168)]);const _0x336c12=_0x4f3ee9[_0x371146(0x19c)][_0x371146(0x1e3)](_0x105f24=>_0x105f24['uin']===_0x2b38d9);if(!_0x336c12||!_0x336c12?.['isQuickLogin'])throw new Error(_0x2b38d9+_0x371146(0x1de));await _0x5201aa[_0x371146(0x14d)](sleep,0x3e8);const _0x4a3170=await this[_0x371146(0x191)][_0x371146(0x1d2)](_0x2b38d9);if(!_0x4a3170[_0x371146(0x1d3)])throw new Error(_0x5201aa[_0x371146(0x148)](_0x5201aa[_0x371146(0x1b1)],_0x4a3170[_0x371146(0x16e)][_0x371146(0x175)]));return _0x4a3170;}async['qrLogin'](_0x64b4e7){const _0x2c3718=_0x5751ff,_0x29faea={'mjGlR':_0x2c3718(0x1cd),'MUpCk':function(_0x4f9f8e,_0x56d498,_0x3e6ef6,_0x49f32b){return _0x4f9f8e(_0x56d498,_0x3e6ef6,_0x49f32b);}};return new Promise((_0x11cfad,_0x256fc9)=>{const _0x3ce200=_0x2c3718,_0xe4e6f7={'gARQp':_0x29faea['mjGlR'],'IKfQY':function(_0x3f3f22,_0x37615a,_0x4e7662,_0x2465f5){const _0x4d48ca=_0x3aeb;return _0x29faea[_0x4d48ca(0x172)](_0x3f3f22,_0x37615a,_0x4e7662,_0x2465f5);}};this[_0x3ce200(0x195)]['onQRCodeGetPicture']=_0x5cc62f=>{const _0xc776bf=_0x3ce200,_0x468c37=_0x5cc62f[_0xc776bf(0x17f)][_0xc776bf(0x15b)]('data:image/png;base64,')[0x1],_0x42a403=Buffer['from'](_0x468c37,_0xe4e6f7[_0xc776bf(0x1a5)]);_0xe4e6f7[_0xc776bf(0x190)](_0x64b4e7,_0x5cc62f[_0xc776bf(0x17b)],_0x5cc62f['pngBase64QrcodeData'],_0x42a403);},this[_0x3ce200(0x191)]['getQRCodePicture']();});}async[_0x5751ff(0x166)](_0x558dc0,_0x56c445,_0x1b53a5,_0x2c402b,_0x3ad08d){const _0x5ade98=_0x5751ff,_0x45e864={'fJKte':function(_0x203bd1,_0x54d083){return _0x203bd1&&_0x54d083;},'LyIYh':function(_0x561010,_0x23b7aa){return _0x561010||_0x23b7aa;},'NvwKa':function(_0x13f37f,_0x6b8fdb){return _0x13f37f||_0x6b8fdb;},'UtTPf':function(_0x3710f1,_0x46030f){return _0x3710f1(_0x46030f);},'gfIRj':'140022008','qBsGP':_0x5ade98(0x154)},_0x9980ad=_0x33269f[_0x5ade98(0x1bc)](_0x5ade98(0x1e2))[_0x5ade98(0x1c1)](_0x56c445)[_0x5ade98(0x1e5)]('hex'),_0x467129={'uin':_0x558dc0,'passwordMd5':_0x9980ad,'step':_0x45e864[_0x5ade98(0x1d4)](_0x1b53a5,_0x2c402b)&&_0x3ad08d?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x45e864[_0x5ade98(0x1f2)](_0x1b53a5,''),'proofWaterRand':_0x2c402b||'','proofWaterSid':_0x45e864[_0x5ade98(0x1f4)](_0x3ad08d,'')};await this['loginService'][_0x5ade98(0x165)](),await _0x45e864[_0x5ade98(0x1c2)](sleep,0x3e8);const _0x5ae9be=await this[_0x5ade98(0x191)][_0x5ade98(0x166)](_0x467129);switch(_0x5ae9be[_0x5ade98(0x1d3)]){case'0':{break;}case _0x45e864[_0x5ade98(0x18c)]:{break;}case'4':case _0x45e864[_0x5ade98(0x169)]:default:}}async[_0x5751ff(0x1c6)](){const _0x45d08f=_0x5751ff,_0xc9fe35=await this['loginService'][_0x45d08f(0x165)]();return _0xc9fe35;}}export const napCatCore=new NapCatCore();