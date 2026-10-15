/*************************************** 
 * Class_Demo_Redlight_Greenlight *
 ***************************************/


// store info about the experiment session:
let expName = 'class_demo_redlight_greenlight';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(feedbackRoutineBegin());
flowScheduler.add(feedbackRoutineEachFrame());
flowScheduler.add(feedbackRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/blank_placeholder.png', 'path': 'resources/blank_placeholder.png'},
    {'name': 'resources/squid_game_doll_backward_desaturated.png', 'path': 'resources/squid_game_doll_backward_desaturated.png'},
    {'name': 'resources/squid_game_doll_backward.png', 'path': 'resources/squid_game_doll_backward.png'},
    {'name': 'resources/squid_game_doll_both.png', 'path': 'resources/squid_game_doll_both.png'},
    {'name': 'resources/squid_game_doll_forward.png', 'path': 'resources/squid_game_doll_forward.png'},
    {'name': 'resources/squid_game_doll.pixil', 'path': 'resources/squid_game_doll.pixil'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var intr_kb;
var trialClock;
var sequence;
var image_names;
var im_sequence;
var seq_len;
var doll_im;
var task_kb;
var feedbackClock;
var fb_text;
var fb_kb;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'The game that you are about to play is called Red Light, Green Light. You will see a rapid serial presentation of two dolls - one facing forward and the other facing backwards. Whenever you see a doll facing backwards ("Green Light"), you will respond by pressing the space bar as quickly as you can. Whenever you see a doll facing forwards ("Red Light"), you will withhold responding. \n\nWhen you\'re ready, please press the spacebar to begin!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intr_kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  sequence = [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0];
  image_names = ["resources\\squid_game_doll_backward", "resources\\squid_game_doll_forward"];
  im_sequence = [];
  for (var i, _pj_c = 0, _pj_a = sequence, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      im_sequence.append(image_names[i]);
  }
  seq_len = sequence.length;
  
  doll_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'doll_im', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.35, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  task_kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fb_kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _intr_kb_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset(routineTimer.getTime());
    routineTimer.add(20.000000);
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    intr_kb.keys = undefined;
    intr_kb.rt = undefined;
    _intr_kb_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(intr_kb);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (instr_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      instr_text.tStop = t;  // not accounting for scr refresh
      instr_text.frameNStop = frameN;  // exact frame index
      // update status
      instr_text.status = PsychoJS.Status.FINISHED;
      instr_text.setAutoDraw(false);
    }
    
    
    // *intr_kb* updates
    if (t >= 0.0 && intr_kb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intr_kb.tStart = t;  // (not accounting for frame time here)
      intr_kb.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intr_kb.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intr_kb.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intr_kb.clearEvents(); });
    }
    frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (intr_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      intr_kb.tStop = t;  // not accounting for scr refresh
      intr_kb.frameNStop = frameN;  // exact frame index
      // update status
      intr_kb.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (intr_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        intr_kb.tStop = t;  // not accounting for scr refresh
        intr_kb.frameNStop = frameN;  // exact frame index
        // update status
        intr_kb.status = PsychoJS.Status.FINISHED;
        intr_kb.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if intr_kb is active this frame...
      if (intr_kb.status === PsychoJS.Status.STARTED) {
        let theseKeys = intr_kb.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _intr_kb_allKeys = _intr_kb_allKeys.concat(theseKeys);
        if (_intr_kb_allKeys.length > 0) {
          intr_kb.keys = _intr_kb_allKeys[_intr_kb_allKeys.length - 1].name;  // just the last key pressed
          intr_kb.rt = _intr_kb_allKeys[_intr_kb_allKeys.length - 1].rt;
          intr_kb.duration = _intr_kb_allKeys[_intr_kb_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      instrComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function instrRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'instr' ---
      instrComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(intr_kb.corr, level);
      }
      psychoJS.experiment.addData('intr_kb.keys', intr_kb.keys);
      if (typeof intr_kb.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('intr_kb.rt', intr_kb.rt);
          psychoJS.experiment.addData('intr_kb.duration', intr_kb.duration);
          routineTimer.reset();
          }
      
      intr_kb.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (instrMaxDurationReached) {
          instrClock.add(instrMaxDuration);
      } else {
          instrClock.add(20.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials = new TrialHandler({
        psychoJS: psychoJS,
        nReps: seq_len, method: TrialHandler.Method.RANDOM,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials'
      });
      psychoJS.experiment.addLoop(trials); // add the loop to the experiment
      currentLoop = trials;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      trials.forEach(function() {
        snapshot = trials.getSnapshot();
      
        trialsLoopScheduler.add(importConditions(snapshot));
        trialsLoopScheduler.add(trialRoutineBegin(snapshot));
        trialsLoopScheduler.add(trialRoutineEachFrame());
        trialsLoopScheduler.add(trialRoutineEnd(snapshot));
        trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function trialsLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function trialsLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var trialMaxDurationReached;
var doll_im_path;
var _task_kb_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'trial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      trialClock.reset(routineTimer.getTime());
      routineTimer.add(1.200000);
      trialMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code
      doll_im_path = im_sequence[trials.thisRepN];
      
      doll_im.setImage(doll_im_path);
      task_kb.keys = undefined;
      task_kb.rt = undefined;
      _task_kb_allKeys = [];
      psychoJS.experiment.addData('trial.started', globalClock.getTime());
      trialMaxDuration = null
      // keep track of which components have finished
      trialComponents = [];
      trialComponents.push(doll_im);
      trialComponents.push(task_kb);
      
      trialComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function trialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'trial' ---
      // get current time
      t = trialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *doll_im* updates
      if (t >= 0.0 && doll_im.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        doll_im.tStart = t;  // (not accounting for frame time here)
        doll_im.frameNStart = frameN;  // exact frame index
        
        doll_im.setAutoDraw(true);
      }
      
      
      // if doll_im is active this frame...
      if (doll_im.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (doll_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        doll_im.tStop = t;  // not accounting for scr refresh
        doll_im.frameNStop = frameN;  // exact frame index
        // update status
        doll_im.status = PsychoJS.Status.FINISHED;
        doll_im.setAutoDraw(false);
      }
      
      
      // *task_kb* updates
      if (t >= 0.0 && task_kb.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        task_kb.tStart = t;  // (not accounting for frame time here)
        task_kb.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { task_kb.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { task_kb.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { task_kb.clearEvents(); });
      }
      frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (task_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        task_kb.tStop = t;  // not accounting for scr refresh
        task_kb.frameNStop = frameN;  // exact frame index
        // update status
        task_kb.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (task_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          task_kb.tStop = t;  // not accounting for scr refresh
          task_kb.frameNStop = frameN;  // exact frame index
          // update status
          task_kb.status = PsychoJS.Status.FINISHED;
          task_kb.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if task_kb is active this frame...
        if (task_kb.status === PsychoJS.Status.STARTED) {
          let theseKeys = task_kb.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _task_kb_allKeys = _task_kb_allKeys.concat(theseKeys);
          if (_task_kb_allKeys.length > 0) {
            task_kb.keys = _task_kb_allKeys[_task_kb_allKeys.length - 1].name;  // just the last key pressed
            task_kb.rt = _task_kb_allKeys[_task_kb_allKeys.length - 1].rt;
            task_kb.duration = _task_kb_allKeys[_task_kb_allKeys.length - 1].duration;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        trialComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'trial' ---
        trialComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(task_kb.corr, level);
        }
        psychoJS.experiment.addData('task_kb.keys', task_kb.keys);
        if (typeof task_kb.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('task_kb.rt', task_kb.rt);
            psychoJS.experiment.addData('task_kb.duration', task_kb.duration);
            }
        
        task_kb.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (trialMaxDurationReached) {
            trialClock.add(trialMaxDuration);
        } else {
            trialClock.add(1.200000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var feedbackMaxDurationReached;
var task_kb_keys;
var commission_error_count;
var nogo_count;
var commission_error_rate;
var feedback_str;
var _fb_kb_allKeys;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'feedback' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        feedbackClock.reset(routineTimer.getTime());
        routineTimer.add(20.000000);
        feedbackMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_2
        task_kb_keys = trials.data["task_kb.keys"];
        commission_error_count = 0;
        nogo_count = 0;
        for (var i = 0, _pj_a = task_kb_keys[0].length; (i < _pj_a); i += 1) {
            if ((sequence[i] === 1)) {
                nogo_count += 1;
                if ((task_kb_keys[0][i] === "space")) {
                    commission_error_count += 1;
                }
            }
        }
        commission_error_rate = (commission_error_count / nogo_count);
        feedback_str = ("Commission error rate: " + commission_error_rate.toString());
        
        fb_text.setText(feedback_str);
        fb_kb.keys = undefined;
        fb_kb.rt = undefined;
        _fb_kb_allKeys = [];
        psychoJS.experiment.addData('feedback.started', globalClock.getTime());
        feedbackMaxDuration = null
        // keep track of which components have finished
        feedbackComponents = [];
        feedbackComponents.push(fb_text);
        feedbackComponents.push(fb_kb);
        
        feedbackComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function feedbackRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'feedback' ---
        // get current time
        t = feedbackClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *fb_text* updates
        if (t >= 0.0 && fb_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          fb_text.tStart = t;  // (not accounting for frame time here)
          fb_text.frameNStart = frameN;  // exact frame index
          
          fb_text.setAutoDraw(true);
        }
        
        
        // if fb_text is active this frame...
        if (fb_text.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (fb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          fb_text.tStop = t;  // not accounting for scr refresh
          fb_text.frameNStop = frameN;  // exact frame index
          // update status
          fb_text.status = PsychoJS.Status.FINISHED;
          fb_text.setAutoDraw(false);
        }
        
        
        // *fb_kb* updates
        if (t >= 0.0 && fb_kb.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          fb_kb.tStart = t;  // (not accounting for frame time here)
          fb_kb.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { fb_kb.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { fb_kb.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { fb_kb.clearEvents(); });
        }
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (fb_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          fb_kb.tStop = t;  // not accounting for scr refresh
          fb_kb.frameNStop = frameN;  // exact frame index
          // update status
          fb_kb.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (fb_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            fb_kb.tStop = t;  // not accounting for scr refresh
            fb_kb.frameNStop = frameN;  // exact frame index
            // update status
            fb_kb.status = PsychoJS.Status.FINISHED;
            fb_kb.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if fb_kb is active this frame...
          if (fb_kb.status === PsychoJS.Status.STARTED) {
            let theseKeys = fb_kb.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _fb_kb_allKeys = _fb_kb_allKeys.concat(theseKeys);
            if (_fb_kb_allKeys.length > 0) {
              fb_kb.keys = _fb_kb_allKeys[_fb_kb_allKeys.length - 1].name;  // just the last key pressed
              fb_kb.rt = _fb_kb_allKeys[_fb_kb_allKeys.length - 1].rt;
              fb_kb.duration = _fb_kb_allKeys[_fb_kb_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          feedbackComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function feedbackRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'feedback' ---
          feedbackComponents.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(fb_kb.corr, level);
          }
          psychoJS.experiment.addData('fb_kb.keys', fb_kb.keys);
          if (typeof fb_kb.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('fb_kb.rt', fb_kb.rt);
              psychoJS.experiment.addData('fb_kb.duration', fb_kb.duration);
              routineTimer.reset();
              }
          
          fb_kb.stop();
          if (routineForceEnded) {
              routineTimer.reset();} else if (feedbackMaxDurationReached) {
              feedbackClock.add(feedbackMaxDuration);
          } else {
              feedbackClock.add(20.000000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
function importConditions(currentLoop) {
        return async function () {
          psychoJS.importAttributes(currentLoop.getCurrentTrial());
          return Scheduler.Event.NEXT;
          };
      }
      
      
async function quitPsychoJS(message, isCompleted) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry();
        }
        psychoJS.window.close();
        psychoJS.quit({message: message, isCompleted: isCompleted});
        
        return Scheduler.Event.QUIT;
      }
