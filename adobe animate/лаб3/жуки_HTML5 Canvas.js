(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
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


(lib.Теложука = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkfjqQgxgFgkgjQgpgqAAg7QAAg7ApgqQAqgpA7AAQAoAAAgATQAPAJANANQAqAqAAA7QAAA7gqAqQgRASgVAKQgDABgDACQgaAKgeAAQgIAAgIgBgAltACQgngBgJhNQgJhPA+gxQAXgSAygMAgOoEQA/ACA2ANQAegQAkAAQA7AAApApQAqAqAAA7QAAA7gqAqQgeAegnAIQAyALAbAQQBLAugEBFQgEBEgpAHQgGAGhmgHQhngIgKAGQgUAKgFAPQgDAJgBASQgFAdhAAAIgTgBQgtgEgKgUIgMgYQgKgOgWgKQgGgDhuAMQhtALgGgEAhxoCQAhgDAlAAQAPAAAOABQgZlFEVh3AB+jvQgMgEgLgGQgTgJgQgQQgpgqAAg7QAAg7ApgqQAQgPATgKAjHnyQAogLAugFQBJjklMjSAB+jvQhdAEhggDQhhgEg3gBADIjsQgPADgQAAQgXAAgUgGAEvgTQA2AeATAxQAIAVAJAfQAkCIgJDiQgFB/gWBiQgYBsgrBDQgrBBhQAKQhUALhkg2QhvBKhOgZQg+gUgzhbQhZidgjkOQgikPAzhwQAIgRARgPAgjA6IA2NQ");
	this.shape.setTransform(-0.026,-0.5232);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#993300").ss(1,1,1).p("AjmAAQAAAOgKAKQgJAKgOAAQgOAAgKgKQgKgKAAgOQAAgNAKgKQAKgJAOAAQAOAAAJAJQAKAKAAANgAEqgFQAAALgIAIQgIAIgMAAQgLAAgIgIQgIgIAAgLQAAgMAIgHQAIgIALAAQAMAAAIAIQAIAHAAAMg");
	this.shape_1.setTransform(-5.875,-39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AiqHnQg+gUgzhaQhZidgjkOQgikOAzhwQAIgRARgQQAGAEBtgLQBugMAGADQAWAKAKAPIAMAYQAKAUAtADIA2NQQhTA3hAAAQgWAAgUgHgAATG3Ig2tQIATABQBAAAAFgdQABgRADgJQAFgQAUgLQAKgGBnAIQBmAHAGgGQA2AfATAyQAIAVAJAfQAkCHgJDiQgFB/gWBhQgYBtgrBCQgrBBhQALQgOABgPAAQhIAAhTgsgAgjmZg");
	this.shape_2.setTransform(-0.026,46.2482);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkfAYQgKgKAAgOQAAgNAKgKQAKgKAOAAQAOAAAJAKQAKAKAAANQAAAOgKAKQgJAJgOABQgOgBgKgJgAD7ANQgIgHAAgLQAAgLAIgJQAIgHALgBQAMABAIAHQAIAJAAALQAAALgIAHQgIAIgMAAQgLAAgIgIg");
	this.shape_3.setTransform(-5.875,-39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgCEfQgsgDgLgUIgMgYQgKgPgWgKQgGgDhuAMQhsALgGgEQgnAAgJhPQgKhOA+gxQAYgTAxgKIARABQAeAAAZgLICZAFIAEAAIBTACIABAAIAAAAQAzAAAygCQAUAGAXAAQAQAAAOgDQgOADgQAAQgXAAgUgGQgMgEgLgGQgTgKgQgQQgpgpAAg7QAAg7ApgqQAQgQASgJQAegQAlAAQA7AAApApQAqAqAAA7QAAA7gqApQgeAfgoAIQAzAJAbARQBKAugEBEQgDBFgpAGQgHAGhlgHQhngIgLAGQgTALgGAQQgDAJgBARQgEAdhBAAgADii2QgIAIAAAMQAAALAIAIQAIAIALAAQAMAAAIgIQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAj+gEQgwgFgkgkQgpgpAAg7QAAg7ApgqQAqgpA7AAQAnAAAgASQAPAJAOAOQAqAqAAA7QAAA7gqApQgSASgUAKIgHADQgZALgeAAIgRgBgAk4i0QgKAKAAAOQAAAOAKAJQAKAKAOAAQAOAAAJgKQAKgJAAgOQAAgOgKgKQgJgKgOAAQgOAAgKAKgAA6gHIhTgCIgEAAIiZgFIAHgDQAUgKASgSQAqgpAAg7QAAg7gqgqQgOgOgPgJQAogKAugFQAigDAlAAIAbAAQBAADA2ANQgSAJgQAQQgpAqAAA7QAAA7ApApQAQAQATAKQALAGAMAEQgyACgzAAIAAAAIgBAAgAi2gOIAAAAgAimkNIAAAAgACIkPIAAAAg");
	this.shape_4.setTransform(-3.3874,-23.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-97.6,86.4,194.2);


(lib.Стоп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkVkVIIrAAIAAIrIorAAg");
	this.shape.setTransform(6.75,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkUEVIAAoqIIpAAIAAIqg");
	this.shape_1.setTransform(6.75,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-29.9,57.5,57.5);


(lib.Пуск = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADwAAInfHhIgBvBg");
	this.shape.setTransform(35,-6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjvngIHfHgInfHhg");
	this.shape_1.setTransform(35,-6.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-56,50.1,98.2);


(lib.Назад = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAYAwIAAG/InunvIHunuIAAG/IG/m/IAAPdgAAYgvIAABf");
	this.shape.setTransform(-43.15,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAYAwIAAhfIAABfIAAG/InunvIHunuIAAG/IG/m/IAAPdg");
	this.shape_1.setTransform(-43.15,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-47.5,96.2,101);


(lib.Лапыжука = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1).p("AmzB7ID1loIHGGyICsApIjNAAImUlQIjRD+g");
	this.shape.setTransform(0.275,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("ADnDuImUlPIjRD9Ig1ghID1loIHGGxICsAqg");
	this.shape_1.setTransform(0.275,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#993300").ss(1,1,1).p("AmLCgIDwlfIGgEeICHgNIiMA0ImEjQIjSEKg");
	this.shape_2.setTransform(-3.35,-3.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AmLCgIDwlfIGfEeICIgNIiMA0ImDjQIjTEKg");
	this.shape_3.setTransform(-3.35,-3.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#993300").ss(1,1,1).p("AliCcIDqlXIF5CMIBihCIhKBnIlzhSIjTEYg");
	this.shape_4.setTransform(-6.975,-3.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AliCcIDqlXIF5CMIBihCIhKBnIlzhSIjTEYg");
	this.shape_5.setTransform(-6.975,-3.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#993300").ss(1,1,1).p("Ak6DXIDklPIFTgHIA+h3IgJCbIliAtIjVElg");
	this.shape_6.setTransform(-10.6,-9.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("Ak6DXIDklPIFTgHIA+h3IgJCbIliAtIjVElg");
	this.shape_7.setTransform(-10.6,-9.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#993300").ss(1,1,1).p("AkuE3IDflGIEsiaIAZitIA5DOIlRCsIjXEzg");
	this.shape_8.setTransform(-11.425,-19.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AkuE3IDflGIEsiaIAZitIA5DOIlRCsIjXEzg");
	this.shape_9.setTransform(-11.425,-19.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#993300").ss(1,1,1).p("Ak0DqIDjlNIFMgkIA2iCIAEClIleBHIjWEng");
	this.shape_10.setTransform(-11.2,-11.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("Ak0DqIDjlNIFMgkIA2iCIAEClIlfBHIjVEng");
	this.shape_11.setTransform(-11.2,-11.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#993300").ss(1,1,1).p("AlSCdIDnlTIFqBRIBUhYIgwB8IlsgeIjUEdg");
	this.shape_12.setTransform(-8.525,-3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AlSCdIDnlTIFqBRIBUhYIgwB8IlsgeIjUEdg");
	this.shape_13.setTransform(-8.525,-3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#993300").ss(1,1,1).p("AlzCeIDtlbIGJDGIBxgrIhkBRIl6iDIjTESg");
	this.shape_14.setTransform(-5.7,-3.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AlyCeIDslbIGJDGIBwgsIhkBSIl5iDIjTESg");
	this.shape_15.setTransform(-5.7,-3.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#993300").ss(1,1,1).p("AmTChIDxlhIGnE7ICPgCIiZAqImHjqIjSEIg");
	this.shape_16.setTransform(-2.825,-3.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AmTChIDxlhIGnE7ICPgCIiZAqImHjqIjSEIg");
	this.shape_17.setTransform(-2.825,-3.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:0.275,y:0.45}},{t:this.shape,p:{x:0.275,y:0.45}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_1,p:{x:0.025,y:0}},{t:this.shape,p:{x:0.025,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-54.4,89.5,79.6);


(lib.Жук_низ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkxlKQgUAJgVgTQgVgUgJgoQgFgVgXgoQgSgmAPgiQAVgvCYgMQACgBDLgEQB+gRBJAAQCGABAgBUQAQAtgCAuQgDBBgsATIgBABQAYARAQAWQAzBDAPB8QAHA/AACeQAADXh0CWQh0CYikAAQiiAAh1iYQh0iWAAjXQgHiRABhHQAEh6AxhAQAKgMAOgOgAD1mCQAhANAYAUQgNAEgXgVQgMgLgJgFgAhLmdQAtgEAxAAIAQAAQBjAAA7AOIASAFQgZgCg+gIQg6gHgfgCQgTgEgYAAIgCAAgADTmOQATAFAPAHAiwmMIgGABQgtAIgiAZIgGAEIgkAbIgCABQARgQAVgMQAogYA4gOIABgBgAirmMIgFAAAiqmNQAogKA3gG");
	this.shape.setTransform(-1.4535,-0.9257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AkEHPQh0iWAAjXQgHiRABhHQAEh6AxhAQAKgMAOgOQgUAJgVgTQgVgUgJgoQgFgVgXgoQgSgmAPgiQAVgvCYgMIDNgFQB+gRBJAAQCGABAgBUQAQAtgCAuQgDBBgsATIgBABQAYARAQAWQAzBDAPB8QAHA/AACeQAADXh0CWQh0CYikAAQiiAAh1iYgAkxlKIACgBIAkgbQAogYA4gOIABgBIgGABIgGABQgtAIgiAZIgGAEQgVAMgRAQgAEplgIAFgBQgYgUghgNQgPgHgTgFQATAFAPAHQAhANAYAUIgFABIAAAAIgDgBQgLgCgPgOIgBgBIgBAAQgMgLgJgFQAJAFAMALIABAAIABABQAPAOALACIADABIAAAAgAiqmNQAogKA3gGQg3AGgoAKgAB8mYIBXAKIgSgFQg7gOhjAAQgTgEgYAAIgCAAIhBAIQAtgEAxAAIAQAAQBjAAA7AOIASAFIhXgKQg6gHgfgCQAfACA6AHgAkxlKIAAAAgAkLlmIgkAbIgCABQARgQAVgMgAiwmMgAiqmNIgBABIgFAAg");
	this.shape_1.setTransform(-1.4535,-0.9257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-63.4,85,125);


(lib.Жук_перевернут = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Лапыжука("synched",0);
	this.instance.setTransform(-83.35,59.1,1,1,0,0,180,0.1,-14.6);

	this.instance_1 = new lib.Лапыжука("synched",0);
	this.instance_1.setTransform(-83.35,20.3,1,1,0,0,180,0.1,-14.6);

	this.instance_2 = new lib.Лапыжука("synched",0);
	this.instance_2.setTransform(-83.35,-18.5,1,1,0,0,180,0.1,-14.6);

	this.instance_3 = new lib.Лапыжука("synched",0);
	this.instance_3.setTransform(51.3,53.75,1,1,0,0,0,0.1,-14.6);

	this.instance_4 = new lib.Лапыжука("synched",0);
	this.instance_4.setTransform(51.3,14.95,1,1,0,0,0,0.1,-14.6);

	this.instance_5 = new lib.Лапыжука("synched",0);
	this.instance_5.setTransform(51.3,-23.85,1,1,0,0,0,0.1,-14.6);

	this.instance_6 = new lib.Жук_низ("synched",0);
	this.instance_6.setTransform(-17.4,46.65,1,1,0,0,0,-1.4,-1);

	this.instance_7 = new lib.Теложука("synched",0);
	this.instance_7.setTransform(-16.85,12,1,1,0,0,0,-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Жук_перевернут, new cjs.Rectangle(-128.1,-85,224.2,194.2), null);


(lib.Жук = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Теложука("synched",0);
	this.instance.setTransform(4.55,-21.3,1,1,0,0,0,-0.1,-0.6);

	this.instance_1 = new lib.Лапыжука("synched",4);
	this.instance_1.setTransform(-61.3,32.2,1,1,0,0,180,0.1,-14.6);

	this.instance_2 = new lib.Лапыжука("synched",2);
	this.instance_2.setTransform(-69.1,2.8,1,1,0,0,180,0.1,-14.6);

	this.instance_3 = new lib.Лапыжука("synched",0);
	this.instance_3.setTransform(-70.75,-23.4,1,1,0,0,180,0.1,-14.6);

	this.instance_4 = new lib.Лапыжука("synched",5);
	this.instance_4.setTransform(76,32.2,1,1,0,0,0,0.1,-14.6);

	this.instance_5 = new lib.Лапыжука("synched",3);
	this.instance_5.setTransform(80.1,2.8,1,1,0,0,0,0.1,-14.6);

	this.instance_6 = new lib.Лапыжука("synched",1);
	this.instance_6.setTransform(76,-23.4,1,1,0,0,0,0.1,-14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{startPosition:1}},{t:this.instance_5,p:{startPosition:3}},{t:this.instance_4,p:{startPosition:5}},{t:this.instance_3,p:{startPosition:0}},{t:this.instance_2,p:{startPosition:2}},{t:this.instance_1,p:{startPosition:4}},{t:this.instance}]}).to({state:[{t:this.instance_6,p:{startPosition:0}},{t:this.instance_5,p:{startPosition:2}},{t:this.instance_4,p:{startPosition:4}},{t:this.instance_3,p:{startPosition:9}},{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:3}},{t:this.instance}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-118.3,240.4,194.2);


// stage content:
(lib.жуки_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,29];
	this.streamSoundSymbolsList[0] = [{id:"zhuzhzhaniezhuka",startFrame:0,endFrame:60,loop:1,offset:17573}];
	this.streamSoundSymbolsList[29] = [{id:"cartoonnegotiation",startFrame:29,endFrame:60,loop:1,offset:444}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("zhuzhzhaniezhuka",0,17573);
		this.InsertIntoSoundStreamData(soundInstance,0,60,1,17573);
		/* stop();
		
		but1. addEventListener(MouseEvent.CLICK,f1)
		function f1(event:MouseEvent):void
		{play();}
		
		but2. addEventListener(MouseEvent.CLICK,f2)
		function f2(event:MouseEvent):void
		{stop();}
		
		but3. addEventListener(MouseEvent.CLICK,f3)
		function f3(event:MouseEvent):void
		{gotoAndStop(0);}*/
		
		this.stop();
		this.but1.addEventListener("click",f1.bind(this));
		function f1(args){this.play();} 
		
		this.but2.addEventListener("click",f2.bind(this));
		function f2(args){this.stop();} 
		
		this.but3.addEventListener("click",f3.bind(this));
		function f3(args){this.gotoAndStop(0);}
	}
	this.frame_29 = function() {
		var soundInstance = playSound("cartoonnegotiation",0,444);
		this.InsertIntoSoundStreamData(soundInstance,29,60,1,444);
		playSound("oops");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// Слой_1
	this.but3 = new lib.Назад();
	this.but3.name = "but3";
	this.but3.setTransform(645.85,660,0.6121,0.6121);
	new cjs.ButtonHelper(this.but3, 0, 1, 1);

	this.but2 = new lib.Стоп();
	this.but2.name = "but2";
	this.but2.setTransform(695.25,665.6);
	new cjs.ButtonHelper(this.but2, 0, 1, 1);

	this.but1 = new lib.Пуск();
	this.but1.name = "but1";
	this.but1.setTransform(747.65,668.95,0.7401,0.7401);
	new cjs.ButtonHelper(this.but1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2},{t:this.but3}]}).wait(60));

	// жук_б
	this.instance = new lib.Жук();
	this.instance.setTransform(1277.3,114.9,0.8406,0.8406,-92.4585,0,0,4.7,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.6,scaleX:0.8405,scaleY:0.8405,rotation:-92.4576,guide:{path:[1277.3,115.1,1276.8,115.2,1276.3,115.2,1263.8,117,1245.8,114.5,1225.4,111.1,1215.2,109.9,1186.6,106.6,1140.8,112.5,1116,115.9,1103.6,117.4,1082,120.1,1066.2,120.6,1054.5,121,1027.9,120.2,1003.1,119.5,989.6,120.2,975.3,121,952.8,124.3,922.9,128.6,916,129.4,899,131,890.6,131.8,875.6,133.3,865.4,135.4,836.3,141.5,819.7,156.5,806.8,168.2,798.2,188.3,792.7,201.1,786.1,225.7,779.6,250.2,773.1,274.6,764.7,306.6,761.4,321.4,755.4,349.3,752.1,358.7,745.1,379.1,733.1,390.6,722.6,400.6,704.5,407.3,699.1,409.3,696.3,410.3,691.5,412.1,688.3,413.6,686,414.7,679.1,418.5,673.3,421.7,669.7,423.1,663.2,425.6,653.7,426.7,642.7,427.7,637.3,428.3,633.8,428.6,630.3,429.1]}},33).to({regX:4.7,scaleX:0.8406,scaleY:0.8406,rotation:-92.4585,guide:{path:[630.2,429.1,615.1,431.3,600.4,436.4,587.8,441.2,581.3,443.3,568.6,447.5,552.1,449.9,542.2,451.3,522.1,453.1,503,454.8,491.9,456,475.2,457.9,461.8,460.3,457.9,461,442.5,464,430.6,466.3,423.1,467.3,413.2,468.8,400.6,469.6,393.7,470.1,378,470.8,336.8,472.7,316.4,473.4,282.2,474.6,254.8,474.8,215.7,475.1,212.7,475.1,188.8,475.7,170.8,478,166.4,478.6,156.9,480.1,147.8,481.5,143,482.1,121.9,484.7,78.8,484.9,36,485,14.6,487.8,8,488.7,4.6,488.5,-0.9,488.2,-4.3,485.5,2.1,484.9,8.5,484.5]}},26).wait(1));

	// жук_м
	this.instance_1 = new lib.Жук();
	this.instance_1.setTransform(-2.7,113.9,0.5973,0.5973,85.7454,0,0,4.7,-21.3);

	this.instance_2 = new lib.Жук_перевернут();
	this.instance_2.setTransform(648.2,346.1,0.7265,0.7265,-45,0,0,-16,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2,p:{x:648.2,y:346.1}}]},4).to({state:[{t:this.instance_2,p:{x:639.4,y:341.5}}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:4.6,rotation:130.7442,guide:{path:[-2.6,114,-2.6,114,-2.6,114,10.8,112.2,24.2,110.5,38.1,108.7,45,108.2,50.8,107.8,65,107.7,107.1,107.5,149.3,107.3,192.3,107.1,213.8,107.9,249.6,109.1,277.8,113.7,282.6,114.4,292,116,300.3,117.2,306.4,117.6,315.5,118.1,329,117,336.5,116.4,351.6,115.1,373.2,113.8,400,116.8,416.3,118.7,448.1,124,459.4,125.9,465.3,127.9,471,129.8,477.6,133.4,481.7,135.6,489.1,140.3,499.9,147.1,505,151,513.5,157.4,518.7,164.1,521,167,525.6,174.4,529.8,181,532.7,184.4,534.4,186.4,537.7,189.7,541.4,193.3,542.8,194.9,549.1,201.9,554.7,213.1,555.7,215.3,563.6,233.2,575.7,260.5,590.5,277.7,591.6,279,596.3,284.2,599.9,288.2,602,290.9,604.5,294.1,607.9,299.4,613.2,307.5,613.6,308.1,620.1,317.5,629.9,328,635.9,334.4,648.2,346.2,656,353.7,663.9,361.2], orient:'fixed'}},29).to({_off:true,regX:-16,regY:12.2,scaleX:0.7265,scaleY:0.7265,rotation:-45,guide:{path:[663.9,361.2,656.1,353.7,648.2,346.2,648.2,346.2,648.2,346.2]}},4).wait(5).to({_off:false,regX:4.6,regY:-21.3,scaleX:0.5973,scaleY:0.5973,rotation:130.7442,x:673.1,y:370.75},0).wait(1).to({x:663.9,y:361.2},0).to({regX:4.7,rotation:85.7454,guide:{path:[663.9,361.2,671.8,368.7,679.6,376.2,687.1,383.4,690.4,387.3,691.9,389.1,698.5,397.6,703.3,404,707,407.4,710,410.3,714.1,413.2,716.8,415.1,721.8,418.3,733.3,425.6,744.7,432.9,764.7,445.8,775.5,451.8,793,461.5,808.3,466.5,821.7,470.8,842.9,474.3,875.4,479.6,878.1,480.2,890.4,482.7,908.1,487.7,918.1,490.5,938,496.2,951,499.8,967.5,503.5,977.3,505.8,997.1,510,1037.8,518.8,1078.4,527.6,1093,530.7,1101,531.3,1113.6,532.3,1123.1,529,1125.2,528.3,1130.8,525.8,1135.5,523.7,1138.5,522.9,1142.9,521.8,1148.4,521.8,1152,521.8,1158.5,522.3,1174.2,523.6,1189.8,524.9,1200.1,525.7,1205.4,525.7,1209.6,525.8,1214.8,525.5,1218.4,525.2,1224.2,524.7,1257,522.1,1289.8,519.4,1294.4,519,1296.1,520.6], orient:'fixed'}},20).wait(1));

	// жуки
	this.instance_3 = new lib.Жук();
	this.instance_3.setTransform(682,549.4,0.4378,0.4378,0,-103.6933,76.3067,4.9,-21.2);

	this.instance_4 = new lib.Жук();
	this.instance_4.setTransform(593.3,501.4,0.3171,0.3171,-158.4453,0,0,4.7,-21.2);

	this.instance_5 = new lib.Жук();
	this.instance_5.setTransform(533.35,578.45,0.5973,0.5973,40.7451,0,0,4.8,-21.3);

	this.instance_6 = new lib.Жук();
	this.instance_6.setTransform(84.65,370.85,0.2948,0.2948,-4.2543,0,0,4.8,-21.4);

	this.instance_7 = new lib.Жук();
	this.instance_7.setTransform(161.45,326.45,0.5973,0.5973,-94.2548,0,0,4.7,-21.2);

	this.instance_8 = new lib.Жук();
	this.instance_8.setTransform(97.4,257.45,0.5973,0.5973,175.7454,0,0,4.7,-21.3);

	this.instance_9 = new lib.Жук();
	this.instance_9.setTransform(45.45,323.55,0.3612,0.3612,85.7461,0,0,4.8,-21.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgNAAIAAgBIABgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQAAAEgCAHIgRADQgEgIgDgFg");
	this.shape.setTransform(116.95,564.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgNAAIAAgCIABgBIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQAAAEgCAHIgRADQgEgIgDgFg");
	this.shape_1.setTransform(116.95,565.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_9,p:{y:323.55}},{t:this.instance_8,p:{y:257.45}},{t:this.instance_7,p:{y:326.45}},{t:this.instance_6,p:{y:370.85}},{t:this.instance_5,p:{y:578.45}},{t:this.instance_4,p:{y:501.4}},{t:this.instance_3,p:{y:549.4}}]}).to({state:[{t:this.shape_1},{t:this.instance_9,p:{y:324.55}},{t:this.instance_8,p:{y:258.45}},{t:this.instance_7,p:{y:327.45}},{t:this.instance_6,p:{y:371.85}},{t:this.instance_5,p:{y:579.45}},{t:this.instance_4,p:{y:502.4}},{t:this.instance_3,p:{y:550.4}}]},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(564.8,377,795.3,323.4);
// library properties:
lib.properties = {
	id: '79C0D32534273B41AC5F81E8B9CB2A63',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/cartoonnegotiation.mp3?1648835421680", id:"cartoonnegotiation"},
		{src:"sounds/oops.mp3?1648835421680", id:"oops"},
		{src:"sounds/zhuzhzhaniezhuka.mp3?1648835421680", id:"zhuzhzhaniezhuka"}
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
an.compositions['79C0D32534273B41AC5F81E8B9CB2A63'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;