Tonyu.klass.define({
  fullName: 'user.Init',
  shortName: 'Init',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Init_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Init_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      init :function _trc_Init_init() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$backColor="#faf2ee";
        Tonyu.globals.$fontColor="#88001b";
        Tonyu.globals.$life=3;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$point=0;
        Tonyu.globals.$printSize=100;
      },
      fiber$init :function _trc_Init_f_init(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$backColor="#faf2ee";
        Tonyu.globals.$fontColor="#88001b";
        Tonyu.globals.$life=3;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$point=0;
        Tonyu.globals.$printSize=100;
        
        _thread.retVal=_this;return;
      },
      scrInit :function _trc_Init_scrInit() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$Screen.setBGColor(Tonyu.globals.$backColor);
      },
      fiber$scrInit :function _trc_Init_f_scrInit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$Screen.setBGColor(Tonyu.globals.$backColor);
        
        _thread.retVal=_this;return;
      },
      waitTouch :function _trc_Init_waitTouch() {
        "use strict";
        var _this=this;
        
        _this.update();
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            break;
            
          }
          _this.update();
          
        }
      },
      fiber$waitTouch :function _trc_Init_f_waitTouch(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Init_ent_waitTouch(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
            case 2:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=3     ; break; }
              __pc=5     ; break;
              
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      retry :function _trc_Init_retry() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.loadPage(Tonyu.classes.user.Game);
      },
      fiber$retry :function _trc_Init_f_retry(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Init_ent_retry(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Game);
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"init":{"nowait":false},"scrInit":{"nowait":false},"waitTouch":{"nowait":false},"retry":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.OP',
  shortName: 'OP',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_OP_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.scrInit();
        _this.pl=new Tonyu.classes.user.Player;
        _this.en=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_saru,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3});
        _this.en.hide();
        _this.fukidasi=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_fukidasi,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.55,zOrder: - 10});
        _this.fukidasi.hide();
        _this.text=new Tonyu.classes.kernel.Label({size: 60,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.55,fillStyle: Tonyu.globals.$fontColor,zOrder: - 10});
        _this.text.hide();
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_147,true);
        _this.update();
        while (_this.pl.y>Tonyu.globals.$screenHeight*0.85) {
          Tonyu.checkLoop();
          _this.pl.y+=- 5;
          _this.update();
          
        }
        _this.fukidasi.show();
        _this.text.show();
        _this.text.text="我々は!!";
        _this.waitTouch();
        _this.text.text="キング・ゴリラを!!";
        _this.waitTouch();
        _this.text.text="ついに!!";
        _this.waitTouch();
        _this.text.text="見つけることが!!";
        _this.waitTouch();
        _this.text.text="できなかった!!";
        _this.waitTouch();
        _this.text.text="我々は!!";
        _this.waitTouch();
        _this.text.text="苦虫を噛む!!";
        _this.waitTouch();
        _this.text.text="その思いで!!";
        _this.waitTouch();
        _this.text.text="家路に向かっている!!";
        _this.waitTouch();
        _this.text.hide();
        _this.fukidasi.hide();
        Tonyu.globals.$sound.stopBGM();
        Tonyu.globals.$fillStyle="black";
        Tonyu.globals.$panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.updateEx(60);
        _this.text.show();
        _this.text.fillStyle="white";
        _this.text.text="何事だ!?";
        _this.waitTouch();
        _this.text.hide();
        _this.text.fillStyle=Tonyu.globals.$fontColor;
        Tonyu.globals.$panel.clearRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.bg=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_kurayami,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
        _this.en.show();
        _this.i=0.5;for (; _this.i<20 ; _this.i+=0.1) {
          Tonyu.checkLoop();
          {
            _this.bg.scaleX=_this.i;
            if (_this.bg.alpha>=0) {
              _this.bg.alpha-=10;
              
            } else {
              _this.bg.alpha=0;
              
            }
            _this.update();
          }
        }
        _this.bg.die();
        _this.update();
        _this.text.show();
        _this.fukidasi.show();
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_106,true);
        _this.text.text="!!";
        _this.waitTouch();
        _this.text.text="キング・ゴリラだあああ!!";
        _this.waitTouch();
        _this.text.text="捕まえろおおおおおお!!";
        _this.waitTouch();
        _this.loadPage(Tonyu.classes.user.Game);
      },
      fiber$main :function _trc_OP_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_OP_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$scrInit(_thread);
              __pc=2;return;
            case 2:
              
              _this.pl=new Tonyu.classes.user.Player;
              _this.en=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_saru,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3});
              _this.en.hide();
              _this.fukidasi=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_fukidasi,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.55,zOrder: - 10});
              _this.fukidasi.hide();
              _this.text=new Tonyu.classes.kernel.Label({size: 60,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.55,fillStyle: Tonyu.globals.$fontColor,zOrder: - 10});
              _this.text.hide();
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_147,true);
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
            case 4:
              if (!(_this.pl.y>Tonyu.globals.$screenHeight*0.85)) { __pc=6     ; break; }
              _this.pl.y+=- 5;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=4;break;
            case 6     :
              
              _this.fukidasi.show();
              _this.text.show();
              _this.text.text="我々は!!";
              _this.fiber$waitTouch(_thread);
              __pc=7;return;
            case 7:
              
              _this.text.text="キング・ゴリラを!!";
              _this.fiber$waitTouch(_thread);
              __pc=8;return;
            case 8:
              
              _this.text.text="ついに!!";
              _this.fiber$waitTouch(_thread);
              __pc=9;return;
            case 9:
              
              _this.text.text="見つけることが!!";
              _this.fiber$waitTouch(_thread);
              __pc=10;return;
            case 10:
              
              _this.text.text="できなかった!!";
              _this.fiber$waitTouch(_thread);
              __pc=11;return;
            case 11:
              
              _this.text.text="我々は!!";
              _this.fiber$waitTouch(_thread);
              __pc=12;return;
            case 12:
              
              _this.text.text="苦虫を噛む!!";
              _this.fiber$waitTouch(_thread);
              __pc=13;return;
            case 13:
              
              _this.text.text="その思いで!!";
              _this.fiber$waitTouch(_thread);
              __pc=14;return;
            case 14:
              
              _this.text.text="家路に向かっている!!";
              _this.fiber$waitTouch(_thread);
              __pc=15;return;
            case 15:
              
              _this.text.hide();
              _this.fukidasi.hide();
              Tonyu.globals.$sound.stopBGM();
              Tonyu.globals.$fillStyle="black";
              Tonyu.globals.$panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.fiber$updateEx(_thread, 60);
              __pc=16;return;
            case 16:
              
              _this.text.show();
              _this.text.fillStyle="white";
              _this.text.text="何事だ!?";
              _this.fiber$waitTouch(_thread);
              __pc=17;return;
            case 17:
              
              _this.text.hide();
              _this.text.fillStyle=Tonyu.globals.$fontColor;
              Tonyu.globals.$panel.clearRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.bg=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_kurayami,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
              _this.en.show();
              _this.i=0.5;
            case 18:
              if (!(_this.i<20)) { __pc=21    ; break; }
              _this.bg.scaleX=_this.i;
              if (_this.bg.alpha>=0) {
                _this.bg.alpha-=10;
                
              } else {
                _this.bg.alpha=0;
                
              }
              _this.fiber$update(_thread);
              __pc=19;return;
            case 19:
              
            case 20    :
              _this.i+=0.1;
              __pc=18;break;
            case 21    :
              
              _this.bg.die();
              _this.fiber$update(_thread);
              __pc=22;return;
            case 22:
              
              _this.text.show();
              _this.fukidasi.show();
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_106,true);
              _this.text.text="!!";
              _this.fiber$waitTouch(_thread);
              __pc=23;return;
            case 23:
              
              _this.text.text="キング・ゴリラだあああ!!";
              _this.fiber$waitTouch(_thread);
              __pc=24;return;
            case 24:
              
              _this.text.text="捕まえろおおおおおお!!";
              _this.fiber$waitTouch(_thread);
              __pc=25;return;
            case 25:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Game);
              __pc=26;return;
            case 26:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"pl":{},"en":{},"fukidasi":{},"bg":{},"i":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Player',
  shortName: 'Player',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Player_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_kuruma;
        _this.x=Tonyu.globals.$screenWidth*0.5;
        _this.y=Tonyu.globals.$screenHeight*1.2;
      },
      fiber$main :function _trc_Player_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_kuruma;
        _this.x=Tonyu.globals.$screenWidth*0.5;
        _this.y=Tonyu.globals.$screenHeight*1.2;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Title',
  shortName: 'Title',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_Title_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.scrInit();
        _this.start=false;
        _this.actList=[new Tonyu.classes.kernel.Label({text: "ごりら",size: 300,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.2,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "ver 1.0",size: 100,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.32,yureHaba: 100*0.01}),new Tonyu.classes.kernel.Label({text: "画面タッチかクリックして",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 80*0.01}),new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_saru,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,yureHaba: 300*0.01,scaleX: 0.5}),new Tonyu.classes.kernel.Label({text: "* 素材提供 *\n魔王魂 MidingerZ pixabay",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 80*0.01})];
        _this.parallel("actBuruburu");
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            break;
            
          }
          _this.update();
          
        }
        Tonyu.globals.$sound.stopBGM();
        _this.start=true;
        new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 10,fillStyle: "white"});
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
        _this.update();
        _this.updateEx(30);
        _this.loadPage(Tonyu.classes.user.OP);
      },
      fiber$main :function _trc_Title_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Title_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$scrInit(_thread);
              __pc=2;return;
            case 2:
              
              _this.start=false;
              _this.actList=[new Tonyu.classes.kernel.Label({text: "ごりら",size: 300,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.2,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "ver 1.0",size: 100,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.32,yureHaba: 100*0.01}),new Tonyu.classes.kernel.Label({text: "画面タッチかクリックして",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 80*0.01}),new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_saru,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,yureHaba: 300*0.01,scaleX: 0.5}),new Tonyu.classes.kernel.Label({text: "* 素材提供 *\n魔王魂 MidingerZ pixabay",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 80*0.01})];
              _this.parallel("actBuruburu");
            case 3:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=4     ; break; }
              __pc=6     ; break;
              
            case 4     :
              
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=3;break;
            case 6     :
              
              Tonyu.globals.$sound.stopBGM();
              _this.start=true;
              new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 10,fillStyle: "white"});
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
              _this.fiber$update(_thread);
              __pc=7;return;
            case 7:
              
              _this.fiber$updateEx(_thread, 30);
              __pc=8;return;
            case 8:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.OP);
              __pc=9;return;
            case 9:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      actBuruburu :function _trc_Title_actBuruburu() {
        "use strict";
        var _this=this;
        var a_first_pos_list;
        
        a_first_pos_list = _this.actList.map((function anonymous_879(t) {
          
          return {x: t.x,y: t.y};
        }));
        
        while (true) {
          Tonyu.checkLoop();
          a_first_pos_list.map((function anonymous_977(fp,i) {
            var a;
            
            a = _this.actList[i];
            
            a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
            a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
          }));
          if (_this.start) {
            break;
            
          }
          _this.update();
          
        }
        a_first_pos_list.map((function anonymous_1285(fp,i) {
          var a;
          
          a = _this.actList[i];
          
          a.x=fp.x;
          a.y=fp.y;
        }));
        _this.update();
      },
      fiber$actBuruburu :function _trc_Title_f_actBuruburu(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var a_first_pos_list;
        
        a_first_pos_list = _this.actList.map((function anonymous_879(t) {
          
          return {x: t.x,y: t.y};
        }));
        
        
        _thread.enter(function _trc_Title_ent_actBuruburu(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              a_first_pos_list.map((function anonymous_977(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
                a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
              }));
              if (!(_this.start)) { __pc=2     ; break; }
              __pc=4     ; break;
              
            case 2     :
              
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              a_first_pos_list.map((function anonymous_1285(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x;
                a.y=fp.y;
              }));
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"actBuruburu":{"nowait":false}},"fields":{"start":{},"actList":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Tutorial',
  shortName: 'Tutorial',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_Tutorial_main() {
        "use strict";
        var _this=this;
        
        _this.t=_this.timeStop();
        _this.text="キング・ゴリラを\nタッチorクリックで捕獲しろ!!\n5回捕まえ損なうとOUTだ!!\nそれからたまに出てくる\n一般・ゴリラには注意しろ!!\n奴らは獰猛だぞ!\n\nタッチorクリックでスタート";
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.35,text: _this.text,fillStyle: Tonyu.globals.$fontColor,size: 80,zOrder: - 10});
        _this.waitTouch();
        _this.t.release();
        _this.label.die();
        _this.die();
      },
      fiber$main :function _trc_Tutorial_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Tutorial_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$timeStop(_thread);
              __pc=1;return;
            case 1:
              _this.t=_thread.retVal;
              
              _this.text="キング・ゴリラを\nタッチorクリックで捕獲しろ!!\n5回捕まえ損なうとOUTだ!!\nそれからたまに出てくる\n一般・ゴリラには注意しろ!!\n奴らは獰猛だぞ!\n\nタッチorクリックでスタート";
              _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.35,text: _this.text,fillStyle: Tonyu.globals.$fontColor,size: 80,zOrder: - 10});
              _this.fiber$waitTouch(_thread);
              __pc=2;return;
            case 2:
              
              _this.t.release();
              _this.label.die();
              _this.die();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"t":{},"label":{}}}
});
Tonyu.klass.define({
  fullName: 'user.UI',
  shortName: 'UI',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_UI_main() {
        "use strict";
        var _this=this;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0,zOrder: - 10});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "捕獲: $point匹 取りこぼし: $miss匹\nライフ: $life",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 80,fillStyle: "white"});
        _this.update();
      },
      fiber$main :function _trc_UI_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0,zOrder: - 10});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "捕獲: $point匹 取りこぼし: $miss匹\nライフ: $life",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 80,fillStyle: "white"});
        
        _thread.enter(function _trc_UI_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      clear :function _trc_UI_clear() {
        "use strict";
        var _this=this;
        
        _this.panel.die();
        _this.label.die();
        _this.die();
      },
      fiber$clear :function _trc_UI_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.panel.die();
        _this.label.die();
        _this.die();
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"clear":{"nowait":false}},"fields":{"panel":{},"label":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BaseSaru',
  shortName: 'BaseSaru',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BaseSaru_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_BaseSaru_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      init :function _trc_BaseSaru_init() {
        "use strict";
        var _this=this;
        
        _this.step;
        _this.x=_this.rnd(745*0.5,Tonyu.globals.$screenWidth-745*0.5);
        _this.y=_this.rnd(1102*0.5,Tonyu.globals.$screenHeight-1102*0.5);
        _this.angle=0;
        _this.scaleX=1;
        _this.scale=0.3;
        _this.touching=false;
        _this.on("touch",(function anonymous_216() {
          
          _this.touching=true;
        }));
      },
      fiber$init :function _trc_BaseSaru_f_init(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.step;
        _this.x=_this.rnd(745*0.5,Tonyu.globals.$screenWidth-745*0.5);
        _this.y=_this.rnd(1102*0.5,Tonyu.globals.$screenHeight-1102*0.5);
        _this.angle=0;
        _this.scaleX=1;
        _this.scale=0.3;
        _this.touching=false;
        _this.on("touch",(function anonymous_216() {
          
          _this.touching=true;
        }));
        
        _thread.retVal=_this;return;
      },
      reflesh :function _trc_BaseSaru_reflesh(normal) {
        "use strict";
        var _this=this;
        
        while (! _this.touching) {
          Tonyu.checkLoop();
          _this.y+=- _this.step;
          _this.scaleX=(_this.scale-_this.cos(_this.angle)*_this.scale);
          if (_this.angle>360) {
            if (! normal) {
              Tonyu.globals.$miss++;
            }
            _this.die();
            
          }
          ;
          
          _this.angle+=_this.step;
          _this.update();
          
        }
      },
      fiber$reflesh :function _trc_BaseSaru_f_reflesh(_thread,normal) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_BaseSaru_ent_reflesh(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(! _this.touching)) { __pc=3     ; break; }
              _this.y+=- _this.step;
              _this.scaleX=(_this.scale-_this.cos(_this.angle)*_this.scale);
              if (_this.angle>360) {
                if (! normal) {
                  Tonyu.globals.$miss++;
                }
                _this.die();
                
              }
              ;
              
              _this.angle+=_this.step;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"init":{"nowait":false},"reflesh":{"nowait":false}},"fields":{"step":{},"angle":{},"scale":{},"touching":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Game',
  shortName: 'Game',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_Game_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.scrInit();
        _this.frame=0;
        _this.step=60;
        _this.angleStep=5;
        if (! Tonyu.globals.$sound.getPlayingBGMName()) {
          Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_106,true);
          
        }
        new Tonyu.classes.user.Tutorial;
        _this.ui=new Tonyu.classes.user.UI;
        while (true) {
          Tonyu.checkLoop();
          if (_this.frame%_this.step===0) {
            _this.rnd(0,5)?new Tonyu.classes.user.Saru({step: _this.angleStep}):new Tonyu.classes.user.NormalSaru({step: _this.angleStep});
            
          }
          if (_this.frame%60===0) {
            if (_this.step>35) {
              _this.step--;
              _this.angleStep+=0.1;
              _this.frame=0;
              
            }
            ;
            
            
          }
          if (Tonyu.globals.$life<=0) {
            _this.ui.clear();
            new Tonyu.classes.user.GameOver({hitokotoText: "ゴリラ!",ilust: Tonyu.globals.$pat_gorilla_itimaie,fillStyle: "white"});
            
          }
          if (Tonyu.globals.$miss>=5) {
            _this.ui.clear();
            if (Tonyu.globals.$point<=10) {
              new Tonyu.classes.user.GameOver({hitokotoText: "悲しい",ilust: Tonyu.globals.$pat_saru_hokaku_miss,fillStyle: "black"});
              
            } else {
              new Tonyu.classes.user.GameOver({hitokotoText: "確保!",ilust: Tonyu.globals.$pat_saru_hokaku_yatta,fillStyle: "black"});
              
            }
            
          }
          _this.frame++;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Game_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Game_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$scrInit(_thread);
              __pc=2;return;
            case 2:
              
              _this.frame=0;
              _this.step=60;
              _this.angleStep=5;
              if (! Tonyu.globals.$sound.getPlayingBGMName()) {
                Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_106,true);
                
              }
              new Tonyu.classes.user.Tutorial;
              _this.ui=new Tonyu.classes.user.UI;
            case 3:
              if (_this.frame%_this.step===0) {
                _this.rnd(0,5)?new Tonyu.classes.user.Saru({step: _this.angleStep}):new Tonyu.classes.user.NormalSaru({step: _this.angleStep});
                
              }
              if (_this.frame%60===0) {
                if (_this.step>35) {
                  _this.step--;
                  _this.angleStep+=0.1;
                  _this.frame=0;
                  
                }
                ;
                
                
              }
              if (Tonyu.globals.$life<=0) {
                _this.ui.clear();
                new Tonyu.classes.user.GameOver({hitokotoText: "ゴリラ!",ilust: Tonyu.globals.$pat_gorilla_itimaie,fillStyle: "white"});
                
              }
              if (Tonyu.globals.$miss>=5) {
                _this.ui.clear();
                if (Tonyu.globals.$point<=10) {
                  new Tonyu.classes.user.GameOver({hitokotoText: "悲しい",ilust: Tonyu.globals.$pat_saru_hokaku_miss,fillStyle: "black"});
                  
                } else {
                  new Tonyu.classes.user.GameOver({hitokotoText: "確保!",ilust: Tonyu.globals.$pat_saru_hokaku_yatta,fillStyle: "black"});
                  
                }
                
              }
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=3;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"step":{},"angleStep":{},"ui":{}}}
});
Tonyu.klass.define({
  fullName: 'user.GameOver',
  shortName: 'GameOver',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_GameOver_main() {
        "use strict";
        var _this=this;
        
        _this.t=_this.timeStop();
        _this.hitokotoText;
        _this.ilust;
        _this.fillStyle;
        _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60,zOrder: - 30});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.gari=new Tonyu.classes.kernel.Actor({p: _this.ilust,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.4,scaleX: 4,zOrder: - 30});
        _this.i=_this.gari.scaleX;for (; _this.i>1 ; _this.i+=- 0.1) {
          Tonyu.checkLoop();
          {
            _this.gari.scaleX=_this.i;
            _this.update();
          }
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
        _this.actList=[new Tonyu.classes.kernel.Label({text: _this.hitokotoText,size: 250,fillStyle: _this.fillStyle,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,yureHaba: 3,zOrder: - 30})];
        _this.aFPosList = _this.actList.map((function anonymous_603(a) {
          
          return {x: a.x,y: a.y};
        }));
        
        _this.parallel("actBuru");
        ;
        
        _this.updateEx(30);
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
        new Tonyu.classes.kernel.Label({template: "捕獲数: $point",size: 100,fillStyle: _this.fillStyle,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 0.1,zOrder: - 30});
        _this.updateEx(60);
        new Tonyu.classes.kernel.Label({text: "タッチかクリックしてリトライ",size: 50,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 0.1,zOrder: - 30,fillStyle: _this.fillStyle});
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            _this.retry();
            _this.loadPage(Tonyu.classes.user.Game);
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_GameOver_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_GameOver_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$timeStop(_thread);
              __pc=1;return;
            case 1:
              _this.t=_thread.retVal;
              
              _this.hitokotoText;
              _this.ilust;
              _this.fillStyle;
              _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60,zOrder: - 30});
              _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.gari=new Tonyu.classes.kernel.Actor({p: _this.ilust,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.4,scaleX: 4,zOrder: - 30});
              _this.i=_this.gari.scaleX;
            case 2:
              if (!(_this.i>1)) { __pc=5     ; break; }
              _this.gari.scaleX=_this.i;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
            case 4     :
              _this.i+=- 0.1;
              __pc=2;break;
            case 5     :
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
              _this.actList=[new Tonyu.classes.kernel.Label({text: _this.hitokotoText,size: 250,fillStyle: _this.fillStyle,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,yureHaba: 3,zOrder: - 30})];
              _this.aFPosList = _this.actList.map((function anonymous_603(a) {
                
                return {x: a.x,y: a.y};
              }));
              
              _this.parallel("actBuru");
              ;
              
              _this.fiber$updateEx(_thread, 30);
              __pc=6;return;
            case 6:
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
              new Tonyu.classes.kernel.Label({template: "捕獲数: $point",size: 100,fillStyle: _this.fillStyle,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 0.1,zOrder: - 30});
              _this.fiber$updateEx(_thread, 60);
              __pc=7;return;
            case 7:
              
              new Tonyu.classes.kernel.Label({text: "タッチかクリックしてリトライ",size: 50,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 0.1,zOrder: - 30,fillStyle: _this.fillStyle});
            case 8:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=11    ; break; }
              _this.fiber$retry(_thread);
              __pc=9;return;
            case 9:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Game);
              __pc=10;return;
            case 10:
              
            case 11    :
              
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=8;break;
            case 13    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      actBuru :function _trc_GameOver_actBuru() {
        "use strict";
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          _this.aFPosList.map((function anonymous_722(fp,i) {
            var a;
            
            a = _this.actList[i];
            
            a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
            a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
          }));
          _this.update();
          
        }
      },
      fiber$actBuru :function _trc_GameOver_f_actBuru(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_GameOver_ent_actBuru(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.aFPosList.map((function anonymous_722(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
                a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
              }));
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"actBuru":{"nowait":false}},"fields":{"aFPosList":{},"t":{},"hitokotoText":{},"ilust":{},"panel":{},"gari":{},"i":{},"actList":{}}}
});
Tonyu.klass.define({
  fullName: 'user.NormalSaru',
  shortName: 'NormalSaru',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.BaseSaru],
  methods: function (__superClass) {
    return {
      main :function _trc_NormalSaru_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.p=Tonyu.globals.$pat_gorila+0;
        _this.reflesh(true);
        _this.t=_this.timeStop();
        _this.p=Tonyu.globals.$pat_gorila_ikari;
        _this.zOrder=- 9;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gottuan);
        _this.firstX=Tonyu.globals.$screenWidth*0.5;
        _this.firstY=Tonyu.globals.$screenHeight*0.5;
        _this.scaleX=5;
        _this.animeFrame=30;
        while (_this.animeFrame>0) {
          Tonyu.checkLoop();
          _this.x=_this.firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
          _this.y=_this.firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
          _this.animeFrame--;
          _this.update();
          
        }
        Tonyu.globals.$life--;
        _this.t.release();
        _this.die();
      },
      fiber$main :function _trc_NormalSaru_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_NormalSaru_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.p=Tonyu.globals.$pat_gorila+0;
              _this.fiber$reflesh(_thread, true);
              __pc=2;return;
            case 2:
              
              _this.fiber$timeStop(_thread);
              __pc=3;return;
            case 3:
              _this.t=_thread.retVal;
              
              _this.p=Tonyu.globals.$pat_gorila_ikari;
              _this.zOrder=- 9;
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gottuan);
              _this.firstX=Tonyu.globals.$screenWidth*0.5;
              _this.firstY=Tonyu.globals.$screenHeight*0.5;
              _this.scaleX=5;
              _this.animeFrame=30;
            case 4:
              if (!(_this.animeFrame>0)) { __pc=6     ; break; }
              _this.x=_this.firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
              _this.y=_this.firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
              _this.animeFrame--;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=4;break;
            case 6     :
              
              Tonyu.globals.$life--;
              _this.t.release();
              _this.die();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"t":{},"firstX":{},"firstY":{},"animeFrame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Saru',
  shortName: 'Saru',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.BaseSaru],
  methods: function (__superClass) {
    return {
      main :function _trc_Saru_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.p=Tonyu.globals.$pat_saru;
        _this.reflesh(false);
        _this.p=Tonyu.globals.$pat_saru_hokaku;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_jump);
        _this.firstX=_this.x;
        _this.firstY=_this.y;
        _this.animeFrame=30;
        while (_this.animeFrame>0) {
          Tonyu.checkLoop();
          _this.x=_this.firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
          _this.y=_this.firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
          _this.animeFrame--;
          _this.update();
          
        }
        Tonyu.globals.$point++;
        _this.die();
      },
      fiber$main :function _trc_Saru_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Saru_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.p=Tonyu.globals.$pat_saru;
              _this.fiber$reflesh(_thread, false);
              __pc=2;return;
            case 2:
              
              _this.p=Tonyu.globals.$pat_saru_hokaku;
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_jump);
              _this.firstX=_this.x;
              _this.firstY=_this.y;
              _this.animeFrame=30;
            case 3:
              if (!(_this.animeFrame>0)) { __pc=5     ; break; }
              _this.x=_this.firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
              _this.y=_this.firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*10;
              _this.animeFrame--;
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=3;break;
            case 5     :
              
              Tonyu.globals.$point++;
              _this.die();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"animeFrame":{}}}
});

//# sourceMappingURL=concat.js.map