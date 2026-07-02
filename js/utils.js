'use strict'

/**
 * Gets a random integer between two values (min inclusive, max exclusive).
 * @param {number} min - The minimum value (inclusive)
 * @param {number} max - The maximum value (exclusive)
 * @returns {number} A random integer
 */
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

/**
 * Creates a 2D array (matrix) of specified dimensions,
 * initialized with empty strings.
 * @param {number} rows - The number of rows
 * @param {number} cols - The number of columns
 * @returns {Array<Array<string>>} The new matrix
 */
function createMat(rows, cols) {
    const mat = []

    for (var i = 0; i < rows; i++) {
        const row = []

        for (var j = 0; j < cols; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

/**
 * Starts a timer and updates a DOM element with the elapsed time.
 * @param {string} selector - CSS selector for the element to display the time
 * @returns {number} - The interval ID (to be used with stopTimer)
 * CSS EXAMPLE:  .timer {
    /* This font (monospace) makes numbers align nicely */
//     font-family: 'Courier New', Courier, monospace; 

//     font-weight: bold;
//     font-size: 1.2rem;

//     background-color: #f0f0f0;
//     padding: 5px 10px;
//     border-radius: 5px;

//     /* Ensures numbers don't jump around */
// display: inline-block;
// min-width: 60px; 
// text-align: right;
// } */
function startTimer(selector) {
    const elTimer = document.querySelector(selector)
    const startTime = Date.now()

    const intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        // Format to seconds.milliseconds (e.g., 5.037)
        elTimer.innerText = (elapsedTime / 1000).toFixed(2)
    }, 37) // Update frequently (e.g., ~30fps) for smooth milliseconds

    return intervalId
}

/**
 * Stops a timer created by setInterval.
 * @param {number} intervalId - The ID returned from startTimer
 */
function stopTimer(intervalId) {
    clearInterval(intervalId)
}

/**
 * Plays an audio file by its name.
 * Assumes audio files are in the assets/sounds folder and have an .mp3 extension.
 * @param {string} soundName - The name of the sound (e.g., 'pop', 'win')
 */
function playSound(soundName) {
    const audio = new Audio(`assets/sounds/${soundName}.mp3`)
    audio.play()
}
