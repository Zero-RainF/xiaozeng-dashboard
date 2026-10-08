// 小曾看板数据源
// 每次我（Rian）拿到新数据，就更新这个文件
// 刷新看板页面即可看到最新数据

window.DASH = {
  updatedAt: "2026-10-08 12:45",

  // ============ 身体 ============
  body: {
    startWeight: 85,        // 起点 kg (2026-09-30)
    goalWeight: 75,         // 目标 kg
    currentWeight: null,    // 最新体重，周日填入
    lastWaist: null,        // 最新腰围 cm
    weightLog: [],
    weeklyTarget: 4,        // 每周训练次数
    thisWeekDone: 0,        // 本周已完成
  },

  // ============ 钱 ============
  money: {
    cashOnHand: 2000,       // 手上现金（冻结不动）
    currentMonth: "2026-10月",
    monthIncome: 17320,     // 10月到手
    monthRepay: 16371,      // 10月还款（含房租）
    monthBudget: 2400,      // 本月可支配额度
    monthSpent: 1620,       // 本月已花
    debtTotal: 84378,
    rent: 1800,
    daysLeft: 23,           // 距10月底

    // -------- 逐笔消费明细 --------
    // 金额：正数 = 支出
    expenses: [
      { date: "10-01", item: "（1-6日累计，未细分）", amt: 1500, cat: "其他" },
      { date: "10-07", item: "打车",       amt:   60, cat: "交通" },
      { date: "10-07", item: "宵夜",       amt:   50, cat: "吃" },
      { date: "10-07", item: "买水",       amt:    5, cat: "其他" },
      { date: "10-08", item: "买水",       amt:    5, cat: "其他" },
    ],

    // 月度还款 + 收入（2026-10 → 2027-09）
    months: [
      { ym: "2026-10", pay: 16371, income: 17320 },
      { ym: "2026-11", pay:  8406, income: 11120 },
      { ym: "2026-12", pay:  8318, income: 11120 },
      { ym: "2027-01", pay:  7910, income: 13920 },
      { ym: "2027-02", pay: 17676, income: 22620 },
      { ym: "2027-03", pay:  7429, income: 11120 },
      { ym: "2027-04", pay: 12426, income: 13920 },
      { ym: "2027-05", pay:  7225, income: 11120 },
      { ym: "2027-06", pay:  7143, income: 11120 },
      { ym: "2027-07", pay:  5875, income: 13920 },
      { ym: "2027-08", pay:  5230, income: 11120 },
      { ym: "2027-09", pay:  1969, income: 11120 },
    ],

    // 各平台剩余
    platforms: [
      { name: "抖音放心借", amt: 40207 },
      { name: "抖音月付",   amt: 10664 },
      { name: "网商贷",     amt:  8208 },
      { name: "花呗",       amt:  5394 },
      { name: "京东白条",   amt:  4904 },
      { name: "个人欠款",   amt: 15000 },
    ],
  },

  // ============ 情绪 / 感情 ============
  mood: {
    log: [],
    lastNote: "10月上旬断联8天；删了半个朋友；花钱又超"
  }
};
