const MaterialDB = {
    lumber: [
        { id: "wood_1", name: "썩은 목재", use: "기본 시설 건축 재료" },
        { id: "wood_2", name: "검은 수액", use: "접착제 및 하급 물약 재료" },
        { id: "wood_3", name: "저주받은 나뭇가지", use: "무기 자루 및 화살촉 제작" },
        { id: "wood_4", name: "비명지르는 껍질", use: "경갑 방어구 및 방패 제작" },
        { id: "wood_5", name: "핏빛 잎사귀", use: "체력 회복(흡혈) 포션 주재료" },
        { id: "wood_6", name: "뼛가루 섞인 흙", use: "온실 재배 및 흑마법 비료" },
        { id: "wood_7", name: "독을 머금은 가시", use: "함정 제작 및 무기 독 부여" },
        { id: "wood_8", name: "칠흑의 숯", use: "대장간 용광로 연료" },
        { id: "wood_9", name: "고목의 심장", use: "마법 지팡이 및 고급 장비" },
        { id: "wood_10", name: "영혼이 깃든 옹이", use: "유물(성유물) 제작 재료" },
        { id: "wood_11", name: "말라비틀어진 세계수 뿌리", use: "신화급 장비 한계 돌파" }
    ],
    mining: [
        { id: "ore_1", name: "녹슨 쇳조각", use: "하급 무기 및 함정 부품" },
        { id: "ore_2", name: "철광석", use: "일반 무기 및 방어구 제련" },
        { id: "ore_3", name: "흑철", use: "중갑 방어구 및 성채 강화" },
        { id: "ore_4", name: "심연석", use: "마법 저항 방어구 제련" },
        { id: "ore_5", name: "핏빛 광맥석", use: "흡혈 무기(관통) 제련" },
        { id: "ore_6", name: "유황", use: "폭발물 및 화염 마법 재료" },
        { id: "ore_7", name: "얼어붙은 눈물", use: "빙결 속성 부여 및 장비 쿨다운" },
        { id: "ore_8", name: "광인의 수정", use: "광기 관련 장비 및 장신구" },
        { id: "ore_9", name: "별빛의 파편", use: "신성 장비 및 정화 의식" },
        { id: "ore_10", name: "심장박동을 하는 암석", use: "에고 웨폰 제작" },
        { id: "ore_11", name: "지옥불 응어리", use: "신화급 파괴 무기 제련" }
    ]
};

const DEFAULT_DATA = {
    version: "1.4",
    resources: { soul: 0, blood: 0, madness: 0, ash: 0, memory: 0, abyssEye: 0 },
    hero: { level: 1, baseHp: 100, baseAtk: 10, baseDef: 5, baseSpeed: 100 },
    materials: {}, 
    facilities: {
        lumberjacks: 0, lumberTarget: "wood_1",
        miners: 0, miningTarget: "ore_1"
    }, 
    equipment: {}, companions: {}, relics: {},
    lastSaveTime: Date.now()
};

MaterialDB.lumber.forEach(m => DEFAULT_DATA.materials[m.id] = 0);
MaterialDB.mining.forEach(m => DEFAULT_DATA.materials[m.id] = 0);

let player = JSON.parse(JSON.stringify(DEFAULT_DATA));