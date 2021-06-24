import React,{Component} from 'react'
import Validation from './Validation'
import classes from './App.module.css'
import Char from './Char'
class App extends Component{
  constructor(){
  super()
  this.state={
    input:"" ,
    show:false
  }
}
  deleteText=(index)=>{
    const s=this.state.input.slice();
    console.log(s);
    console.log(index);
    let list=s.split("");
    list.splice(index,1);
    console.log(list);
    let newString=list.join("");
    newString=newString+"";
    console.log("Newstring:",newString);

    this.setState({input:newString});
    
  }
  handleTextChange=(event)=>{
    console.log(1);
    this.setState({input:event.target.value});
  }
  getLength=()=>{
    console.log(2);
    this.setState({show:true});
  }
  render(){
  let inputLength=null;
  if(this.state.input.length&&this.state.show){
    inputLength=(
      <div>
        <h3>The length of the text is :{this.state.input.length}</h3>
      </div>
    )
  }
  
  let charList=this.state.input.split("");
  //console.log(charList[0]);
   return(
    <div className={classes.maindiv}>
       <h3 style={{margin:'10px',textDecoration:'underline'}}>INPUT FIELD</h3>
       <div className={classes.inputdata}>
       <textarea className={classes.textarea} type="text" style={{height:50,width:250}} value={this.state.input} onChange={(event)=>this.handleTextChange(event)}></textarea>
       <button className={classes.textbtn} onClick={this.getLength}>Press</button>
       </div>
        {inputLength}
        {
        this.state.show?
        <Validation length={this.state.input.length}/>
        :null
        }
        <div>
          {
            this.state.show?
            charList.map((ch,index)=>{
              // console.log(charList[i]);
             
              return(
              (ch!==" ")?
               <Char clicked={()=>this.deleteText(index)} key={index} char={ch}/>
               :
               <Char clicked={()=>this.deleteText(index)} key={index} char={" "}
              />
              )
          }):
            null
          }
        
        </div>
        
        
    </div>
  )
  }
};


export default App;
