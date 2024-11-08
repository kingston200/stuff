// Sample data for Detroit Lions' 2024-25 season
const gameStats = [
    { week: 1, date: 'September 8, 2024', opponent: 'L.A Rams', score: '26-20', result: 'Win' },
    { week: 2, date: 'September 15, 2024', opponent: 'T.B Buccaneers', score: '16-20', result: 'Loss' },
    { week: 3, date: 'September 22, 2024', opponent: 'Arizona Cardinals', score: '20-13', result: 'Win' },
    { week: 4, date: 'September 30, 2024', opponent: 'Seattle Seahawks', score: '42-29', result: 'Win' },
    { week: 5, date: 'October 13, 2024', opponent: 'Dallas Cowboys', score: '47-9', result: 'Win' },
    { week: 6, date: 'October 20, 2024', opponent: 'Minnesota Vikings', score: '31-29', result: 'Win' },
    { week: 7, date: 'October 27, 2024', opponent: 'Tennessee Titans', score: '52-14', result: 'Win' },
    { week: 8, date: 'November 3, 2024', opponent: 'Green Bay Packers', score: '24-14', result: 'Win' }
  ];
  
  // Function to update game stats table
  function updateGameStats() {
    const gameStatsTable = document.querySelector("#game-stats tbody");
    gameStats.forEach(game => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>Week ${game.week}</td>
        <td>${game.date}</td>
        <td>${game.opponent}</td>
        <td>${game.score}</td>
        <td class="${game.result.toLowerCase()}">${game.result}</td>
      `;
      gameStatsTable.appendChild(row);
    });
  }
  
  // Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;  // Get the body element
    const darkModeButton = document.getElementById('toggle-dark-mode');  // Get the dark mode button
    
    body.classList.toggle('dark-mode');  // Toggle dark mode on the body
    darkModeButton.classList.toggle('dark-mode');  // Toggle dark mode on the button
  }
  
  // Event listener for dark mode button
  document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);
  
  // Optionally, you can set the initial theme preference based on localStorage or default to light mode
  document.addEventListener("DOMContentLoaded", () => {
    // Uncomment to use localStorage preference for dark mode:
    // if (localStorage.getItem('dark-mode') === 'enabled') {
    //   document.body.classList.add('dark-mode');
    //   document.getElementById('toggle-dark-mode').classList.add('dark-mode');
    // }
  });
  
  
  // Event listener for dark mode button
  document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);
  
  // Initial update
  document.addEventListener("DOMContentLoaded", () => {
    updateGameStats();
  });
  