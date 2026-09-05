const UI = {
    initSelectMenus: function() {
        const lumSel = document.getElementById('lumber-target');
        const minSel = document.getElementById('mining-target');
        
        if(lumSel && lumSel.options.length === 0) {
            MaterialDB.lumber.forEach(m => lumSel.innerHTML += `<option value="${m.id}">${m.name} (용도: ${m.use})</option>`);
            lumSel.value = player.facilities.lumberTarget;
        }
        if(minSel && minSel.options.length === 0) {
            MaterialDB.mining.forEach(m => minSel.innerHTML += `<option value="${m.id}">${m.name} (용도: ${m.use})</option>`);
            minSel.value = player.facilities.miningTarget;
        }
    },
    updateHUD: function() {
        document.getElementById('res-soul').innerText = Math.floor(player.resources.soul);
    },
    updateTabCitadel: function() {
        if(!document.getElementById('hero-level')) return;
        document.getElementById('hero-level').innerText = player.hero.level;
        document.getElementById('levelup-cost').innerText = StatCalc.getLevelUpCost();
        document.getElementById('stat-hp').innerText = StatCalc.getHP();
        document.getElementById('stat-atk').innerText = StatCalc.getATK();
    },
    renderInventory: function(type) {
        let html = "";
        MaterialDB[type].forEach(m => {
            let count = player.materials[m.id] || 0;
            let color = count > 0 ? '#eee' : '#555';
            html += `<div class="mat-item"><div class="mat-info"><span class="mat-name" style="color:${color}">${m.name}</span><span class="mat-use">${m.use}</span></div><div class="mat-count">${count > 0 ? count : '-'}</div></div>`;
        });
        return html;
    },
    updateTabLumber: function() {
        if(!document.getElementById('lumber-count')) return;
        document.getElementById('lumber-count').innerText = player.facilities.lumberjacks;
        document.getElementById('lumber-cost').innerText = StatCalc.getWorkerCost(player.facilities.lumberjacks);
        document.getElementById('lumber-inventory').innerHTML = this.renderInventory('lumber');
    },
    updateTabMining: function() {
        if(!document.getElementById('miner-count')) return;
        document.getElementById('miner-count').innerText = player.facilities.miners;
        document.getElementById('miner-cost').innerText = StatCalc.getWorkerCost(player.facilities.miners);
        document.getElementById('mining-inventory').innerHTML = this.renderInventory('mining');
    },
    updateAll: function() {
        this.initSelectMenus();
        this.updateHUD(); this.updateTabCitadel(); this.updateTabLumber(); this.updateTabMining();
    },
    switchTab: function(tabId) {
        document.querySelectorAll('.tab-page').forEach(page => page.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if(btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
                btn.classList.add('active');
            }
        });
        this.updateAll();
    }
};

function switchTab(tabId) { UI.switchTab(tabId); }