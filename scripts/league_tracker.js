const startDate = '2025-12-23';

function getDaysSinceLeague(dateString) {
    const start = new Date(dateString + 'T00:00:00');
    const now = new Date();
    now.setHours(0, 0, 0, 0); // strip time so it's date-only
  
    const diffMs = now - start;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function updateDisplay() {
    const days = getDaysSinceLeague(startDate);
    const start = new Date(startDate + 'T00:00:00');
    const formatted = start.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
    document.getElementById('league_tracker_title').textContent = 'Since I last played League on ' + formatted;
    document.getElementById('days-display').textContent = days + ' days';
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
  });