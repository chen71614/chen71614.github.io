(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈籠_atlas_1", frames: [[0,0,333,317],[416,0,82,229],[335,0,79,429]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,158.5), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,214.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(88.15,80.45,1,1,-7.3582,0,0,20.4,0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(71.65,-69.4,1,1,-7.3582,0,0,86,-0.1);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(83.2,-287.4,1,1,-7.3582,0,0,39.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:-7.3582,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:1,scaleY:1,rotation:-7.3582,x:71.65,y:-69.4}},{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-7.3582,x:88.15,y:80.45}}]}).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.1833,x:83.25,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.4911,x:67.15,y:-69.65}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.022,x:81.4,y:80.3}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.0077,x:83.25,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.6259,x:62.75,y:-70.1}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.6864,x:74.65,y:80.2}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.8343,x:83.25,y:-287.35,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.7585,x:58.3,y:-70.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.3512,x:67.85,y:79.85}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.6581,x:83.25,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.8921,x:53.8,y:-71.15}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.0153,x:61.2,y:79.4}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.4831,x:83.25,y:-287.3,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.0258,x:49.35,y:-71.8}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.6794,x:54.45,y:78.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.3086,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.1602,x:44.95,y:-72.5}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.3448,x:47.75,y:78.2}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.8613,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2924,x:40.5,y:-73.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.0086,x:41.1,y:77.45}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.035,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4258,x:36.15,y:-74.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.6724,x:34.45,y:76.5}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.2115,x:83.25,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.4354,x:31.8,y:-75.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.3365,x:27.8,y:75.45}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.3857,x:83.25,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.302,x:27.45,y:-76.35}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.0016,x:21.2,y:74.3}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.56,x:83.2,y:-287.35,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1672,x:23.15,y:-77.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.6661,x:14.75,y:72.95}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.7358,x:83.05,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.0346,x:18.8,y:-78.9}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.3296,x:8.2,y:71.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.9101,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.9009,x:14.6,y:-80.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.9943,x:1.6,y:70}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.0859,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.7673,x:10.4,y:-81.7}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.659,x:-4.85,y:68.35}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.2611,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.6346,x:6.15,y:-83.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.3229,x:-11.3,y:66.55}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.4355,x:83.05,y:-287.4,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.4999,x:2,y:-84.85}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.9869,x:-17.8,y:64.65}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.6102,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.3674,x:-2.1,y:-86.55}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.6519,x:-24.15,y:62.65}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.7849,x:83.05,y:-287.4,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.2332,x:-6.25,y:-88.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.316,x:-30.55,y:60.55}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.9609,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.0992,x:-10.3,y:-90.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9802,x:-36.8,y:58.25}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.1353,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.9663,x:-14.35,y:-92.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6453,x:-43.1,y:55.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.3104,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.8322,x:-18.4,y:-94.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.3086,x:-49.3,y:53.45}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.4844,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.6988,x:-22.3,y:-96.35}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.0219,x:-55.5,y:50.8}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.6594,x:83.15,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.5663,x:-26.2,y:-98.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.3559,x:-61.6,y:48.15}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.8351,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.4323,x:-30,y:-100.8}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.6925,x:-67.65,y:45.25}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.0091,x:83.15,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.2984,x:-33.8,y:-103.2}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.0283,x:-73.7,y:42.35}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.1838,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.1647,x:-37.5,y:-105.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3641,x:-79.65,y:39.25}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.3587,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.0318,x:-41.25,y:-108.15}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.6991,x:-85.5,y:36.15}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:25.5335,x:83.1,y:-287.5,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.8977,x:-44.85,y:-110.75}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.0341,x:-91.3,y:32.8}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:26.7097,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.7653,x:-48.55,y:-113.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.3702,x:-97.05,y:29.45}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:25.8174,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.1723,x:-45.8,y:-111.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.2923,x:-92.9,y:32}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.9276,x:83.05,y:-287.5,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.5802,x:-43.05,y:-109.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.2126,x:-88.6,y:34.4}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.0378,x:83.15,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.988,x:-40.25,y:-107.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1339,x:-84.4,y:36.85}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.1466,x:83.15,y:-287.5,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.3951,x:-37.4,y:-105.5}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.0534,x:-80.05,y:39.15}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.2565,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.8027,x:-34.6,y:-103.7}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9747,x:-75.75,y:41.5}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.3658,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.2112,x:-31.8,y:-101.9}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8959,x:-71.4,y:43.65}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.4754,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.6185,x:-28.85,y:-100.15}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8172,x:-66.95,y:45.85}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.5847,x:83.15,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.0272,x:-25.9,y:-98.35}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.7376,x:-62.55,y:47.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.696,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.4337,x:-23.05,y:-96.75}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.6589,x:-58.05,y:50}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.8048,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.8425,x:-20,y:-95.1}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.5801,x:-53.6,y:51.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.9143,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.2499,x:-17,y:-93.55}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.5006,x:-49.05,y:53.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.0237,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.6576,x:-14,y:-92}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4218,x:-44.55,y:55.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.134,x:83.25,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.0658,x:-11,y:-90.5}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3423,x:-39.9,y:57.55}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.2428,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.4731,x:-7.85,y:-89.1}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.2635,x:-35.35,y:59.2}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.3532,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.8806,x:-4.8,y:-87.65}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.184,x:-30.75,y:60.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.4623,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.2889,x:-1.6,y:-86.35}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1053,x:-26.05,y:62.5}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.5719,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.6956,x:1.5,y:-85}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.0257,x:-21.4,y:64.05}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.6827,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.104,x:4.65,y:-83.8}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.947,x:-16.7,y:65.5}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.7906,x:83.1,y:-287.4,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.5123,x:7.85,y:-82.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.8674,x:-12,y:66.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.9017,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.9194,x:11.05,y:-81.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7887,x:-7.25,y:68.25}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.0098,x:83.2,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.3273,x:14.2,y:-80.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7091,x:-2.5,y:69.55}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.1207,x:83.25,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.7347,x:17.5,y:-79.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.6296,x:2.3,y:70.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.2298,x:83.2,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.1419,x:20.65,y:-78.25}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.55,x:7.05,y:71.85}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.3387,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.5504,x:23.95,y:-77.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.4713,x:11.9,y:72.9}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.4488,x:83.25,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.9584,x:27.3,y:-76.4}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.3926,x:16.65,y:73.95}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.5574,x:83.1,y:-287.45,regX:39.4}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.365,x:30.5,y:-75.6}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.3139,x:21.45,y:74.85}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.6686,x:83.25,y:-287.4,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.7726,x:33.85,y:-74.75}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.2343,x:26.25,y:75.75}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.777,x:83.25,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1813,x:37.15,y:-74.05}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.1548,x:31.15,y:76.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.8875,x:83.3,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.5893,x:40.45,y:-73.3}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.0752,x:36,y:77.3}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:83.3,y:-287.45,regX:39.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:43.8,y:-72.75}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:40.95,y:78.05}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.8,-305,350.6,501.5);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(350.1,373.65,1,1,0,0,0,20.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(352.8,222.95,1,1,0,0,0,86,0);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(392.35,8.25,1,1,0,0,0,39.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{rotation:0,y:8.25,x:392.35,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:0,x:352.8,y:222.95,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:0,x:350.1,y:373.65,regY:0}}]}).to({state:[{t:this.ikNode_1,p:{rotation:-1.4611,y:8.2,x:392.35,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-1.1978,x:358.25,y:223.8,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.1014,x:358.65,y:374.5,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-2.9222,y:8.2,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-2.3962,x:363.7,y:224.6,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.2037,x:367.3,y:375.3,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-4.3834,y:8.2,x:392.3,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-3.5947,x:369.25,y:225.25,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.306,x:376,y:375.85,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-5.845,y:8.2,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-4.794,x:374.8,y:225.75,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.4083,x:384.7,y:376.15,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-7.306,y:8.2,x:392.3,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-5.9918,x:380.35,y:226.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.5106,x:393.4,y:376.3,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-8.7672,y:8.15,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-7.1905,x:385.85,y:226.4,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.6129,x:402.1,y:376.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-10.229,y:8.15,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-8.3889,x:391.5,y:226.45,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.7143,x:410.8,y:375.95,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-11.6904,y:8.15,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-9.5872,x:397.05,y:226.4,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.8166,x:419.45,y:375.45,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-13.1516,y:8,x:392.25,regY:-0.1,regX:39.5}},{t:this.ikNode_2,p:{rotation:-10.7856,x:402.6,y:226.2,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.9189,x:428.15,y:374.7,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-14.6132,y:8.15,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-11.9843,x:408.1,y:225.85,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.0212,x:436.8,y:373.85,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-16.0746,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-13.1829,x:413.7,y:225.5,regY:0.1,regX:86}},{t:this.ikNode_4,p:{rotation:-1.1235,x:445.45,y:372.75,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-17.5358,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-14.3819,x:419.2,y:224.75,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.2258,x:454.05,y:371.4,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-18.997,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-15.5803,x:424.75,y:224,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.3273,x:462.6,y:369.9,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-20.458,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-16.7784,x:430.25,y:223.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.4296,x:471.15,y:368.15,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-21.9198,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-17.9774,x:435.7,y:222.05,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.5319,x:479.65,y:366.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-23.3808,y:8.15,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-19.1756,x:441.15,y:220.85,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.6342,x:488.1,y:364.1,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-24.8425,y:8.1,x:392.25,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-20.3742,x:446.5,y:219.55,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.7366,x:496.5,y:361.85,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-26.3039,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-21.5725,x:451.95,y:218.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.838,x:504.85,y:359.3,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-27.7655,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-22.7708,x:457.25,y:216.5,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.9404,x:513.1,y:356.55,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-29.2263,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-23.9696,x:462.55,y:214.75,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.0427,x:521.3,y:353.6,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-30.688,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-25.1683,x:467.8,y:212.9,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.1451,x:529.45,y:350.5,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-32.1489,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-26.3664,x:472.95,y:210.9,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.2475,x:537.5,y:347.2,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-33.6108,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-27.5652,x:478.15,y:208.85,regY:0.1,regX:86}},{t:this.ikNode_4,p:{rotation:-2.349,x:545.5,y:343.65,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-35.0721,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-28.7633,x:483.2,y:206.5,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.4513,x:553.4,y:340,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-36.5331,y:8.1,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-29.962,x:488.2,y:204.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.5537,x:561.2,y:336.1,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-37.995,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-31.1602,x:493.25,y:201.7,regY:0.1,regX:86}},{t:this.ikNode_4,p:{rotation:-2.6561,x:568.9,y:332,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-39.456,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-32.3592,x:498.1,y:198.95,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.7576,x:576.5,y:327.75,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-40.9176,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-33.5572,x:502.9,y:196.2,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.86,x:583.95,y:323.35,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-42.3791,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-34.7563,x:507.65,y:193.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.9624,x:591.35,y:318.7,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-40.4235,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-32.8637,x:501.3,y:197.15,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-2.5598,x:580.85,y:325.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-38.4681,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-30.9711,x:494.8,y:200.7,regY:0,regX:86.1}},{t:this.ikNode_4,p:{rotation:-2.1565,x:570.05,y:331.4,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-36.5125,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-29.0787,x:488.1,y:204.15,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.7541,x:559.05,y:337.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-34.5577,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-27.1871,x:481.4,y:207.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-1.3509,x:547.85,y:342.6,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-32.6017,y:8,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-25.2942,x:474.5,y:210.2,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.9486,x:536.5,y:347.65,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-30.6465,y:8,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-23.4019,x:467.5,y:212.8,regY:-0.1,regX:86}},{t:this.ikNode_4,p:{rotation:-0.5455,x:525,y:352.35,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-28.6913,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-21.5097,x:460.55,y:215.35,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:-0.1425,x:513.3,y:356.6,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-26.7359,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-19.6178,x:453.4,y:217.6,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:0.2597,x:501.5,y:360.5,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-24.7807,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-17.725,x:446.2,y:219.55,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:0.6618,x:489.55,y:364,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-22.8257,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-15.8328,x:439,y:221.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:1.0649,x:477.55,y:367.05,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-20.87,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-13.9402,x:431.65,y:222.75,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:1.4672,x:465.4,y:369.7,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-18.9146,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-12.0477,x:424.3,y:223.95,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:1.8704,x:453.15,y:371.95,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-16.9593,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-10.1561,x:416.95,y:224.95,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:2.2728,x:440.9,y:373.8,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-15.0038,y:8,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-8.2634,x:409.5,y:225.65,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:2.6762,x:428.55,y:375.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-13.0483,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-6.3708,x:402.05,y:226.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:3.0789,x:416.1,y:376.25,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-11.0929,y:8,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-4.4791,x:394.65,y:226.35,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:3.4817,x:403.7,y:376.85,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-9.1381,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-2.587,x:387.15,y:226.25,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:3.8847,x:391.3,y:377.05,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-7.1826,y:8,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-0.6942,x:379.75,y:226,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:4.2871,x:378.85,y:376.65,regY:-0.1}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-5.2275,y:8,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:1.197,x:372.3,y:225.5,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:4.6895,x:366.45,y:376.1,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-3.2715,y:8,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:3.0894,x:364.85,y:224.7,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:5.0923,x:354.05,y:375.05,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-1.3168,y:8,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:4.9817,x:357.5,y:223.6,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:5.4954,x:341.75,y:373.55,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0.6382,y:8.05,x:392.2,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:6.8743,x:350.2,y:222.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:5.8987,x:329.45,y:371.65,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:2.5931,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:8.7664,x:342.9,y:220.75,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:6.3013,x:317.25,y:369.35,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.5484,y:8.1,x:392.1,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:10.6584,x:335.65,y:218.95,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:6.7044,x:305.1,y:366.6,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.5036,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:12.5516,x:328.5,y:216.9,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:7.1068,x:293.15,y:363.4,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.4596,y:8.05,x:392.1,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:14.4434,x:321.4,y:214.6,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:7.5097,x:281.2,y:359.9,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:10.4146,y:8.05,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:16.3358,x:314.4,y:212.1,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:7.9119,x:269.45,y:355.95,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:12.3698,y:8.15,x:392.15,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:18.2284,x:307.45,y:209.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:8.3154,x:257.8,y:351.6,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:14.325,y:8.15,x:392,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:20.1205,x:300.65,y:206.3,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:8.7178,x:246.3,y:346.9,regY:0}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:16.2805,y:8.15,x:392.1,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:22.0123,x:293.95,y:203.05,regY:0,regX:86}},{t:this.ikNode_4,p:{rotation:9.1204,x:235,y:341.8,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.8,-2.9,509.40000000000003,495.59999999999997);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-71.1,39.25,1,1,23.4121,0,0,20.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-8.75,-97.9,1,1,23.4121,0,0,86,0);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(112.8,-279.2,1,1,23.4121,0,0,39.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{regX:39.5,regY:0,scaleX:1,scaleY:1,rotation:23.4121,y:-279.2,x:112.8}},{t:this.ikNode_2,p:{scaleX:1,scaleY:1,rotation:23.4121,x:-8.75,y:-97.9,regY:0}},{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:23.4121,x:-71.1,y:39.25,regY:0,regX:20.4}}]}).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:20.7756,y:-279.4,x:112.8}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.4507,x:-0.2,y:-92.5,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.6373,x:-57.85,y:46.7,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:18.1391,y:-279.3,x:112.75}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.4887,x:8.45,y:-87.45,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.8644,x:-44.35,y:53.6,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:15.5026,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.5269,x:17.4,y:-82.9,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.0911,x:-30.55,y:59.8,regY:-0.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:12.8671,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.566,x:26.55,y:-78.7,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.3163,x:-16.55,y:65.7,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:10.2308,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.6028,x:35.9,y:-75.1,regY:-0.1}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.5415,x:-2.25,y:70.75,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:7.5941,y:-279.3,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.6422,x:45.3,y:-71.65,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.7676,x:12.2,y:75.3,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:4.9585,y:-279.25,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.6804,x:54.95,y:-68.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.9948,x:26.8,y:79.25,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:2.322,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.7185,x:64.7,y:-66.3,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.2202,x:41.65,y:82.5,regY:-0.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-0.3095,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.7576,x:74.55,y:-64.3,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.4457,x:56.55,y:85.2,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-2.9452,y:-279.25,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.7957,x:84.45,y:-62.8,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.6714,x:71.6,y:87.25,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-5.5818,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8338,x:94.35,y:-61.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.8975,x:86.8,y:88.7,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-8.2181,y:-279.3,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.1224,x:104.4,y:-61.1,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.1242,x:102,y:89.5,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-10.8542,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.0849,x:114.4,y:-61,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.3502,x:117.1,y:89.65,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-13.4904,y:-279.3,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.0463,x:124.45,y:-61.25,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.5752,x:132.35,y:89.15,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-16.1272,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.0073,x:134.45,y:-62.05,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.8022,x:147.5,y:87.95,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-18.7631,y:-279.25,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.9691,x:144.4,y:-63.25,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.0279,x:162.55,y:86.2,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-21.3997,y:-279.05,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.9315,x:154.3,y:-65,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.2529,x:177.5,y:83.8,regY:0,regX:20.3}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-24.0359,y:-279.25,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.8924,x:164.15,y:-67.1,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.48,x:192.4,y:80.8,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-26.671,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.8551,x:173.85,y:-69.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.7052,x:207.2,y:77.15,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-29.3079,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.8168,x:183.4,y:-72.7,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.932,x:221.75,y:72.85,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-31.944,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.778,x:192.85,y:-76.2,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.1567,x:236.2,y:68,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-34.5799,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.7385,x:202.05,y:-80.1,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.3837,x:250.35,y:62.5,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-37.2168,y:-279.3,x:112.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.7016,x:211.15,y:-84.45,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.6083,x:264.2,y:56.55,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-39.8521,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.6632,x:219.95,y:-89.15,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.8356,x:277.95,y:49.8,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-42.4897,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.6242,x:228.6,y:-94.3,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.0603,x:291.25,y:42.65,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-45.1249,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-27.5864,x:236.95,y:-99.8,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.2875,x:304.3,y:34.85,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-47.7622,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.5479,x:245.1,y:-105.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.5128,x:316.95,y:26.6,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-50.3981,y:-279.2,x:112.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.5087,x:252.9,y:-112.05,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.7393,x:329.3,y:17.8,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-53.0341,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.4708,x:260.55,y:-118.55,regY:0.1}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.9653,x:341.25,y:8.45,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-50.3092,y:-279.2,x:112.55}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-32.1083,x:252.7,y:-111.8,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1796,x:330.4,y:17.2,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-47.5834,y:-279.25,x:112.45}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-30.7453,x:244.55,y:-105.35,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3938,x:319.15,y:25.45,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.5,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-44.8584,y:-279.25,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.3831,x:236.15,y:-99.3,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.609,x:307.6,y:33.25,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-42.1325,y:-279.3,x:112.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.0206,x:227.45,y:-93.6,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8233,x:295.8,y:40.65,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-39.4076,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.6581,x:218.5,y:-88.35,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.0376,x:283.6,y:47.5,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-36.6817,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.2945,x:209.3,y:-83.5,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.2529,x:271.2,y:53.85,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-33.9556,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.9318,x:199.9,y:-79.15,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.4681,x:258.45,y:59.6,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-31.2308,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.5699,x:190.3,y:-75.2,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.6826,x:245.55,y:64.8,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-28.5061,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.2065,x:180.5,y:-71.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.897,x:232.4,y:69.6,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-25.7802,y:-279.3,x:112.5}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.8444,x:170.55,y:-68.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.1107,x:219.05,y:73.75,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-23.0558,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.4808,x:160.5,y:-66.25,regY:0}},{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:3.3269,x:205.65,y:77.4,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-20.3304,y:-279.3,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.1187,x:150.35,y:-64.25,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.5407,x:192,y:80.5,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-17.6043,y:-279.2,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.755,x:140.05,y:-62.7,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.7553,x:178.3,y:83,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-14.8794,y:-279.25,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.3931,x:129.75,y:-61.65,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.9709,x:164.5,y:84.95,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-12.1534,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.0304,x:119.4,y:-61.05,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.1848,x:150.6,y:86.25,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-9.4285,y:-279.3,x:112.6}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.6673,x:108.95,y:-61,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.3996,x:136.8,y:87.05,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-6.7031,y:-279.3,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.3045,x:98.6,y:-61.4,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.6136,x:122.85,y:87.25,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-3.9771,y:-279.25,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.9423,x:88.25,y:-62.3,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.8294,x:109,y:86.85,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-1.2521,y:-279.25,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.579,x:78.1,y:-63.75,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0436,x:95.1,y:85.95,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:1.4682,y:-279.3,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.2165,x:67.9,y:-65.6,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.2578,x:81.35,y:84.35,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:4.1936,y:-279.2,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.854,x:57.8,y:-68,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.4737,x:67.7,y:82.3,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:6.9189,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.4908,x:47.8,y:-70.85,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.6873,x:54.15,y:79.65,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:9.643,y:-279.3,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.1295,x:37.95,y:-74.2,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.9026,x:40.7,y:76.4,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:12.3699,y:-279.25,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.7659,x:28.3,y:-77.95,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.1163,x:27.45,y:72.65,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:15.0938,y:-279.3,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.5919,x:18.85,y:-82.2,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.3318,x:14.5,y:68.35,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:17.82,y:-279.3,x:112.65}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9545,x:9.55,y:-86.9,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.5464,x:1.7,y:63.6,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:20.5456,y:-279.25,x:112.7}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.3173,x:0.55,y:-91.95,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.7613,x:-10.95,y:58.15,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:23.2713,y:-279.3,x:112.75}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.6794,x:-8.25,y:-97.5,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.9752,x:-23.3,y:52.35,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:25.9949,y:-279.25,x:112.75}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.0424,x:-16.75,y:-103.5,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.1911,x:-35.35,y:46,regY:0,regX:20.4}}]},1).to({state:[{t:this.ikNode_1,p:{regX:39.4,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:28.7205,y:-279.2,x:112.75}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.4052,x:-24.9,y:-109.85,regY:0}},{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.4052,x:-47.1,y:39.1,regY:-0.1,regX:20.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-298.1,565.6,503.90000000000003);


// stage content:
(lib.燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(95.05,197.9,0.3626,0.6333,0,0,0,-18.8,-71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(422.1,236.85,0.6875,0.7425,-23.2051,0,0,79.2,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大燈籠
	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(248.1,252.9,1,1,0,0,0,334.2,248.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,252.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,252.2,280.4,287.2);
// library properties:
lib.properties = {
	id: '4F5E9DDDD474D7408B75849F6D326520',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈籠_atlas_1.png", id:"燈籠_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4F5E9DDDD474D7408B75849F6D326520'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;