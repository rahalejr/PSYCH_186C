#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.3),
    on Thu Oct 29 11:38:08 2026
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Run 'Before Experiment' code from code_5
from random import shuffle

name_A = ['billy' for i in range(10)] + ['suzy' for i in range(10)]
name_B = ['suzy' if name_A[ind]== 'billy' else 'billy' for i,ind in enumerate(name_A)]
loop_iter = len(name_A)

shuffle(name_A)
shuffle(name_B)
# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2026.1.3'
expName = 'redlight_greenlight_casino_final'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': '',
    'hit_outcome': '1',
    'fa_outcome': '0',
    'hits_goal': '20',
    'num_go_trials': '200',
    'num_nogo_trials': '100',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 864]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/culdesac/Documents/PhD/Courses/PSYCH 186C/psychopy-lab-main/lab4_redlight_greenlight_approach/redlight_greenlight_casino_final_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    # store pilot mode in data file
    thisExp.addData('piloting', PILOTING, priority=priority.LOW)
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('exp')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "names" ---
    text = visual.TextStim(win=win, name='text',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    # Run 'Begin Experiment' code from code_5
    
    
    
    
    # --- Initialize components for Routine "instr" ---
    instr_text = visual.TextStim(win=win, name='instr_text',
        text='The game that you are about to play is called Red Light, Green Light. You will see a rapid serial presentation of two dolls - one facing forward and the other facing backwards. Whenever you see a doll facing backwards ("Green Light"), you will respond by pressing the space bar as quickly as you can. Whenever you see a doll facing forwards ("Red Light"), you will withhold responding. \n\nWhen you\'re ready, please press the spacebar to begin!',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    intr_kb = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "trial" ---
    # Run 'Begin Experiment' code from code
    # Import these modules:
    import random
    
    # Create list sequence of 1's and 0's:
    num_0s = int(expInfo['num_go_trials'])
    num_1s = int(expInfo['num_nogo_trials'])
    sequence = []
    for i in range(num_0s):
        sequence.append(0)
    for i in range(num_1s):
        sequence.append(1)
    
    # Randomize the sequence:
    random.shuffle(sequence)
    
    # Translate sequence to its corresponding image:
    image_names = ["resources/squid_game_doll_backward","resources/squid_game_doll_forward"]
    im_sequence = []
    for i in sequence:
        im_sequence.append(image_names[i])
    
    # Some specifications:
    seq_len = len(sequence) # specify the nReps
    distance_counter = 0    # initiate distance counter
    distance_goal = int(expInfo['hits_goal'])      # specify "distance" goal (aka number of hits)
    
    min_w = .14             # min or starting width of the doll
    min_h = .2              # min or starting height
    
    max_w = .56             # max or ending width
    max_h = .8              # max or ending height
    
    inc_w = (max_w - min_w)/distance_goal   # calculate a sensible increment (how much to increase by with each hit?)
    inc_h = (max_h - min_h)/distance_goal
    
    # Audio Object
    background_sound = sound.Sound('resources/pink_soldiers_song.wav')
    doll_im = visual.ImageStim(
        win=win,
        name='doll_im', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    task_kb = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "game_over" ---
    polygon = visual.Rect(
        win=win, name='polygon',
        width=(3,3)[0], height=(3,3)[1],
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor=(0.7255, -0.8431, -0.5294),
        opacity=None, depth=0.0, interpolate=True)
    angry_doll_im = visual.ImageStim(
        win=win,
        name='angry_doll_im', 
        image='resources/squid_game_doll_angry.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "congratulations" ---
    # Run 'Begin Experiment' code from code_4
    import random
    # Random number of iterations
    congrats_nReps = random.randrange(70,73)
    circle = visual.ImageStim(
        win=win,
        name='circle', 
        image='resources/dalgona_circle.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    star = visual.ImageStim(
        win=win,
        name='star', 
        image='resources/dalgona_star.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    triangle = visual.ImageStim(
        win=win,
        name='triangle', 
        image='resources/dalgona_triangle.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    next_game = visual.TextStim(win=win, name='next_game',
        text='Congratulations. You have passed the first game.\n\nPlease select a shape for the next game...',
        font='Open Sans',
        pos=(0, 0.3), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "congratulations_static" ---
    circle_2 = visual.ImageStim(
        win=win,
        name='circle_2', 
        image='resources/dalgona_circle.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    star_2 = visual.ImageStim(
        win=win,
        name='star_2', 
        image='resources/dalgona_star.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    triangle_2 = visual.ImageStim(
        win=win,
        name='triangle_2', 
        image='resources/dalgona_triangle.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, 0), draggable=False, size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    next_game_2 = visual.TextStim(win=win, name='next_game_2',
        text='Congratulations. You have passed the first game.\n\nPlease select a shape for the next game...',
        font='Open Sans',
        pos=(0, 0.3), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # set up handler to look after randomisation of conditions etc
    name_loop = data.TrialHandler2(
        name='name_loop',
        nReps=loop_iter, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(name_loop)  # add the loop to the experiment
    thisName_loop = name_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisName_loop.rgb)
    if thisName_loop != None:
        for paramName in thisName_loop:
            globals()[paramName] = thisName_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisName_loop in name_loop:
        name_loop.status = STARTED
        if hasattr(thisName_loop, 'status'):
            thisName_loop.status = STARTED
        currentLoop = name_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisName_loop.rgb)
        if thisName_loop != None:
            for paramName in thisName_loop:
                globals()[paramName] = thisName_loop[paramName]
        
        # --- Prepare to start Routine "names" ---
        # create an object to store info about Routine names
        names = data.Routine(
            name='names',
            components=[text],
        )
        names.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text.setText(names_text)
        # Run 'Begin Routine' code from code_5
        names_text = f"A: {name_A[name_loop.thisN]}, {name_B[name_loop.thisN]}"
        # store start times for names
        names.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        names.tStart = globalClock.getTime(format='float')
        names.status = STARTED
        thisExp.addData('names.started', names.tStart)
        names.maxDuration = None
        # keep track of which components have finished
        namesComponents = names.components
        for thisComponent in names.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "names" ---
        thisExp.currentRoutine = names
        names.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # if trial has changed, end Routine now
            if hasattr(thisName_loop, 'status') and thisName_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            
            # if text is starting this frame...
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.started')
                # update status
                text.status = STARTED
                text.setAutoDraw(True)
            
            # if text is active this frame...
            if text.status == STARTED:
                # update params
                pass
            
            # if text is stopping this frame...
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.tStopRefresh = tThisFlipGlobal  # on global time
                    text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text.stopped')
                    # update status
                    text.status = FINISHED
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=names,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                names.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if names.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in names.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "names" ---
        for thisComponent in names.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for names
        names.tStop = globalClock.getTime(format='float')
        names.tStopRefresh = tThisFlipGlobal
        thisExp.addData('names.stopped', names.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if names.maxDurationReached:
            routineTimer.addTime(-names.maxDuration)
        elif names.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        # mark thisName_loop as finished
        if hasattr(thisName_loop, 'status'):
            thisName_loop.status = FINISHED
        # if awaiting a pause, pause now
        if name_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            name_loop.status = STARTED
        thisExp.nextEntry()
        
    # completed loop_iter repeats of 'name_loop'
    name_loop.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "instr" ---
    # create an object to store info about Routine instr
    instr = data.Routine(
        name='instr',
        components=[instr_text, intr_kb],
    )
    instr.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for intr_kb
    intr_kb.keys = []
    intr_kb.rt = []
    _intr_kb_allKeys = []
    # store start times for instr
    instr.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instr.tStart = globalClock.getTime(format='float')
    instr.status = STARTED
    thisExp.addData('instr.started', instr.tStart)
    instr.maxDuration = None
    # keep track of which components have finished
    instrComponents = instr.components
    for thisComponent in instr.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr" ---
    thisExp.currentRoutine = instr
    instr.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 20.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr_text* updates
        
        # if instr_text is starting this frame...
        if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_text.frameNStart = frameN  # exact frame index
            instr_text.tStart = t  # local t and not account for scr refresh
            instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_text.started')
            # update status
            instr_text.status = STARTED
            instr_text.setAutoDraw(True)
        
        # if instr_text is active this frame...
        if instr_text.status == STARTED:
            # update params
            pass
        
        # if instr_text is stopping this frame...
        if instr_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > instr_text.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                instr_text.tStop = t  # not accounting for scr refresh
                instr_text.tStopRefresh = tThisFlipGlobal  # on global time
                instr_text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instr_text.stopped')
                # update status
                instr_text.status = FINISHED
                instr_text.setAutoDraw(False)
        
        # *intr_kb* updates
        waitOnFlip = False
        
        # if intr_kb is starting this frame...
        if intr_kb.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intr_kb.frameNStart = frameN  # exact frame index
            intr_kb.tStart = t  # local t and not account for scr refresh
            intr_kb.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intr_kb, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'intr_kb.started')
            # update status
            intr_kb.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(intr_kb.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(intr_kb.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if intr_kb is stopping this frame...
        if intr_kb.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > intr_kb.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                intr_kb.tStop = t  # not accounting for scr refresh
                intr_kb.tStopRefresh = tThisFlipGlobal  # on global time
                intr_kb.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'intr_kb.stopped')
                # update status
                intr_kb.status = FINISHED
                intr_kb.status = FINISHED
        if intr_kb.status == STARTED and not waitOnFlip:
            theseKeys = intr_kb.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _intr_kb_allKeys.extend(theseKeys)
            if len(_intr_kb_allKeys):
                intr_kb.keys = _intr_kb_allKeys[-1].name  # just the last key pressed
                intr_kb.rt = _intr_kb_allKeys[-1].rt
                intr_kb.duration = _intr_kb_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=instr,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            instr.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if instr.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in instr.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr" ---
    for thisComponent in instr.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instr
    instr.tStop = globalClock.getTime(format='float')
    instr.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instr.stopped', instr.tStop)
    # check responses
    if intr_kb.keys in ['', [], None]:  # No response was made
        intr_kb.keys = None
    thisExp.addData('intr_kb.keys',intr_kb.keys)
    if intr_kb.keys != None:  # we had a response
        thisExp.addData('intr_kb.rt', intr_kb.rt)
        thisExp.addData('intr_kb.duration', intr_kb.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if instr.maxDurationReached:
        routineTimer.addTime(-instr.maxDuration)
    elif instr.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-20.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=seq_len, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        trials.status = STARTED
        if hasattr(thisTrial, 'status'):
            thisTrial.status = STARTED
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "trial" ---
        # create an object to store info about Routine trial
        trial = data.Routine(
            name='trial',
            components=[doll_im, task_kb],
        )
        trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        # grab the im path for this trial
        doll_im_path = im_sequence[trials.thisRepN]
        
        # update doll im size
        im_w = min_w + distance_counter*inc_w
        im_h = min_h + distance_counter*inc_h
        
        
        # start song if previous run has not finished
        #if background_sound.status != 1:
            #background_sound.play()
        doll_im.setSize([im_w, im_h])
        doll_im.setImage(doll_im_path)
        # create starting attributes for task_kb
        task_kb.keys = []
        task_kb.rt = []
        _task_kb_allKeys = []
        # store start times for trial
        trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial.tStart = globalClock.getTime(format='float')
        trial.status = STARTED
        thisExp.addData('trial.started', trial.tStart)
        trial.maxDuration = None
        # keep track of which components have finished
        trialComponents = trial.components
        for thisComponent in trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial" ---
        thisExp.currentRoutine = trial
        trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.8:
            # if trial has changed, end Routine now
            if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *doll_im* updates
            
            # if doll_im is starting this frame...
            if doll_im.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                doll_im.frameNStart = frameN  # exact frame index
                doll_im.tStart = t  # local t and not account for scr refresh
                doll_im.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(doll_im, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'doll_im.started')
                # update status
                doll_im.status = STARTED
                doll_im.setAutoDraw(True)
            
            # if doll_im is active this frame...
            if doll_im.status == STARTED:
                # update params
                pass
            
            # if doll_im is stopping this frame...
            if doll_im.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > doll_im.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    doll_im.tStop = t  # not accounting for scr refresh
                    doll_im.tStopRefresh = tThisFlipGlobal  # on global time
                    doll_im.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'doll_im.stopped')
                    # update status
                    doll_im.status = FINISHED
                    doll_im.setAutoDraw(False)
            
            # *task_kb* updates
            waitOnFlip = False
            
            # if task_kb is starting this frame...
            if task_kb.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_kb.frameNStart = frameN  # exact frame index
                task_kb.tStart = t  # local t and not account for scr refresh
                task_kb.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_kb, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'task_kb.started')
                # update status
                task_kb.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(task_kb.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(task_kb.clearEvents, eventType='keyboard')  # clear events on next screen flip
            
            # if task_kb is stopping this frame...
            if task_kb.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > task_kb.tStartRefresh + 0.8-frameTolerance:
                    # keep track of stop time/frame for later
                    task_kb.tStop = t  # not accounting for scr refresh
                    task_kb.tStopRefresh = tThisFlipGlobal  # on global time
                    task_kb.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'task_kb.stopped')
                    # update status
                    task_kb.status = FINISHED
                    task_kb.status = FINISHED
            if task_kb.status == STARTED and not waitOnFlip:
                theseKeys = task_kb.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _task_kb_allKeys.extend(theseKeys)
                if len(_task_kb_allKeys):
                    task_kb.keys = _task_kb_allKeys[-1].name  # just the last key pressed
                    task_kb.rt = _task_kb_allKeys[-1].rt
                    task_kb.duration = _task_kb_allKeys[-1].duration
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial
        trial.tStop = globalClock.getTime(format='float')
        trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial.stopped', trial.tStop)
        # Run 'End Routine' code from code
        # update distance counter 
        if sequence[trials.thisRepN] == 0 and task_kb.keys == 'space':      # test for HIT
            distance_counter = distance_counter + int(expInfo['hit_outcome'])
            
        elif sequence[trials.thisRepN] == 1 and task_kb.keys == 'space':    # test for FA
            if expInfo['fa_outcome'] == "beginning":
                distance_counter = 0
            else:
                if distance_counter >= int(expInfo['fa_outcome']):
                    distance_counter = distance_counter - int(expInfo['fa_outcome'])
                else:
                    distance_counter = 0
        
        
        print(distance_counter)
        
        # if dist counter == dist goal, end loop
        if distance_counter == distance_goal:
            background_sound.stop()
            trials.finished = True
        # check responses
        if task_kb.keys in ['', [], None]:  # No response was made
            task_kb.keys = None
        trials.addData('task_kb.keys',task_kb.keys)
        if task_kb.keys != None:  # we had a response
            trials.addData('task_kb.rt', task_kb.rt)
            trials.addData('task_kb.duration', task_kb.duration)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if trial.maxDurationReached:
            routineTimer.addTime(-trial.maxDuration)
        elif trial.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.800000)
        
        # --- Prepare to start Routine "game_over" ---
        # create an object to store info about Routine game_over
        game_over = data.Routine(
            name='game_over',
            components=[polygon, angry_doll_im],
        )
        game_over.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        angry_doll_im.setSize([im_w, im_h])
        # Run 'Begin Routine' code from code_3
        continueRoutine = False
        if sequence[trials.thisRepN] == 1 and task_kb.keys == 'space':    # test for FA
            continueRoutine = True
        
        # store start times for game_over
        game_over.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        game_over.tStart = globalClock.getTime(format='float')
        game_over.status = STARTED
        thisExp.addData('game_over.started', game_over.tStart)
        game_over.maxDuration = None
        # keep track of which components have finished
        game_overComponents = game_over.components
        for thisComponent in game_over.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "game_over" ---
        thisExp.currentRoutine = game_over
        game_over.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 3.0:
            # if trial has changed, end Routine now
            if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *polygon* updates
            
            # if polygon is starting this frame...
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'polygon.started')
                # update status
                polygon.status = STARTED
                polygon.setAutoDraw(True)
            
            # if polygon is active this frame...
            if polygon.status == STARTED:
                # update params
                pass
            
            # if polygon is stopping this frame...
            if polygon.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.tStopRefresh = tThisFlipGlobal  # on global time
                    polygon.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon.stopped')
                    # update status
                    polygon.status = FINISHED
                    polygon.setAutoDraw(False)
            
            # *angry_doll_im* updates
            
            # if angry_doll_im is starting this frame...
            if angry_doll_im.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                angry_doll_im.frameNStart = frameN  # exact frame index
                angry_doll_im.tStart = t  # local t and not account for scr refresh
                angry_doll_im.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(angry_doll_im, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'angry_doll_im.started')
                # update status
                angry_doll_im.status = STARTED
                angry_doll_im.setAutoDraw(True)
            
            # if angry_doll_im is active this frame...
            if angry_doll_im.status == STARTED:
                # update params
                pass
            
            # if angry_doll_im is stopping this frame...
            if angry_doll_im.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > angry_doll_im.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    angry_doll_im.tStop = t  # not accounting for scr refresh
                    angry_doll_im.tStopRefresh = tThisFlipGlobal  # on global time
                    angry_doll_im.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'angry_doll_im.stopped')
                    # update status
                    angry_doll_im.status = FINISHED
                    angry_doll_im.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=game_over,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                game_over.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if game_over.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in game_over.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "game_over" ---
        for thisComponent in game_over.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for game_over
        game_over.tStop = globalClock.getTime(format='float')
        game_over.tStopRefresh = tThisFlipGlobal
        thisExp.addData('game_over.stopped', game_over.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if game_over.maxDurationReached:
            routineTimer.addTime(-game_over.maxDuration)
        elif game_over.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-3.000000)
        # mark thisTrial as finished
        if hasattr(thisTrial, 'status'):
            thisTrial.status = FINISHED
        # if awaiting a pause, pause now
        if trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            trials.status = STARTED
        thisExp.nextEntry()
        
    # completed seq_len repeats of 'trials'
    trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # set up handler to look after randomisation of conditions etc
    congrats_loop = data.TrialHandler2(
        name='congrats_loop',
        nReps=congrats_nReps, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(congrats_loop)  # add the loop to the experiment
    thisCongrats_loop = congrats_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisCongrats_loop.rgb)
    if thisCongrats_loop != None:
        for paramName in thisCongrats_loop:
            globals()[paramName] = thisCongrats_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisCongrats_loop in congrats_loop:
        congrats_loop.status = STARTED
        if hasattr(thisCongrats_loop, 'status'):
            thisCongrats_loop.status = STARTED
        currentLoop = congrats_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisCongrats_loop.rgb)
        if thisCongrats_loop != None:
            for paramName in thisCongrats_loop:
                globals()[paramName] = thisCongrats_loop[paramName]
        
        # --- Prepare to start Routine "congratulations" ---
        # create an object to store info about Routine congratulations
        congratulations = data.Routine(
            name='congratulations',
            components=[circle, star, triangle, next_game],
        )
        congratulations.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_4
        # Define the opacities of the 3 shapes depending on trial num
        if congrats_loop.thisRepN % 3 == 0:
            opacities = [0.5, 0.5, 1]
        elif congrats_loop.thisRepN % 3 == 1:
            opacities = [0.5, 1, 0.5]
        elif congrats_loop.thisRepN % 3 == 2:
            opacities = [1, 0.5, 0.5]
        
        # Assign the opacity variable to its respective values
        opacity_circle = opacities[0]
        opacity_star = opacities[1]
        opacity_triangle = opacities[2]
        
        
        # Audio
        if congrats_loop.thisRepN == 0:
            casino_sound = sound.Sound('resources\casino_sound.wav')
            casino_sound.play()
        circle.setOpacity(opacity_circle)
        star.setOpacity(opacity_star)
        triangle.setOpacity(opacity_triangle)
        # store start times for congratulations
        congratulations.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        congratulations.tStart = globalClock.getTime(format='float')
        congratulations.status = STARTED
        thisExp.addData('congratulations.started', congratulations.tStart)
        congratulations.maxDuration = None
        # keep track of which components have finished
        congratulationsComponents = congratulations.components
        for thisComponent in congratulations.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "congratulations" ---
        thisExp.currentRoutine = congratulations
        congratulations.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.1:
            # if trial has changed, end Routine now
            if hasattr(thisCongrats_loop, 'status') and thisCongrats_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *circle* updates
            
            # if circle is starting this frame...
            if circle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle.frameNStart = frameN  # exact frame index
                circle.tStart = t  # local t and not account for scr refresh
                circle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'circle.started')
                # update status
                circle.status = STARTED
                circle.setAutoDraw(True)
            
            # if circle is active this frame...
            if circle.status == STARTED:
                # update params
                pass
            
            # if circle is stopping this frame...
            if circle.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > circle.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    circle.tStop = t  # not accounting for scr refresh
                    circle.tStopRefresh = tThisFlipGlobal  # on global time
                    circle.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'circle.stopped')
                    # update status
                    circle.status = FINISHED
                    circle.setAutoDraw(False)
            
            # *star* updates
            
            # if star is starting this frame...
            if star.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                star.frameNStart = frameN  # exact frame index
                star.tStart = t  # local t and not account for scr refresh
                star.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(star, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'star.started')
                # update status
                star.status = STARTED
                star.setAutoDraw(True)
            
            # if star is active this frame...
            if star.status == STARTED:
                # update params
                pass
            
            # if star is stopping this frame...
            if star.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > star.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    star.tStop = t  # not accounting for scr refresh
                    star.tStopRefresh = tThisFlipGlobal  # on global time
                    star.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'star.stopped')
                    # update status
                    star.status = FINISHED
                    star.setAutoDraw(False)
            
            # *triangle* updates
            
            # if triangle is starting this frame...
            if triangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                triangle.frameNStart = frameN  # exact frame index
                triangle.tStart = t  # local t and not account for scr refresh
                triangle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(triangle, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'triangle.started')
                # update status
                triangle.status = STARTED
                triangle.setAutoDraw(True)
            
            # if triangle is active this frame...
            if triangle.status == STARTED:
                # update params
                pass
            
            # if triangle is stopping this frame...
            if triangle.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > triangle.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    triangle.tStop = t  # not accounting for scr refresh
                    triangle.tStopRefresh = tThisFlipGlobal  # on global time
                    triangle.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'triangle.stopped')
                    # update status
                    triangle.status = FINISHED
                    triangle.setAutoDraw(False)
            
            # *next_game* updates
            
            # if next_game is starting this frame...
            if next_game.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                next_game.frameNStart = frameN  # exact frame index
                next_game.tStart = t  # local t and not account for scr refresh
                next_game.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next_game, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_game.started')
                # update status
                next_game.status = STARTED
                next_game.setAutoDraw(True)
            
            # if next_game is active this frame...
            if next_game.status == STARTED:
                # update params
                pass
            
            # if next_game is stopping this frame...
            if next_game.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > next_game.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    next_game.tStop = t  # not accounting for scr refresh
                    next_game.tStopRefresh = tThisFlipGlobal  # on global time
                    next_game.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'next_game.stopped')
                    # update status
                    next_game.status = FINISHED
                    next_game.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=congratulations,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                congratulations.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if congratulations.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in congratulations.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "congratulations" ---
        for thisComponent in congratulations.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for congratulations
        congratulations.tStop = globalClock.getTime(format='float')
        congratulations.tStopRefresh = tThisFlipGlobal
        thisExp.addData('congratulations.stopped', congratulations.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if congratulations.maxDurationReached:
            routineTimer.addTime(-congratulations.maxDuration)
        elif congratulations.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.100000)
        # mark thisCongrats_loop as finished
        if hasattr(thisCongrats_loop, 'status'):
            thisCongrats_loop.status = FINISHED
        # if awaiting a pause, pause now
        if congrats_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            congrats_loop.status = STARTED
        thisExp.nextEntry()
        
    # completed congrats_nReps repeats of 'congrats_loop'
    congrats_loop.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "congratulations_static" ---
    # create an object to store info about Routine congratulations_static
    congratulations_static = data.Routine(
        name='congratulations_static',
        components=[circle_2, star_2, triangle_2, next_game_2, key_resp],
    )
    congratulations_static.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    circle_2.setOpacity(opacity_circle)
    star_2.setOpacity(opacity_star)
    triangle_2.setOpacity(opacity_triangle)
    # create starting attributes for key_resp
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # store start times for congratulations_static
    congratulations_static.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    congratulations_static.tStart = globalClock.getTime(format='float')
    congratulations_static.status = STARTED
    thisExp.addData('congratulations_static.started', congratulations_static.tStart)
    congratulations_static.maxDuration = None
    # keep track of which components have finished
    congratulations_staticComponents = congratulations_static.components
    for thisComponent in congratulations_static.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "congratulations_static" ---
    thisExp.currentRoutine = congratulations_static
    congratulations_static.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 20.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *circle_2* updates
        
        # if circle_2 is starting this frame...
        if circle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            circle_2.frameNStart = frameN  # exact frame index
            circle_2.tStart = t  # local t and not account for scr refresh
            circle_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(circle_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'circle_2.started')
            # update status
            circle_2.status = STARTED
            circle_2.setAutoDraw(True)
        
        # if circle_2 is active this frame...
        if circle_2.status == STARTED:
            # update params
            pass
        
        # if circle_2 is stopping this frame...
        if circle_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > circle_2.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                circle_2.tStop = t  # not accounting for scr refresh
                circle_2.tStopRefresh = tThisFlipGlobal  # on global time
                circle_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'circle_2.stopped')
                # update status
                circle_2.status = FINISHED
                circle_2.setAutoDraw(False)
        
        # *star_2* updates
        
        # if star_2 is starting this frame...
        if star_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            star_2.frameNStart = frameN  # exact frame index
            star_2.tStart = t  # local t and not account for scr refresh
            star_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(star_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'star_2.started')
            # update status
            star_2.status = STARTED
            star_2.setAutoDraw(True)
        
        # if star_2 is active this frame...
        if star_2.status == STARTED:
            # update params
            pass
        
        # if star_2 is stopping this frame...
        if star_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > star_2.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                star_2.tStop = t  # not accounting for scr refresh
                star_2.tStopRefresh = tThisFlipGlobal  # on global time
                star_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'star_2.stopped')
                # update status
                star_2.status = FINISHED
                star_2.setAutoDraw(False)
        
        # *triangle_2* updates
        
        # if triangle_2 is starting this frame...
        if triangle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            triangle_2.frameNStart = frameN  # exact frame index
            triangle_2.tStart = t  # local t and not account for scr refresh
            triangle_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(triangle_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'triangle_2.started')
            # update status
            triangle_2.status = STARTED
            triangle_2.setAutoDraw(True)
        
        # if triangle_2 is active this frame...
        if triangle_2.status == STARTED:
            # update params
            pass
        
        # if triangle_2 is stopping this frame...
        if triangle_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > triangle_2.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                triangle_2.tStop = t  # not accounting for scr refresh
                triangle_2.tStopRefresh = tThisFlipGlobal  # on global time
                triangle_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'triangle_2.stopped')
                # update status
                triangle_2.status = FINISHED
                triangle_2.setAutoDraw(False)
        
        # *next_game_2* updates
        
        # if next_game_2 is starting this frame...
        if next_game_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            next_game_2.frameNStart = frameN  # exact frame index
            next_game_2.tStart = t  # local t and not account for scr refresh
            next_game_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_game_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next_game_2.started')
            # update status
            next_game_2.status = STARTED
            next_game_2.setAutoDraw(True)
        
        # if next_game_2 is active this frame...
        if next_game_2.status == STARTED:
            # update params
            pass
        
        # if next_game_2 is stopping this frame...
        if next_game_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > next_game_2.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                next_game_2.tStop = t  # not accounting for scr refresh
                next_game_2.tStopRefresh = tThisFlipGlobal  # on global time
                next_game_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_game_2.stopped')
                # update status
                next_game_2.status = FINISHED
                next_game_2.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp is stopping this frame...
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 20.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.stopped')
                # update status
                key_resp.status = FINISHED
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=congratulations_static,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            congratulations_static.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if congratulations_static.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in congratulations_static.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "congratulations_static" ---
    for thisComponent in congratulations_static.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for congratulations_static
    congratulations_static.tStop = globalClock.getTime(format='float')
    congratulations_static.tStopRefresh = tThisFlipGlobal
    thisExp.addData('congratulations_static.stopped', congratulations_static.tStop)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if congratulations_static.maxDurationReached:
        routineTimer.addTime(-congratulations_static.maxDuration)
    elif congratulations_static.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-20.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    # stop any playback components
    if thisExp.currentRoutine is not None:
        for comp in thisExp.currentRoutine.getPlaybackComponents():
            comp.stop()
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
