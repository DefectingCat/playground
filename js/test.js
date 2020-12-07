let res = '';
// i随着行变化（被乘数）
for (let i = 1; i <= 9; i++) {
    // o始终从1开始，小于行数（乘数）
    for (let o = 1; o <= i; o++) {
        res += `${o}*${i}=${o * i} `;
    }
    res += '\n'
}