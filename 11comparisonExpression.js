//  - 4 > 3        =>    true
//  - 4 >= 3       =>    true
//  - 4 < 3        =>    false
//  - 4 <= 3       =>    false
//  - 4 == 4       =>    true
//  - 4 === 4      =>    true
//  - 4 != 4       =>    false
//  - 4 !== 4      =>    false
//  - 4 != '4'     =>    false
//  - 4 == '4'     =>    true
//  - 4 === '4'    =>    false

console.log(`
4 > 3     =>   ${4 > 3}
4 >= 3    =>   ${4 >= 3}
4 < 3     =>   ${4 < 3}
4 <= 3    =>   ${4 <= 3}
4 == 4    =>   ${4 == 4}
4 === 4   =>   ${4 === 4}
4 != 4    =>   ${4 != 4}
4 !== 4   =>   ${4 !== 4}
4 != '4'  =>   ${4 != "4"}
4 == '4'  =>   ${4 == "4"}
4 === '4' =>   ${4 === "4"}
`);

console.log("python".length != "jargon".length);