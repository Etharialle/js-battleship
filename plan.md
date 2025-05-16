# Plan File

## Node Setup
`npm init`
`npm install --save-dev jest jest-cli`

## Classes

- Ship Class
  - attributes:
    - length
    - number of times hit
    - sunk status
  - methods:
    - hit() increments the number of times hit
    - isSunk() determines the sunk status based on lenght and number of hits
- Gameboard Class
  - attributes:
    - 2D array 10x10
  - methods:
    - receiveAttack(coordinates) send hit() if there is a ship at the location or record miss
    - 
- Player Class