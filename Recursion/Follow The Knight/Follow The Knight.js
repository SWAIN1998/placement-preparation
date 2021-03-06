function array(){
    let arr=[];
    for(let i=0;i<10;i++){
     let arr2 = [];
    for(let j=0;j<10;j++){
      arr2.push(0);
  }
   arr.push(arr2);
}
   return arr;
}

function runProgram(input){
 
 var input = input.trim().split(" ").map(Number)
 var row = input[0] - 1;
 var col = input[1] - 1;
 var N = input[2];
 var mat = array();
 FollowTheKnight(mat,row,col,N);
 
// console.log(mat)
  var count = 0;
  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(mat[i][j] == 1) count++;
    }
}
    console.log(count);
}

function FollowTheKnight(mat,row,col,N){
  if(row > 9 || row < 0 || col < 0 || col > 9) return;
  if(N == 0) {
      mat[row][col]= 1;
      return ;
  }
 
  FollowTheKnight(mat,row-2,col+1,N-1);
  FollowTheKnight(mat,row-2,col-1,N-1);
   
  FollowTheKnight(mat,row+2,col+1,N-1);
  FollowTheKnight(mat,row+2,col-1,N-1);
   
  FollowTheKnight(mat,row-1,col+2,N-1);
  FollowTheKnight(mat,row-1,col-2,N-1);
   
  FollowTheKnight(mat,row+1,col+2,N-1);
  FollowTheKnight(mat,row+1,col-2,N-1);
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}