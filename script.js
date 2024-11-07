// Sample Game Data (Replace with real-time data from an API if available)
const games = [
    { date: "09/08/2024", opponent: "Kansas City Chiefs", score: "27-24", result: "Win" },
    { date: "09/15/2024", opponent: "Seattle Seahawks", score: "31-34", result: "Loss" },
    // Add more games as season progresses
  ];
  
  // Update Win-Loss Record
  const updateWinLossRecord = () => {
    const wins = games.filter(game => game.result === "Win").length;
    const losses = games.filter(game => game.result === "Loss").length;
    document.getElementById('win-loss-record').textContent = `${wins}-${losses}`;
  };
  
  // Load Game Stats
  const loadGameStats = () => {
    const tableBody = document.getElementById('game-stats-table');
    games.forEach(game => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${game.date}</td><td>${game.opponent}</td><td>${game.score}</td><td>${game.result}</td>`;
      tableBody.appendChild(row);
    });
  };
  
  // Load Player Stats (Sample Data)
  const players = [
    { name: "Jared Goff", position: "QB", touchdowns: 30, yards: 4500 },
    { name: "Amon-Ra St. Brown", position: "WR", touchdowns: 10, yards: 1300 },
    // Add more players as needed
  ];
  
  const loadPlayerStats = () => {
    const playerList = document.getElementById('player-list');
    players.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = `${player.name} (${player.position}) - Touchdowns: ${player.touchdowns}, Yards: ${player.yards}`;
      playerList.appendChild(listItem);
    });
  };
  
  // Load All Data on Page Load
  window.onload = () => {
    updateWinLossRecord();
    loadGameStats();
    loadPlayerStats();
  };
  