import Team from './team'; 

export default new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            new Team('América MG', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/america_mg_60x60.png?raw=true'),
            new Team('Atlético PR', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/atletico-pr_60x60.png?raw=true'),
            new Team('Atlético MG', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/atletico_mg_60x60.png?raw=true'),
            new Team('Bahia', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/bahia_60x60.png?raw=true'),
            new Team('Botafogo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/botafogo_60x60.png?raw=true'),
            new Team('Ceará', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/ceara_60x60.png?raw=true'),
            new Team('Chapecoense', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/chapecoense_60x60.png?raw=true'),
            new Team('Corinthians', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/corinthians_60x60.png?raw=true'),
            new Team('Cruzeiro', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/cruzeiro_60x60.png?raw=true'),
            new Team('Flamengo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/flamengo_60x60.png?raw=true'),
            new Team('Fluminense', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/fluminense_60x60.png?raw=true'),
            new Team('Gremio', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/gremio_60x60.png?raw=true'),
            new Team('Internacional', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/internacional_60x60.png?raw=true'),
            new Team('Palmeiras', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/palmeiras_60x60.png?raw=true'),
            new Team('Paraná', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/parana_60x60.png?raw=true'),
            new Team('Santos', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/santos_60x60.png?raw=true'),
            new Team('São Paulo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/sao_paulo_60x60.png?raw=true'),
            new Team('Sport', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/sport_60x60.png?raw=true'),
            new Team('Vasco', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/vasco_60x60.png?raw=true'),
            new Team('Vitória', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/vitoria_60x60.png?raw=true')        
        ])
    }, 1000); 
});