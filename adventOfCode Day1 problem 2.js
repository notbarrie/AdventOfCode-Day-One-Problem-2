let arr = [121656,
110933,
80850,
137398,
76307,
50450,
124691,
86449,
145386,
148648,
68909,
134697,
109636,
115718,
134485,
89267,
64829,
109070,
84257,
109010,
97574,
98363,
123029,
105568,
114500,
92041,
128869,
148350,
144605,
91862,
134417,
54710,
147843,
121914,
127855,
74545,
89596,
106562,
69863,
147082,
135724,
111637,
68869,
103685,
99453,
80908,
136020,
64974,
125159,
87504,
62499,
73294,
128811,
121567,
54673,
66647,
66871,
71228,
101622,
130675,
69025,
146118,
79970,
118267,
122279,
89523,
62965,
148036,
119625,
127056,
54980,
143581,
103274,
83064,
125131,
54362,
115851,
139103,
140674,
69616,
81353,
116441,
73898,
51403,
137019,
93146,
67273,
138182,
126680,
148683,
127805,
111741,
102219,
99603,
90453,
147581,
102136,
109913,
144899,
140572];

//So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

let sum = 0;

for(i = 0; i < arr.length; i++){
	let currMod = arr[i];
  let currFuel =calcTotalFuel(currMod);
  
  sum += currFuel;
}

console.log(sum);
debugger;
console.log(calcTotalFuel(1969))



function calcTotalFuel(mass){
	//first check if the fuel is negative
  if(mass > 2){
  
  	//fuel is not negative, calculate the amount of fuel required for given mass
    const fuel = calcFuel(mass);
    console.log("fuel: " + fuel);
    //call calcTotalFuel for fuel - 2
    const fuelForFuel = calcTotalFuel(fuel);
    console.log("fuelForFuel: " + fuelForFuel);
    return fuel + fuelForFuel;
  } else{
  	return 0;
  }
  	
    
}


function calcFuel(mass){
let res = Math.floor(mass/3) - 2;
if (res < 0){
	res = 0;
}
	return res;
}
