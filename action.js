const Action = {
    harvestSoul: function() { player.resources.soul += 1; UI.updateAll(); },
    levelUp: function() {
        const cost = StatCalc.getLevelUpCost();
        if (player.resources.soul >= cost) {
            player.resources.soul -= cost;
            player.hero.level++; player.hero.baseHp += 15; player.hero.baseAtk += 3; player.hero.baseDef += 1;
            UI.updateAll();
        } else alert("영혼이 부족합니다.");
    },
    hireWorker: function(type) {
        let cost = (type === 'lumber') ? StatCalc.getWorkerCost(player.facilities.lumberjacks) : StatCalc.getWorkerCost(player.facilities.miners);
        if (player.resources.soul >= cost) {
            player.resources.soul -= cost;
            if(type === 'lumber') player.facilities.lumberjacks++;
            if(type === 'mining') player.facilities.miners++;
            UI.updateAll();
        } else alert("영혼이 부족합니다.");
    },
    changeTarget: function(type, targetId) {
        if(type === 'lumber') player.facilities.lumberTarget = targetId;
        if(type === 'mining') player.facilities.miningTarget = targetId;
        Engine.save();
    }
};

window.onload = function() {
    Engine.load(); 
    UI.updateAll(); 
    setInterval(function() { Engine.tick(); }, 1000);
};