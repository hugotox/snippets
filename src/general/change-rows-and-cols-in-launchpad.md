# Change number of columns and rows in launchpad

```
defaults write com.apple.dock springboard-columns -int number_of_columns
defaults write com.apple.dock springboard-rows -int number_of_rows
killall Dock
```
