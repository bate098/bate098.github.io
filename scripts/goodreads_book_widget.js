const booksRead = 37; // ← only change this number
const goal = 75;
const percent = Math.round((booksRead / goal) * 100);

document.getElementById('gr_challenge_progress_body').innerHTML = `
  <h3 style="margin: 4px 0 10px; font-weight: normal; text-align: center">
    <a id="reading_challenge_header" rel="nofollow" href="https://www.goodreads.com/user_challenges/66067984">2026 Reading Challenge</a>
  </h3>
  <div class="challengePic">
    <img alt="2026 Reading Challenge" style="float:left; margin-right: 10px; border: 0 none" src="https://images.gr-assets.com/challenges/1764710439p2/11680.jpg" />
  </div>
  <div class="reading_challenge_text">
    Michael has read ${booksRead} books toward his goal of ${goal} books.
  </div>
  <div style="width: 95px; margin: 10px 5px 5px 0; float: left; border: 1px solid #382110; height: 8px; overflow: hidden; background-color: #FFF">
    <div style="width: ${percent}%; background-color: #5f55a0; float: left"><span style="visibility:hidden">hide</span></div>
  </div>
  <div class="reading_challenge_text" id="progress_bar_text">
    ${booksRead} of ${goal} (${percent}%)
  </div>
`;