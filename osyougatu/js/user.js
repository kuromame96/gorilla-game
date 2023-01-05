Tonyu.klass.define({
  fullName: 'user.Ally',
  shortName: 'Ally',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Ally_main() {
        "use strict";
        var _this=this;
        
        _this.align="center bottom";
        _this.firstPosX=Tonyu.globals.$screenWidth*0.2;
        _this.firstPosY=Tonyu.globals.$screenHeight;
        _this.x=_this.firstPosX;
        _this.y=_this.firstPosY;
        _this.angle=0;
        _this.radisu=5;
        _this.stretch=0;
        _this.zOrder=- 2;
        while (1) {
          Tonyu.checkLoop();
          while (! Tonyu.globals.$playerDamage) {
            Tonyu.checkLoop();
            _this.scaleY=1+(_this.sin(_this.angle)*5)/120;
            _this.angle+=2;
            _this.update();
            
          }
          _this.vibration=10;
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_damage);
          while (_this.vibration>0) {
            Tonyu.checkLoop();
            _this.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
            _this.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
            _this.vibration-=0.5;
            _this.update();
            
          }
          _this.damage=_this.rnd(1,6);
          Tonyu.globals.$plHP-=_this.damage;
          Tonyu.globals.$playerDamage=false;
          new Tonyu.classes.user.DamageLabel({text: _this.damage,x: _this.x,y: _this.y-300});
          
        }
      },
      fiber$main :function _trc_Ally_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.align="center bottom";
        _this.firstPosX=Tonyu.globals.$screenWidth*0.2;
        _this.firstPosY=Tonyu.globals.$screenHeight;
        _this.x=_this.firstPosX;
        _this.y=_this.firstPosY;
        _this.angle=0;
        _this.radisu=5;
        _this.stretch=0;
        _this.zOrder=- 2;
        
        _thread.enter(function _trc_Ally_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=8     ; break; }
            case 2:
              if (!(! Tonyu.globals.$playerDamage)) { __pc=4     ; break; }
              _this.scaleY=1+(_this.sin(_this.angle)*5)/120;
              _this.angle+=2;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _this.vibration=10;
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_damage);
            case 5:
              if (!(_this.vibration>0)) { __pc=7     ; break; }
              _this.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.vibration-=0.5;
              _this.fiber$update(_thread);
              __pc=6;return;
            case 6:
              
              __pc=5;break;
            case 7     :
              
              _this.damage=_this.rnd(1,6);
              Tonyu.globals.$plHP-=_this.damage;
              Tonyu.globals.$playerDamage=false;
              new Tonyu.classes.user.DamageLabel({text: _this.damage,x: _this.x,y: _this.y-300});
              __pc=1;break;
            case 8     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstPosX":{},"firstPosY":{},"angle":{},"radisu":{},"stretch":{},"vibration":{},"damage":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BG',
  shortName: 'BG',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BG_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_bg_takeyabu;
        _this.x=Tonyu.globals.$screenWidth*0.5;
        _this.y=Tonyu.globals.$screenHeight*0.5;
        _this.scaleX=4.5;
      },
      fiber$main :function _trc_BG_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_bg_takeyabu;
        _this.x=Tonyu.globals.$screenWidth*0.5;
        _this.y=Tonyu.globals.$screenHeight*0.5;
        _this.scaleX=4.5;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.DamageLabel',
  shortName: 'DamageLabel',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Label,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_DamageLabel_main() {
        "use strict";
        var _this=this;
        
        _this.size=100;
        while (_this.alpha>=0) {
          Tonyu.checkLoop();
          _this.y-=10;
          _this.alpha-=10;
          _this.update();
          
        }
        _this.die();
      },
      fiber$main :function _trc_DamageLabel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.size=100;
        
        _thread.enter(function _trc_DamageLabel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.alpha>=0)) { __pc=3     ; break; }
              _this.y-=10;
              _this.alpha-=10;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _this.die();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Ending',
  shortName: 'Ending',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Ending_main() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        _this.firstPosX=Tonyu.globals.$screenWidth*0.5;
        _this.firstPosY=Tonyu.globals.$screenHeight*0.5;
        _this.time=0;
        _this.bg=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_atataka_normal_fujisan,scaleX: 10,x: _this.firstPosX,y: _this.fitstPosY});
        while (_this.bg.scaleX>1) {
          Tonyu.checkLoop();
          _this.bg.x=_this.firstPosX;
          _this.bg.y=_this.firstPosY;
          _this.bg.scaleX-=0.1;
          _this.update();
          
        }
        _this.bg.scaleX=1;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_utiotoshi);
        _this.vibration=10;
        while (_this.vibration>0) {
          Tonyu.checkLoop();
          _this.bg.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
          _this.bg.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
          _this.vibration-=0.5;
          _this.update();
          
        }
        Tonyu.globals.$sound.playBGM("$se_urafunk",true);
        new Tonyu.classes.user.Odoriko1;
        new Tonyu.classes.user.Odoriko2;
        while (1) {
          Tonyu.checkLoop();
          if (_this.time%10===0) {
            new Tonyu.classes.user.Kira;
          }
          _this.time+=1;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Ending_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        _this.firstPosX=Tonyu.globals.$screenWidth*0.5;
        _this.firstPosY=Tonyu.globals.$screenHeight*0.5;
        _this.time=0;
        _this.bg=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_atataka_normal_fujisan,scaleX: 10,x: _this.firstPosX,y: _this.fitstPosY});
        
        _thread.enter(function _trc_Ending_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.bg.scaleX>1)) { __pc=3     ; break; }
              _this.bg.x=_this.firstPosX;
              _this.bg.y=_this.firstPosY;
              _this.bg.scaleX-=0.1;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _this.bg.scaleX=1;
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_utiotoshi);
              _this.vibration=10;
            case 4:
              if (!(_this.vibration>0)) { __pc=6     ; break; }
              _this.bg.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.bg.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.vibration-=0.5;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=4;break;
            case 6     :
              
              Tonyu.globals.$sound.playBGM("$se_urafunk",true);
              new Tonyu.classes.user.Odoriko1;
              new Tonyu.classes.user.Odoriko2;
            case 7:
              if (!(1)) { __pc=9     ; break; }
              if (_this.time%10===0) {
                new Tonyu.classes.user.Kira;
              }
              _this.time+=1;
              _this.fiber$update(_thread);
              __pc=8;return;
            case 8:
              
              __pc=7;break;
            case 9     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstPosX":{},"firstPosY":{},"time":{},"bg":{},"fitstPosY":{},"vibration":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Enemy',
  shortName: 'Enemy',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Enemy_main() {
        "use strict";
        var _this=this;
        
        _this.align="center bottom";
        _this.firstPosX=Tonyu.globals.$screenWidth*0.5;
        _this.firstPosY=Tonyu.globals.$screenHeight*0.6;
        _this.x=_this.firstPosX;
        _this.y=_this.firstPosY;
        _this.angle=0;
        _this.stretch=0;
        _this.touch=null;
        _this.alpha=0;
        while (1) {
          Tonyu.checkLoop();
          if (_this.hp<=0) {
            Tonyu.globals.$sound.playSE("$se_collapse");
            while (_this.alpha>0) {
              Tonyu.checkLoop();
              _this.alpha-=10;
              _this.update();
              
            }
            _this.die();
            
          }
          while (! Tonyu.globals.$enemyDamage&&! _this.touch) {
            Tonyu.checkLoop();
            _this.scaleY=_this.scaleX+(_this.sin(_this.angle)*5)/120;
            _this.angle+=2;
            if (! Tonyu.globals.$enemyNotTouch) {
              if (Tonyu.globals.$touches[0].touched===1) {
                _this.touch=true;
                
              }
              
            }
            _this.update();
            
          }
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_damage);
          _this.vibration=10;
          while (_this.vibration>0) {
            Tonyu.checkLoop();
            _this.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
            _this.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
            _this.vibration-=0.5;
            _this.update();
            
          }
          _this.damage=_this.rnd(1,6);
          new Tonyu.classes.user.DamageLabel({x: _this.x,y: _this.y-200,text: _this.damage});
          _this.hp-=_this.damage;
          _this.touch=false;
          Tonyu.globals.$enemyDamage=false;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Enemy_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.align="center bottom";
        _this.firstPosX=Tonyu.globals.$screenWidth*0.5;
        _this.firstPosY=Tonyu.globals.$screenHeight*0.6;
        _this.x=_this.firstPosX;
        _this.y=_this.firstPosY;
        _this.angle=0;
        _this.stretch=0;
        _this.touch=null;
        _this.alpha=0;
        
        _thread.enter(function _trc_Enemy_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=13    ; break; }
              if (!(_this.hp<=0)) { __pc=5     ; break; }
              Tonyu.globals.$sound.playSE("$se_collapse");
            case 2:
              if (!(_this.alpha>0)) { __pc=4     ; break; }
              _this.alpha-=10;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _this.die();
            case 5     :
              
            case 6:
              if (!(! Tonyu.globals.$enemyDamage&&! _this.touch)) { __pc=8     ; break; }
              _this.scaleY=_this.scaleX+(_this.sin(_this.angle)*5)/120;
              _this.angle+=2;
              if (! Tonyu.globals.$enemyNotTouch) {
                if (Tonyu.globals.$touches[0].touched===1) {
                  _this.touch=true;
                  
                }
                
              }
              _this.fiber$update(_thread);
              __pc=7;return;
            case 7:
              
              __pc=6;break;
            case 8     :
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_damage);
              _this.vibration=10;
            case 9:
              if (!(_this.vibration>0)) { __pc=11    ; break; }
              _this.x=_this.firstPosX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.y=_this.firstPosY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*_this.vibration;
              _this.vibration-=0.5;
              _this.fiber$update(_thread);
              __pc=10;return;
            case 10:
              
              __pc=9;break;
            case 11    :
              
              _this.damage=_this.rnd(1,6);
              new Tonyu.classes.user.DamageLabel({x: _this.x,y: _this.y-200,text: _this.damage});
              _this.hp-=_this.damage;
              _this.touch=false;
              Tonyu.globals.$enemyDamage=false;
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=1;break;
            case 13    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstPosX":{},"firstPosY":{},"angle":{},"stretch":{},"touch":{},"hp":{},"vibration":{},"damage":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Gauge',
  shortName: 'Gauge',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Gauge_main() {
        "use strict";
        var _this=this;
        
        _this.angle=0;
        _this.signFirstX=Tonyu.globals.$screenWidth*0.5;
        _this.signFirstY=Tonyu.globals.$screenHeight*0.6;
        _this.guageBG=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_black,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,scaleY: 2,scaleX: 10,alpha: 200});
        _this.okArea=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_red,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,scaleX: 1.5,scaleY: 2,alpha: 200});
        _this.sign=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_white,x: _this.signFirstX,y: _this.signFirstY,scaleY: 2,alpha: 200});
        while (1) {
          Tonyu.checkLoop();
          _this.sign.x=_this.signFirstX+_this.cos(_this.angle)*450;
          _this.crash=_this.okArea.crashTo(_this.sign);
          if (Tonyu.globals.$touches[0].touched===1) {
            if (_this.crash) {
              Tonyu.globals.$enemyDamage=true;
              if (_this.hard) {
                _this.okArea.x=_this.rnd(Tonyu.globals.$screenWidth*0.1,Tonyu.globals.$screenWidth*0.9);
                
              }
              
            } else {
              Tonyu.globals.$playerDamage=true;
              
            }
            
          }
          if (_this.hard) {
            _this.angle+=5;
            
          } else {
            _this.angle+=4.2;
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_Gauge_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.angle=0;
        _this.signFirstX=Tonyu.globals.$screenWidth*0.5;
        _this.signFirstY=Tonyu.globals.$screenHeight*0.6;
        _this.guageBG=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_black,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,scaleY: 2,scaleX: 10,alpha: 200});
        _this.okArea=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_red,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,scaleX: 1.5,scaleY: 2,alpha: 200});
        _this.sign=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_white,x: _this.signFirstX,y: _this.signFirstY,scaleY: 2,alpha: 200});
        
        _thread.enter(function _trc_Gauge_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=3     ; break; }
              _this.sign.x=_this.signFirstX+_this.cos(_this.angle)*450;
              _this.crash=_this.okArea.crashTo(_this.sign);
              if (Tonyu.globals.$touches[0].touched===1) {
                if (_this.crash) {
                  Tonyu.globals.$enemyDamage=true;
                  if (_this.hard) {
                    _this.okArea.x=_this.rnd(Tonyu.globals.$screenWidth*0.1,Tonyu.globals.$screenWidth*0.9);
                    
                  }
                  
                } else {
                  Tonyu.globals.$playerDamage=true;
                  
                }
                
              }
              if (_this.hard) {
                _this.angle+=5;
                
              } else {
                _this.angle+=4.2;
                
              }
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
      clear :function _trc_Gauge_clear() {
        "use strict";
        var _this=this;
        
        while (_this.guageBG.alpha>0) {
          Tonyu.checkLoop();
          _this.guageBG.alpha-=10;
          _this.sign.alpha-=10;
          _this.okArea.alpha-=10;
          _this.update();
          
        }
        _this.guageBG.die();
        _this.sign.die();
        _this.okArea.die();
        _this.die();
        _this.update();
      },
      fiber$clear :function _trc_Gauge_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Gauge_ent_clear(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.guageBG.alpha>0)) { __pc=3     ; break; }
              _this.guageBG.alpha-=10;
              _this.sign.alpha-=10;
              _this.okArea.alpha-=10;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _this.guageBG.die();
              _this.sign.die();
              _this.okArea.die();
              _this.die();
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"clear":{"nowait":false}},"fields":{"angle":{},"signFirstX":{},"signFirstY":{},"guageBG":{},"okArea":{},"sign":{},"crash":{},"hard":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Kira',
  shortName: 'Kira',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Kira_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_kirakira5_tori;
        _this.x=_this.rnd(Tonyu.globals.$screenWidth*0.1,Tonyu.globals.$screenWidth*0.9);
        _this.y=_this.rnd(Tonyu.globals.$screenHeight*0.1,Tonyu.globals.$screenHeight*0.9);
        _this.scaleX=0.5;
        while (1) {
          Tonyu.checkLoop();
          _this.scaleX+=0.05;
          _this.alpha-=5;
          if (_this.alpha<=0) {
            _this.die();
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_Kira_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_kirakira5_tori;
        _this.x=_this.rnd(Tonyu.globals.$screenWidth*0.1,Tonyu.globals.$screenWidth*0.9);
        _this.y=_this.rnd(Tonyu.globals.$screenHeight*0.1,Tonyu.globals.$screenHeight*0.9);
        _this.scaleX=0.5;
        
        _thread.enter(function _trc_Kira_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=3     ; break; }
              _this.scaleX+=0.05;
              _this.alpha-=5;
              if (_this.alpha<=0) {
                _this.die();
              }
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
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Main_main() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$sound.playBGM("$se_dinner",true);
        if (Tonyu.globals.$continuePoint==_this.nil) {
          Tonyu.globals.$continuePoint=false;
          
        }
        Tonyu.globals.$plHP=75;
        if (! Tonyu.globals.$continuePoint) {
          Tonyu.globals.$step=60;
          
        } else {
          Tonyu.globals.$step=30;
          
        }
        Tonyu.globals.$printSize=120;
        Tonyu.globals.$playerDamage=false;
        Tonyu.globals.$enemyDamage=false;
        Tonyu.globals.$enemyNotTouch=false;
        _this.enemySpawn=0;
        _this.enemyAttack=0;
        _this.slowMargin=0;
        _this.bg=new Tonyu.classes.user.BG({zOrder: 1});
        _this.pl=new Tonyu.classes.user.Ally({p: Tonyu.globals.$pat_dance_yorokobi_mai_woman});
        _this.enemy;
        _this.guage;
        _this.plNameText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.7,y: Tonyu.globals.$screenHeight*0.87,text: "MAICO-HAN",size: 120});
        _this.plHPText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.7,y: Tonyu.globals.$screenHeight*0.95,template: "HP: $plHP",size: 100});
        _this.helpText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.08,text: "タッチで前に進む",size: 80});
        _this.stepText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.13,template: "残り歩数: $step",size: 60});
        _this.fill1Width=0;
        _this.fill2Width=Tonyu.globals.$screenWidth;
        _this.panel=new Tonyu.classes.kernel.Panel;
        _this.panel.zOrder=- 1;
        _this.panel.alpha=180;
        _this.bgPanel=new Tonyu.classes.kernel.Panel;
        _this.bgPanel.hide();
        _this.bgPanel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        while (Tonyu.globals.$screenWidth>=_this.fill1Width) {
          Tonyu.checkLoop();
          _this.panel.clearRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
          _this.panel.fillRect(0,0,_this.fill1Width,Tonyu.globals.$screenHeight*0.2);
          _this.fill1Width+=30;
          _this.panel.fillRect(_this.fill2Width,Tonyu.globals.$screenHeight*0.8,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
          _this.fill2Width-=30;
          _this.update();
          
        }
        while (1) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$step<=0) {
            _this.plNameText.hide();
            _this.plHPText.hide();
            _this.helpText.hide();
            _this.stepText.hide();
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_spawn);
            _this.pl.hide();
            _this.updateEx(5);
            _this.pl.show();
            _this.updateEx(5);
            _this.pl.hide();
            _this.updateEx(60);
            _this.loadPage(Tonyu.classes.user.Ending);
            
          }
          while (_this.enemySpawn<6) {
            Tonyu.checkLoop();
            if (Tonyu.globals.$touches[0].touched===1) {
              Tonyu.globals.$sound.playSE("$se_walk");
              _this.bg2=new Tonyu.classes.user.BG({zOrder: 2});
              while (_this.bg.alpha>0) {
                Tonyu.checkLoop();
                _this.bg.scaleX+=0.5;
                _this.bg.alpha-=10;
                _this.update();
                
              }
              _this.bg=_this.bg2;
              _this.bg.zOrder=1;
              Tonyu.globals.$step-=1;
              if (Tonyu.globals.$step>0) {
                _this.enemySpawn=_this.rnd(0,7);
                
              } else {
                _this.enemySpawn=1;
                break;
                
                
              }
              if (! Tonyu.globals.$continuePoint) {
                if (Tonyu.globals.$step<30) {
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_tirin1);
                  new Tonyu.classes.user.DamageLabel({text: "チェックポイント到達！",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
                  Tonyu.globals.$continuePoint=true;
                  
                }
                
              }
              
            }
            _this.update();
            
          }
          while (_this.enemySpawn>0) {
            Tonyu.checkLoop();
            if (_this.enemy==null) {
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_spawn);
              if (Tonyu.globals.$step<=0) {
                Tonyu.globals.$sound.stopBGM();
                _this.updateEx(15);
                _this.bgPanel.show();
                _this.updateEx(5);
                _this.bgPanel.hide();
                _this.updateEx(5);
                _this.bgPanel.show();
                _this.updateEx(30);
                _this.panel.hide();
                Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_71,true);
                _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_en_lastboss,hp: 120,scaleX: 2});
                _this.enemyAttack=1;
                
              } else {
                if (Tonyu.globals.$step<20) {
                  _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_riaru_usagi,hp: 15,scaleX: 2});
                  _this.guage=new Tonyu.classes.user.Gauge;
                  Tonyu.globals.$enemyNotTouch=true;
                  _this.enemyAttack=2;
                  
                } else {
                  if (Tonyu.globals.$step<40) {
                    _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_animal_usagi_gray,hp: 30});
                    _this.enemyAttack=1;
                    
                  } else {
                    _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_usagi_pink,hp: 30});
                    
                  }
                }
              }
              _this.helpText.text="敵が現れた！";
              while (_this.enemy.alpha<=255) {
                Tonyu.checkLoop();
                _this.enemy.alpha+=10;
                _this.update();
                
              }
              _this.enemy.alpha=255;
              _this.helpText.text="タッチして攻撃しろ！";
              _this.update();
              
            }
            if (_this.guage==null&&Tonyu.globals.$step<=0) {
              if (_this.enemy.hp<=60) {
                _this.guage=new Tonyu.classes.user.Gauge({hard: true});
                Tonyu.globals.$enemyNotTouch=true;
                _this.enemyAttack=2;
                
              }
              
            }
            if (_this.enemyAttack===1) {
              _this.helpText.text="人参をタッチで打ち落せ！";
              if (_this.step>0) {
                _this.slowMargin=_this.rnd(0,120);
                
              } else {
                _this.slowMargin=_this.rnd(0,60);
                
              }
              if (_this.slowMargin===1) {
                new Tonyu.classes.user.SlowWeapon;
                
              }
              
            } else {
              if (_this.enemyAttack===2) {
                _this.helpText.text="タイミングを合わせろ！";
                
              }
            }
            if (_this.enemy.hp<=0) {
              if (Tonyu.globals.$step<=0) {
                Tonyu.globals.$sound.stopBGM();
                
              }
              if (_this.guage!=null) {
                _this.guage.clear();
                _this.guage=null;
                
              }
              _this.enemy=null;
              _this.enemySpawn=0;
              Tonyu.globals.$enemyNotTouch=false;
              _this.helpText.text="敵を倒した！";
              _this.updateEx(60);
              
            }
            if (Tonyu.globals.$plHP<=0) {
              Tonyu.globals.$sound.stopBGM();
              _this.plNameText.hide();
              _this.plHPText.hide();
              _this.helpText.hide();
              _this.stepText.hide();
              _this.bgPanel.show();
              if (_this.guage!=null) {
                _this.guage.clear();
                
              }
              _this.enemy.die();
              _this.updateEx(60);
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_collapse);
              while (_this.pl.alpha>0) {
                Tonyu.checkLoop();
                _this.pl.alpha-=10;
                _this.update();
                
              }
              _this.pl.alpha=0;
              _this.updateEx(60);
              new Tonyu.classes.kernel.Label({text: "タッチで再挑戦",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,size: 120});
              while (Tonyu.globals.$touches[0].touched===0) {
                Tonyu.checkLoop();
                _this.update();
                
              }
              _this.loadPage(Tonyu.classes.user.Main);
              
            }
            _this.update();
            
          }
          _this.helpText.text="タッチで前に進む";
          
        }
      },
      fiber$main :function _trc_Main_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$sound.playBGM("$se_dinner",true);
        if (Tonyu.globals.$continuePoint==_this.nil) {
          Tonyu.globals.$continuePoint=false;
          
        }
        Tonyu.globals.$plHP=75;
        if (! Tonyu.globals.$continuePoint) {
          Tonyu.globals.$step=60;
          
        } else {
          Tonyu.globals.$step=30;
          
        }
        Tonyu.globals.$printSize=120;
        Tonyu.globals.$playerDamage=false;
        Tonyu.globals.$enemyDamage=false;
        Tonyu.globals.$enemyNotTouch=false;
        _this.enemySpawn=0;
        _this.enemyAttack=0;
        _this.slowMargin=0;
        _this.bg=new Tonyu.classes.user.BG({zOrder: 1});
        _this.pl=new Tonyu.classes.user.Ally({p: Tonyu.globals.$pat_dance_yorokobi_mai_woman});
        _this.enemy;
        _this.guage;
        _this.plNameText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.7,y: Tonyu.globals.$screenHeight*0.87,text: "MAICO-HAN",size: 120});
        _this.plHPText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.7,y: Tonyu.globals.$screenHeight*0.95,template: "HP: $plHP",size: 100});
        _this.helpText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.08,text: "タッチで前に進む",size: 80});
        _this.stepText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.13,template: "残り歩数: $step",size: 60});
        _this.fill1Width=0;
        _this.fill2Width=Tonyu.globals.$screenWidth;
        _this.panel=new Tonyu.classes.kernel.Panel;
        _this.panel.zOrder=- 1;
        _this.panel.alpha=180;
        _this.bgPanel=new Tonyu.classes.kernel.Panel;
        _this.bgPanel.hide();
        _this.bgPanel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        
        _thread.enter(function _trc_Main_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(Tonyu.globals.$screenWidth>=_this.fill1Width)) { __pc=3     ; break; }
              _this.panel.clearRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.panel.fillRect(0,0,_this.fill1Width,Tonyu.globals.$screenHeight*0.2);
              _this.fill1Width+=30;
              _this.panel.fillRect(_this.fill2Width,Tonyu.globals.$screenHeight*0.8,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.fill2Width-=30;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
            case 4:
              if (!(1)) { __pc=45    ; break; }
              if (!(Tonyu.globals.$step<=0)) { __pc=9     ; break; }
              _this.plNameText.hide();
              _this.plHPText.hide();
              _this.helpText.hide();
              _this.stepText.hide();
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_spawn);
              _this.pl.hide();
              _this.fiber$updateEx(_thread, 5);
              __pc=5;return;
            case 5:
              
              _this.pl.show();
              _this.fiber$updateEx(_thread, 5);
              __pc=6;return;
            case 6:
              
              _this.pl.hide();
              _this.fiber$updateEx(_thread, 60);
              __pc=7;return;
            case 7:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Ending);
              __pc=8;return;
            case 8:
              
            case 9     :
              
            case 10:
              if (!(_this.enemySpawn<6)) { __pc=18    ; break; }
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=16    ; break; }
              Tonyu.globals.$sound.playSE("$se_walk");
              _this.bg2=new Tonyu.classes.user.BG({zOrder: 2});
            case 11:
              if (!(_this.bg.alpha>0)) { __pc=13    ; break; }
              _this.bg.scaleX+=0.5;
              _this.bg.alpha-=10;
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=11;break;
            case 13    :
              
              _this.bg=_this.bg2;
              _this.bg.zOrder=1;
              Tonyu.globals.$step-=1;
              if (!(Tonyu.globals.$step>0)) { __pc=14    ; break; }
              {
                _this.enemySpawn=_this.rnd(0,7);
              }
              __pc=15    ;break;
            case 14    :
              _this.enemySpawn=1;
              __pc=18    ; break;
              
            case 15    :
              
              if (! Tonyu.globals.$continuePoint) {
                if (Tonyu.globals.$step<30) {
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_tirin1);
                  new Tonyu.classes.user.DamageLabel({text: "チェックポイント到達！",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
                  Tonyu.globals.$continuePoint=true;
                  
                }
                
              }
            case 16    :
              
              _this.fiber$update(_thread);
              __pc=17;return;
            case 17:
              
              __pc=10;break;
            case 18    :
              
            case 19:
              if (!(_this.enemySpawn>0)) { __pc=44    ; break; }
              if (!(_this.enemy==null)) { __pc=30    ; break; }
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_spawn);
              if (!(Tonyu.globals.$step<=0)) { __pc=24    ; break; }
              Tonyu.globals.$sound.stopBGM();
              _this.fiber$updateEx(_thread, 15);
              __pc=20;return;
            case 20:
              
              _this.bgPanel.show();
              _this.fiber$updateEx(_thread, 5);
              __pc=21;return;
            case 21:
              
              _this.bgPanel.hide();
              _this.fiber$updateEx(_thread, 5);
              __pc=22;return;
            case 22:
              
              _this.bgPanel.show();
              _this.fiber$updateEx(_thread, 30);
              __pc=23;return;
            case 23:
              
              _this.panel.hide();
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_71,true);
              _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_en_lastboss,hp: 120,scaleX: 2});
              _this.enemyAttack=1;
              __pc=25    ;break;
            case 24    :
              if (Tonyu.globals.$step<20) {
                _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_riaru_usagi,hp: 15,scaleX: 2});
                _this.guage=new Tonyu.classes.user.Gauge;
                Tonyu.globals.$enemyNotTouch=true;
                _this.enemyAttack=2;
                
              } else {
                if (Tonyu.globals.$step<40) {
                  _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_animal_usagi_gray,hp: 30});
                  _this.enemyAttack=1;
                  
                } else {
                  _this.enemy=new Tonyu.classes.user.Enemy({p: Tonyu.globals.$pat_usagi_pink,hp: 30});
                  
                }
              }
            case 25    :
              
              _this.helpText.text="敵が現れた！";
            case 26:
              if (!(_this.enemy.alpha<=255)) { __pc=28    ; break; }
              _this.enemy.alpha+=10;
              _this.fiber$update(_thread);
              __pc=27;return;
            case 27:
              
              __pc=26;break;
            case 28    :
              
              _this.enemy.alpha=255;
              _this.helpText.text="タッチして攻撃しろ！";
              _this.fiber$update(_thread);
              __pc=29;return;
            case 29:
              
            case 30    :
              
              if (_this.guage==null&&Tonyu.globals.$step<=0) {
                if (_this.enemy.hp<=60) {
                  _this.guage=new Tonyu.classes.user.Gauge({hard: true});
                  Tonyu.globals.$enemyNotTouch=true;
                  _this.enemyAttack=2;
                  
                }
                
              }
              if (_this.enemyAttack===1) {
                _this.helpText.text="人参をタッチで打ち落せ！";
                if (_this.step>0) {
                  _this.slowMargin=_this.rnd(0,120);
                  
                } else {
                  _this.slowMargin=_this.rnd(0,60);
                  
                }
                if (_this.slowMargin===1) {
                  new Tonyu.classes.user.SlowWeapon;
                  
                }
                
              } else {
                if (_this.enemyAttack===2) {
                  _this.helpText.text="タイミングを合わせろ！";
                  
                }
              }
              if (!(_this.enemy.hp<=0)) { __pc=32    ; break; }
              if (Tonyu.globals.$step<=0) {
                Tonyu.globals.$sound.stopBGM();
                
              }
              if (_this.guage!=null) {
                _this.guage.clear();
                _this.guage=null;
                
              }
              _this.enemy=null;
              _this.enemySpawn=0;
              Tonyu.globals.$enemyNotTouch=false;
              _this.helpText.text="敵を倒した！";
              _this.fiber$updateEx(_thread, 60);
              __pc=31;return;
            case 31:
              
            case 32    :
              
              if (!(Tonyu.globals.$plHP<=0)) { __pc=42    ; break; }
              Tonyu.globals.$sound.stopBGM();
              _this.plNameText.hide();
              _this.plHPText.hide();
              _this.helpText.hide();
              _this.stepText.hide();
              _this.bgPanel.show();
              if (_this.guage!=null) {
                _this.guage.clear();
                
              }
              _this.enemy.die();
              _this.fiber$updateEx(_thread, 60);
              __pc=33;return;
            case 33:
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_collapse);
            case 34:
              if (!(_this.pl.alpha>0)) { __pc=36    ; break; }
              _this.pl.alpha-=10;
              _this.fiber$update(_thread);
              __pc=35;return;
            case 35:
              
              __pc=34;break;
            case 36    :
              
              _this.pl.alpha=0;
              _this.fiber$updateEx(_thread, 60);
              __pc=37;return;
            case 37:
              
              new Tonyu.classes.kernel.Label({text: "タッチで再挑戦",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,size: 120});
            case 38:
              if (!(Tonyu.globals.$touches[0].touched===0)) { __pc=40    ; break; }
              _this.fiber$update(_thread);
              __pc=39;return;
            case 39:
              
              __pc=38;break;
            case 40    :
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Main);
              __pc=41;return;
            case 41:
              
            case 42    :
              
              _this.fiber$update(_thread);
              __pc=43;return;
            case 43:
              
              __pc=19;break;
            case 44    :
              
              _this.helpText.text="タッチで前に進む";
              __pc=4;break;
            case 45    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"nil":{},"enemySpawn":{},"enemyAttack":{},"slowMargin":{},"bg":{},"pl":{},"enemy":{},"guage":{},"plNameText":{},"plHPText":{},"helpText":{},"stepText":{},"fill1Width":{},"fill2Width":{},"panel":{},"bgPanel":{},"bg2":{},"step":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Odoriko1',
  shortName: 'Odoriko1',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Odoriko1_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_dance_yorokobi_mai_woman;
        _this.x=Tonyu.globals.$screenWidth*- 0.2;
        _this.y=Tonyu.globals.$screenHeight*0.6;
        _this.align="center bottom";
        _this.angle=0;
        _this.parallel("odori");
        while (_this.x<=Tonyu.globals.$screenWidth*0.3) {
          Tonyu.checkLoop();
          _this.x+=10;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Odoriko1_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_dance_yorokobi_mai_woman;
        _this.x=Tonyu.globals.$screenWidth*- 0.2;
        _this.y=Tonyu.globals.$screenHeight*0.6;
        _this.align="center bottom";
        _this.angle=0;
        _this.parallel("odori");
        
        _thread.enter(function _trc_Odoriko1_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.x<=Tonyu.globals.$screenWidth*0.3)) { __pc=3     ; break; }
              _this.x+=10;
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
      odori :function _trc_Odoriko1_odori() {
        "use strict";
        var _this=this;
        
        while (1) {
          Tonyu.checkLoop();
          _this.rotation=_this.sin(_this.angle)*10;
          _this.angle+=3;
          _this.update();
          
        }
      },
      fiber$odori :function _trc_Odoriko1_f_odori(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Odoriko1_ent_odori(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=3     ; break; }
              _this.rotation=_this.sin(_this.angle)*10;
              _this.angle+=3;
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
  decls: {"methods":{"main":{"nowait":false},"odori":{"nowait":false}},"fields":{"angle":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Odoriko2',
  shortName: 'Odoriko2',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Odoriko2_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_dance_yorokobi_mai_man;
        _this.x=Tonyu.globals.$screenWidth*1.2;
        _this.y=Tonyu.globals.$screenHeight*0.95;
        _this.align="center bottom";
        _this.angle=60;
        _this.parallel("odori");
        while (_this.x>=Tonyu.globals.$screenWidth*0.7) {
          Tonyu.checkLoop();
          _this.x-=10;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Odoriko2_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_dance_yorokobi_mai_man;
        _this.x=Tonyu.globals.$screenWidth*1.2;
        _this.y=Tonyu.globals.$screenHeight*0.95;
        _this.align="center bottom";
        _this.angle=60;
        _this.parallel("odori");
        
        _thread.enter(function _trc_Odoriko2_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.x>=Tonyu.globals.$screenWidth*0.7)) { __pc=3     ; break; }
              _this.x-=10;
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
      odori :function _trc_Odoriko2_odori() {
        "use strict";
        var _this=this;
        
        while (1) {
          Tonyu.checkLoop();
          _this.rotation=_this.sin(_this.angle)*10;
          _this.angle+=3;
          _this.update();
          
        }
      },
      fiber$odori :function _trc_Odoriko2_f_odori(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Odoriko2_ent_odori(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=3     ; break; }
              _this.rotation=_this.sin(_this.angle)*10;
              _this.angle+=3;
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
  decls: {"methods":{"main":{"nowait":false},"odori":{"nowait":false}},"fields":{"angle":{}}}
});
Tonyu.klass.define({
  fullName: 'user.SlowWeapon',
  shortName: 'SlowWeapon',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_SlowWeapon_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_ninjin_carrot;
        _this.scaleX=0.05;
        _this.alpha=0;
        _this.x=Tonyu.globals.$screenWidth*(_this.rnd(30,80)*0.01);
        _this.y=Tonyu.globals.$screenHeight*(_this.rnd(30,80)*0.01);
        while (1) {
          Tonyu.checkLoop();
          _this.t=_this.findTouch(1.2);
          if (_this.t) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_utiotoshi);
            _this.die();
            
          }
          _this.rotation+=10;
          _this.alpha+=2;
          _this.scaleX+=0.005;
          if (_this.alpha>=255) {
            Tonyu.globals.$playerDamage=true;
            _this.die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_SlowWeapon_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_ninjin_carrot;
        _this.scaleX=0.05;
        _this.alpha=0;
        _this.x=Tonyu.globals.$screenWidth*(_this.rnd(30,80)*0.01);
        _this.y=Tonyu.globals.$screenHeight*(_this.rnd(30,80)*0.01);
        
        _thread.enter(function _trc_SlowWeapon_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(1)) { __pc=3     ; break; }
              _this.t=_this.findTouch(1.2);
              if (_this.t) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_utiotoshi);
                _this.die();
                
              }
              _this.rotation+=10;
              _this.alpha+=2;
              _this.scaleX+=0.005;
              if (_this.alpha>=255) {
                Tonyu.globals.$playerDamage=true;
                _this.die();
                
              }
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
  decls: {"methods":{"main":{"nowait":false}},"fields":{"t":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Title',
  shortName: 'Title',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Title_main() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        _this.bg=new Tonyu.classes.user.BG;
        _this.panel=new Tonyu.classes.kernel.Panel;
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.panel.alpha=80;
        _this.titleText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3,text: "お正月クエスト",size: 120});
        _this.helpText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,text: "クリックでスタート",size: 80});
        while (Tonyu.globals.$touches[0].touched===0) {
          Tonyu.checkLoop();
          _this.update();
          
        }
        _this.titleText.hide();
        _this.helpText.hide();
        while (_this.panel.alpha>0) {
          Tonyu.checkLoop();
          _this.panel.alpha-=5;
          _this.update();
          
        }
        _this.loadPage(Tonyu.classes.user.Main);
      },
      fiber$main :function _trc_Title_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$Screen.setBGColor("black");
        Tonyu.globals.$Screen.resize(1080,1920);
        _this.bg=new Tonyu.classes.user.BG;
        _this.panel=new Tonyu.classes.kernel.Panel;
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.panel.alpha=80;
        _this.titleText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3,text: "お正月クエスト",size: 120});
        _this.helpText=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,text: "クリックでスタート",size: 80});
        
        _thread.enter(function _trc_Title_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(Tonyu.globals.$touches[0].touched===0)) { __pc=3     ; break; }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _this.titleText.hide();
              _this.helpText.hide();
            case 4:
              if (!(_this.panel.alpha>0)) { __pc=6     ; break; }
              _this.panel.alpha-=5;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=4;break;
            case 6     :
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Main);
              __pc=7;return;
            case 7:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"bg":{},"panel":{},"titleText":{},"helpText":{}}}
});

//# sourceMappingURL=concat.js.map