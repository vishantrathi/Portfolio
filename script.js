//block inspect
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12 key
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
};