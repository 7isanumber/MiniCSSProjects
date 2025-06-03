const progressBar = document.getElementsByClassName('progress-bar')[0]

const interval = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
     if (width >= 100) {
        clearInterval(interval)
        return
    }
    progressBar.style.setProperty('--width', width + .1)
}, 5)