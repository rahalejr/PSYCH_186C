/***************************************** 
 * Redlight_Greenlight_Casino_Final *
 *****************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'redlight_greenlight_casino_final';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'hit_outcome': '1',
    'fa_outcome': '0',
    'hits_goal': '20',
    'num_go_trials': '200',
    'num_nogo_trials': '100',
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
const name_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(name_loopLoopBegin(name_loopLoopScheduler));
flowScheduler.add(name_loopLoopScheduler);
flowScheduler.add(name_loopLoopEnd);


flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



const congrats_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(congrats_loopLoopBegin(congrats_loopLoopScheduler));
flowScheduler.add(congrats_loopLoopScheduler);
flowScheduler.add(congrats_loopLoopEnd);


flowScheduler.add(congratulations_staticRoutineBegin());
flowScheduler.add(congratulations_staticRoutineEachFrame());
flowScheduler.add(congratulations_staticRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

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

async function experimentInit() {
  // Initialize components for Routine "names"
  namesClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
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
  import * as random from 'random';
  var background_sound, distance_counter, distance_goal, im_sequence, image_names, inc_h, inc_w, max_h, max_w, min_h, min_w, num_0s, num_1s, seq_len, sequence;
  num_0s = Number.parseInt(expInfo["num_go_trials"]);
  num_1s = Number.parseInt(expInfo["num_nogo_trials"]);
  sequence = [];
  for (var i = 0, _pj_a = num_0s; (i < _pj_a); i += 1) {
      sequence.append(0);
  }
  for (var i = 0, _pj_a = num_1s; (i < _pj_a); i += 1) {
      sequence.append(1);
  }
  random.shuffle(sequence);
  image_names = ["resources/squid_game_doll_backward", "resources/squid_game_doll_forward"];
  im_sequence = [];
  for (var i, _pj_c = 0, _pj_a = sequence, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      im_sequence.append(image_names[i]);
  }
  seq_len = sequence.length;
  distance_counter = 0;
  distance_goal = Number.parseInt(expInfo["hits_goal"]);
  min_w = 0.14;
  min_h = 0.2;
  max_w = 0.56;
  max_h = 0.8;
  inc_w = ((max_w - min_w) / distance_goal);
  inc_h = ((max_h - min_h) / distance_goal);
  background_sound = new sound.Sound("resources\\pink_soldiers_song.wav");
  
  doll_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'doll_im', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  task_kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "game_over"
  game_overClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [3, 3][0], height: [3, 3][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color((0.7255, -0.8431, -0.5294)), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  angry_doll_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'angry_doll_im', units : undefined, 
    image : 'resources/squid_game_doll_angry.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "congratulations"
  congratulationsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  import * as random from 'random';
  var congrats_nReps;
  congrats_nReps = random.randrange(70, 73);
  
  circle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle', units : undefined, 
    image : 'resources/dalgona_circle.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.5), 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'star', units : undefined, 
    image : 'resources/dalgona_star.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  triangle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'triangle', units : undefined, 
    image : 'resources/dalgona_triangle.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.5, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  next_game = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_game',
    text: 'Congratulations. You have passed the first game.\n\nPlease select a shape for the next game...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "congratulations_static"
  congratulations_staticClock = new util.Clock();
  circle_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle_2', units : undefined, 
    image : 'resources/dalgona_circle.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.5), 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  star_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'star_2', units : undefined, 
    image : 'resources/dalgona_star.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  triangle_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'triangle_2', units : undefined, 
    image : 'resources/dalgona_triangle.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.5, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  next_game_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_game_2',
    text: 'Congratulations. You have passed the first game.\n\nPlease select a shape for the next game...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function name_loopLoopBegin(name_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    name_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loop_iter, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'name_loop'
    });
    psychoJS.experiment.addLoop(name_loop); // add the loop to the experiment
    currentLoop = name_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisName_loop of name_loop) {
      snapshot = name_loop.getSnapshot();
      name_loopLoopScheduler.add(importConditions(snapshot));
      name_loopLoopScheduler.add(namesRoutineBegin(snapshot));
      name_loopLoopScheduler.add(namesRoutineEachFrame());
      name_loopLoopScheduler.add(namesRoutineEnd(snapshot));
      name_loopLoopScheduler.add(name_loopLoopEndIteration(name_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function name_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(name_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function name_loopLoopEndIteration(scheduler, snapshot) {
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
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(game_overRoutineBegin(snapshot));
      trialsLoopScheduler.add(game_overRoutineEachFrame());
      trialsLoopScheduler.add(game_overRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
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

function congrats_loopLoopBegin(congrats_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    congrats_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: congrats_nReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'congrats_loop'
    });
    psychoJS.experiment.addLoop(congrats_loop); // add the loop to the experiment
    currentLoop = congrats_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCongrats_loop of congrats_loop) {
      snapshot = congrats_loop.getSnapshot();
      congrats_loopLoopScheduler.add(importConditions(snapshot));
      congrats_loopLoopScheduler.add(congratulationsRoutineBegin(snapshot));
      congrats_loopLoopScheduler.add(congratulationsRoutineEachFrame());
      congrats_loopLoopScheduler.add(congratulationsRoutineEnd(snapshot));
      congrats_loopLoopScheduler.add(congrats_loopLoopEndIteration(congrats_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function congrats_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(congrats_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function congrats_loopLoopEndIteration(scheduler, snapshot) {
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

function namesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'names' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    namesClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    namesMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(names_text);
    psychoJS.experiment.addData('names.started', globalClock.getTime());
    namesMaxDuration = null
    // keep track of which components have finished
    namesComponents = [];
    namesComponents.push(text);
    
    for (const thisComponent of namesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function namesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'names' ---
    // get current time
    t = namesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
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
    for (const thisComponent of namesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function namesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'names' ---
    for (const thisComponent of namesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('names.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (namesMaxDurationReached) {
        namesClock.add(namesMaxDuration);
    } else {
        namesClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

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
      for (const thisComponent of instrComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
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
      for (const thisComponent of instrComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
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
      routineTimer.add(0.800000);
      trialMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code
      doll_im_path = im_sequence[trials.thisRepN];
      im_w = (min_w + (distance_counter * inc_w));
      im_h = (min_h + (distance_counter * inc_h));
      if ((background_sound.status !== 1)) {
          background_sound.play();
      }
      
      doll_im.setSize([im_w, im_h]);
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
      
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
      
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
      frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (task_kb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        task_kb.tStop = t;  // not accounting for scr refresh
        task_kb.frameNStop = frameN;  // exact frame index
        // update status
        task_kb.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
        for (const thisComponent of trialComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
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
        for (const thisComponent of trialComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // Run 'End Routine' code from code
        if (((sequence[trials.thisRepN] === 0) && (task_kb.keys === "space"))) {
            distance_counter = (distance_counter + Number.parseInt(expInfo["hit_outcome"]));
        } else {
            if (((sequence[trials.thisRepN] === 1) && (task_kb.keys === "space"))) {
                if ((expInfo["fa_outcome"] === "beginning")) {
                    distance_counter = 0;
                } else {
                    if ((distance_counter >= Number.parseInt(expInfo["fa_outcome"]))) {
                        distance_counter = (distance_counter - Number.parseInt(expInfo["fa_outcome"]));
                    } else {
                        distance_counter = 0;
                    }
                }
            }
        }
        console.log(distance_counter);
        if ((distance_counter === distance_goal)) {
            background_sound.stop();
            trials.finished = true;
        }
        
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
            trialClock.add(0.800000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    function game_overRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'game_over' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        game_overClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        game_overMaxDurationReached = false;
        // update component parameters for each repeat
        angry_doll_im.setSize([im_w, im_h]);
        // Run 'Begin Routine' code from code_3
        continueRoutine = false;
        if (((sequence[trials.thisRepN] === 1) && (task_kb.keys === "space"))) {
            continueRoutine = true;
        }
        
        psychoJS.experiment.addData('game_over.started', globalClock.getTime());
        game_overMaxDuration = null
        // keep track of which components have finished
        game_overComponents = [];
        game_overComponents.push(polygon);
        game_overComponents.push(angry_doll_im);
        
        for (const thisComponent of game_overComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    function game_overRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'game_over' ---
        // get current time
        t = game_overClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *polygon* updates
        if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          polygon.tStart = t;  // (not accounting for frame time here)
          polygon.frameNStart = frameN;  // exact frame index
          
          polygon.setAutoDraw(true);
        }
        
        
        // if polygon is active this frame...
        if (polygon.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          polygon.tStop = t;  // not accounting for scr refresh
          polygon.frameNStop = frameN;  // exact frame index
          // update status
          polygon.status = PsychoJS.Status.FINISHED;
          polygon.setAutoDraw(false);
        }
        
        
        // *angry_doll_im* updates
        if (t >= 0.0 && angry_doll_im.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          angry_doll_im.tStart = t;  // (not accounting for frame time here)
          angry_doll_im.frameNStart = frameN;  // exact frame index
          
          angry_doll_im.setAutoDraw(true);
        }
        
        
        // if angry_doll_im is active this frame...
        if (angry_doll_im.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (angry_doll_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          angry_doll_im.tStop = t;  // not accounting for scr refresh
          angry_doll_im.frameNStop = frameN;  // exact frame index
          // update status
          angry_doll_im.status = PsychoJS.Status.FINISHED;
          angry_doll_im.setAutoDraw(false);
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
        for (const thisComponent of game_overComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    function game_overRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'game_over' ---
        for (const thisComponent of game_overComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('game_over.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (game_overMaxDurationReached) {
            game_overClock.add(game_overMaxDuration);
        } else {
            game_overClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    function congratulationsRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'congratulations' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        congratulationsClock.reset(routineTimer.getTime());
        routineTimer.add(0.100000);
        congratulationsMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_4
        if (((congrats_loop.thisRepN % 3) === 0)) {
            opacities = [0.5, 0.5, 1];
        } else {
            if (((congrats_loop.thisRepN % 3) === 1)) {
                opacities = [0.5, 1, 0.5];
            } else {
                if (((congrats_loop.thisRepN % 3) === 2)) {
                    opacities = [1, 0.5, 0.5];
                }
            }
        }
        opacity_circle = opacities[0];
        opacity_star = opacities[1];
        opacity_triangle = opacities[2];
        if ((congrats_loop.thisRepN === 0)) {
            casino_sound = new sound.Sound("resources\\casino_sound.wav");
            casino_sound.play();
        }
        
        circle.setOpacity(opacity_circle);
        star.setOpacity(opacity_star);
        triangle.setOpacity(opacity_triangle);
        psychoJS.experiment.addData('congratulations.started', globalClock.getTime());
        congratulationsMaxDuration = null
        // keep track of which components have finished
        congratulationsComponents = [];
        congratulationsComponents.push(circle);
        congratulationsComponents.push(star);
        congratulationsComponents.push(triangle);
        congratulationsComponents.push(next_game);
        
        for (const thisComponent of congratulationsComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    function congratulationsRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'congratulations' ---
        // get current time
        t = congratulationsClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *circle* updates
        if (t >= 0.0 && circle.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          circle.tStart = t;  // (not accounting for frame time here)
          circle.frameNStart = frameN;  // exact frame index
          
          circle.setAutoDraw(true);
        }
        
        
        // if circle is active this frame...
        if (circle.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          circle.tStop = t;  // not accounting for scr refresh
          circle.frameNStop = frameN;  // exact frame index
          // update status
          circle.status = PsychoJS.Status.FINISHED;
          circle.setAutoDraw(false);
        }
        
        
        // *star* updates
        if (t >= 0.0 && star.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          star.tStart = t;  // (not accounting for frame time here)
          star.frameNStart = frameN;  // exact frame index
          
          star.setAutoDraw(true);
        }
        
        
        // if star is active this frame...
        if (star.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (star.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          star.tStop = t;  // not accounting for scr refresh
          star.frameNStop = frameN;  // exact frame index
          // update status
          star.status = PsychoJS.Status.FINISHED;
          star.setAutoDraw(false);
        }
        
        
        // *triangle* updates
        if (t >= 0.0 && triangle.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          triangle.tStart = t;  // (not accounting for frame time here)
          triangle.frameNStart = frameN;  // exact frame index
          
          triangle.setAutoDraw(true);
        }
        
        
        // if triangle is active this frame...
        if (triangle.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (triangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          triangle.tStop = t;  // not accounting for scr refresh
          triangle.frameNStop = frameN;  // exact frame index
          // update status
          triangle.status = PsychoJS.Status.FINISHED;
          triangle.setAutoDraw(false);
        }
        
        
        // *next_game* updates
        if (t >= 0.0 && next_game.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          next_game.tStart = t;  // (not accounting for frame time here)
          next_game.frameNStart = frameN;  // exact frame index
          
          next_game.setAutoDraw(true);
        }
        
        
        // if next_game is active this frame...
        if (next_game.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (next_game.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          next_game.tStop = t;  // not accounting for scr refresh
          next_game.frameNStop = frameN;  // exact frame index
          // update status
          next_game.status = PsychoJS.Status.FINISHED;
          next_game.setAutoDraw(false);
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
        for (const thisComponent of congratulationsComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    function congratulationsRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'congratulations' ---
        for (const thisComponent of congratulationsComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('congratulations.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (congratulationsMaxDurationReached) {
            congratulationsClock.add(congratulationsMaxDuration);
        } else {
            congratulationsClock.add(0.100000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    function congratulations_staticRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'congratulations_static' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        congratulations_staticClock.reset(routineTimer.getTime());
        routineTimer.add(20.000000);
        congratulations_staticMaxDurationReached = false;
        // update component parameters for each repeat
        circle_2.setOpacity(opacity_circle);
        star_2.setOpacity(opacity_star);
        triangle_2.setOpacity(opacity_triangle);
        key_resp.keys = undefined;
        key_resp.rt = undefined;
        _key_resp_allKeys = [];
        psychoJS.experiment.addData('congratulations_static.started', globalClock.getTime());
        congratulations_staticMaxDuration = null
        // keep track of which components have finished
        congratulations_staticComponents = [];
        congratulations_staticComponents.push(circle_2);
        congratulations_staticComponents.push(star_2);
        congratulations_staticComponents.push(triangle_2);
        congratulations_staticComponents.push(next_game_2);
        congratulations_staticComponents.push(key_resp);
        
        for (const thisComponent of congratulations_staticComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    function congratulations_staticRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'congratulations_static' ---
        // get current time
        t = congratulations_staticClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *circle_2* updates
        if (t >= 0.0 && circle_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          circle_2.tStart = t;  // (not accounting for frame time here)
          circle_2.frameNStart = frameN;  // exact frame index
          
          circle_2.setAutoDraw(true);
        }
        
        
        // if circle_2 is active this frame...
        if (circle_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (circle_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          circle_2.tStop = t;  // not accounting for scr refresh
          circle_2.frameNStop = frameN;  // exact frame index
          // update status
          circle_2.status = PsychoJS.Status.FINISHED;
          circle_2.setAutoDraw(false);
        }
        
        
        // *star_2* updates
        if (t >= 0.0 && star_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          star_2.tStart = t;  // (not accounting for frame time here)
          star_2.frameNStart = frameN;  // exact frame index
          
          star_2.setAutoDraw(true);
        }
        
        
        // if star_2 is active this frame...
        if (star_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (star_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          star_2.tStop = t;  // not accounting for scr refresh
          star_2.frameNStop = frameN;  // exact frame index
          // update status
          star_2.status = PsychoJS.Status.FINISHED;
          star_2.setAutoDraw(false);
        }
        
        
        // *triangle_2* updates
        if (t >= 0.0 && triangle_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          triangle_2.tStart = t;  // (not accounting for frame time here)
          triangle_2.frameNStart = frameN;  // exact frame index
          
          triangle_2.setAutoDraw(true);
        }
        
        
        // if triangle_2 is active this frame...
        if (triangle_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (triangle_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          triangle_2.tStop = t;  // not accounting for scr refresh
          triangle_2.frameNStop = frameN;  // exact frame index
          // update status
          triangle_2.status = PsychoJS.Status.FINISHED;
          triangle_2.setAutoDraw(false);
        }
        
        
        // *next_game_2* updates
        if (t >= 0.0 && next_game_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          next_game_2.tStart = t;  // (not accounting for frame time here)
          next_game_2.frameNStart = frameN;  // exact frame index
          
          next_game_2.setAutoDraw(true);
        }
        
        
        // if next_game_2 is active this frame...
        if (next_game_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (next_game_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          next_game_2.tStop = t;  // not accounting for scr refresh
          next_game_2.frameNStop = frameN;  // exact frame index
          // update status
          next_game_2.status = PsychoJS.Status.FINISHED;
          next_game_2.setAutoDraw(false);
        }
        
        
        // *key_resp* updates
        if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp.tStart = t;  // (not accounting for frame time here)
          key_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
        }
        frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp.tStop = t;  // not accounting for scr refresh
          key_resp.frameNStop = frameN;  // exact frame index
          // update status
          key_resp.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 20.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            key_resp.tStop = t;  // not accounting for scr refresh
            key_resp.frameNStop = frameN;  // exact frame index
            // update status
            key_resp.status = PsychoJS.Status.FINISHED;
            key_resp.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if key_resp is active this frame...
          if (key_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = key_resp.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
            if (_key_resp_allKeys.length > 0) {
              key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
              key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
              key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
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
          for (const thisComponent of congratulations_staticComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
              break;
            }
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      function congratulations_staticRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'congratulations_static' ---
          for (const thisComponent of congratulations_staticComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          }
          psychoJS.experiment.addData('congratulations_static.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(key_resp.corr, level);
          }
          psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
          if (typeof key_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
              psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
              routineTimer.reset();
              }
          
          key_resp.stop();
          if (routineForceEnded) {
              routineTimer.reset();} else if (congratulations_staticMaxDurationReached) {
              congratulations_staticClock.add(congratulations_staticMaxDuration);
          } else {
              congratulations_staticClock.add(20.000000);
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
