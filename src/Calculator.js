


export function Add({a,b}){
   let sum = parseInt(a)+parseInt(b);
      return( 
    <>
    <h1> : Calculator :</h1>
    <h3>Sum is :{sum}</h3>
    </>
   );
}

export function Sub({a , b} ){
 let sub = a-b ;
 return ( 
     <>
    <h3>Sub is :{sub}</h3>
     </>
       );    

}

export function Mul( {a , b}){
let mul = parseFloat(a*b).toFixed(2) ;
return ( 
     <>
    <h3>Mul is :{mul}</h3>
    </>
          );   

}

export function Div( {a , b} ){
let div = parseFloat(a/b).toFixed(2) ;
return ( 
    <>
    <h3>Div is :{div}</h3>
    </>
          );     
}