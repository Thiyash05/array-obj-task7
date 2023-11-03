//Using Filter Method: 
//Output:[ { name: 'Quincy', grade: 96 },
//		 { name: 'Alexis', grade: 100 }, 
//		 { name: 'Katie', grade: 90 } 
//		] 
  

const students = [ 

  { name: 'Quincy', grade: 96 }, 

  { name: 'Jason', grade: 84 }, 

  { name: 'Alexis', grade: 100 }, 

  { name: 'Sam', grade: 65 }, 

  { name: 'Katie', grade: 90 } 

]; 

    let ans=students.filter((e)=>{
		return e.grade>=90
	})
	console.log(ans)

  
