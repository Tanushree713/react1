function DynamicGreets(){
    let timer = new Date(2023,7,19,3) ;
    timer = timer.getHours() ;
    let greet =" ";
    const cssStyle = {} ;
    const headStyle = {
        color:"#1289A7" ,
        backgroundColor:"#FDA7DF",
        padding:"12px" ,
        borderRadius:"20px",
        width: "30vw",
        textAlign:"center" ,
    }

    if(timer >=1 && timer < 12){
      greet = "Good Morning !" ;
      cssStyle.color = "green" ;
   }
   else if(timer >= 12 && timer < 17){
       greet = "Good Afternoon !" ;
       cssStyle.color = "yellow" ;
   }
   else if(timer >= 17 && timer <= 21){
       greet = "Good Evening !" ;
       cssStyle.color = "orange" ;
   }
   else{
    greet = "Good Night !"
    cssStyle.color = "blue" ;
   }
   
 
   return(
      <>
      <h1 style={headStyle}>Hi , <span style={cssStyle}>{greet}</span></h1>
    
      </>
    ) 
}
export default DynamicGreets ;