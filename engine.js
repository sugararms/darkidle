const StatCalc = {
    getHP: function() { return Math.floor(player.hero.baseHp * (1 - (player.resources.madness * 0.005))); },
    getATK: function() { return Math.floor(player.hero.baseAtk * (1 + (player.resources.madness * 0.01)) * (1 + (player.resources.ash * 0.05))); },
    getDEF: function() { return Math.floor(player.hero.baseDef); },
    getSPD: function() { return player.hero.baseSpeed; }, 
    getLevelUpCost: function() { return Math.floor(10 * Math.pow(1.15, player.hero.level - 1)); },
    getWorkerCost: function(count) { return Math.floor(10 * Math.pow(1.5, count)); }
};

const Engine = {
    save: function() { player.lastSaveTime = Date.now(); localStorage.setItem("blacksoulsIdleSave", JSON.stringify(player)); },
    load: function() {
        const saved = localStorage.getItem("blacksoulsIdleSave");
        if (saved) {
            const p = JSON.parse(saved);
            player = { ...DEFAULT_DATA, ...p, resources: { ...DEFAULT_DATA.resources, ...(p.resources||{}) }, hero: { ...DEFAULT_DATA.hero, ...(p.hero||{}) }, materials: { ...DEFAULT_DATA.materials, ...(p.materials||{}) }, facilities: { ...DEFAULT_DATA.facilities, ...(p.facilities||{}) } };
        }
    },
    wipeData: function() { if(confirm("완전 삭제하시겠습니까?")) { localStorage.removeItem("blacksoulsIdleSave"); location.reload(); } },
    tick: function() {
        let updated = false;
        if(player.facilities.lumberjacks > 0) {
            player.materials[player.facilities.lumberTarget] += player.facilities.lumberjacks;
            updated = true;
        }
        if(player.facilities.miners > 0) {
            player.materials[player.facilities.miningTarget] += player.facilities.miners;
            updated = true;
        }
        if(updated) {
            UI.updateTabLumber();
            UI.updateTabMining();
        }
        Engine.save();
    }
};