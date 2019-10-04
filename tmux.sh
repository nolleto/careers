#!/usr/bin/env bash

SESSION=careers

tmux new-session -d -s $SESSION

tmux select-window -t $SESSION:0

tmux split-window -h
tmux select-layout tiled

tmux attach -t $SESSION
