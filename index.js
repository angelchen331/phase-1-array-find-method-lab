// code your solution here
// function superbowlWin(record){
//     const win = record.find(record => record.result === 'W')
//     if (win.result === 'W'){
//         return win.year;
//     } else if {
//         return (undefined)
//     }
// }


function superbowlWin(record) {
    const result = record.find(obj => obj.result === 'W')
        return (result ? result.year : undefined);
}

// function superbowlWin(record){
//     const sadReality = (record => record.result === "N/A" )
//     if (sadReality.result === 'N/A'){
//         return undefined;
//     }
// }