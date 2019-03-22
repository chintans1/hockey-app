
const scores = [
  {
    key: '0',
    homeTeam: {
      name: 'Oilers',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/22.svg'
    },
    roadTeam: {
      name: 'Flames',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/20.svg'
    },
    gameScore: {
      started: true, // ENUM eventually
      startTime: "3:00PM",
      homeTeamScore: 3,
      roadTeamScore: 0
    }
  },
  {
    key: '1',
    homeTeam: {
      name: 'Leafs',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/10.svg'
    },
    roadTeam: {
      name: 'Senators',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/9.svg'
    },
    gameScore: {
      started: true,
      startTime: "5:00PM",
      homeTeamScore: 3,
      roadTeamScore: 6
    }
  },
  {
    key: '2',
    homeTeam: {
      name: 'Canadiens',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/8.svg'
    },
    roadTeam: {
      name: 'Bruins',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/6.svg'
    },
    gameScore: {
      started: true,
      startTime: "7:00PM",
      homeTeamScore: 2,
      roadTeamScore: 4
    }
  },
  {
    key: '3',
    homeTeam: {
      name: 'Islanders',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/17.svg'
    },
    roadTeam: {
      name: 'Rangers',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/6.svg'
    },
    gameScore: {
      started: false,
      startTime: "8:30PM",
      homeTeamScore: 0,
      roadTeamScore: 0
    }
  },
  {
    key: '4',
    homeTeam: {
      name: 'Canucks',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/23.svg'
    },
    roadTeam: {
      name: 'Jets',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/52.svg'
    },
    gameScore: {
      started: false,
      startTime: "10:00PM",
      homeTeamScore: 0,
      roadTeamScore: 0
    }
  },
  {
    key: '5',
    homeTeam: {
      name: 'Sharks',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/28.svg'
    },
    roadTeam: {
      name: 'Ducks',
      logo: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/24.svg'
    },
    gameScore: {
      started: false,
      startTime: "10:30PM",
      homeTeamScore: 0,
      roadTeamScore: 0
    }
  }
]

export {
  scores
};