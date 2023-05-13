//fetching html elements
const result=document.querySelector("#result");
const inputs=document.getElementsByClassName("btn");
const prev=document.getElementsByClassName("container")[0];
//loop for every input button
for(const input of inputs){
    input.addEventListener('click', perform);
};
function perform(){
    if(this.value=='AC'){
        if (prev !== undefined) {
            prev.innerHTML = "Recently cleared: " + result.value;
          }
        //clearing the result screen
        result.value="";
    }
    else if(this.value=='Back'){
        //deleting the last character
        result.value=result.value.substring(0,result.value.length-1);
    }
    else if(this.value=='^2')
    {
        //squaring the value
        result.value=result.value*result.value;
    }
    else if(this.value=='.')
    {
        if(result.value=="")
        {
            //if screen is empty, then add 0 before decimal
            result.value+='0.';
        }
        if(!result.value.includes('.')){
            //only add decimal if result has no decimal before
            result.value+='.';
        }
    }
    else if(this.value=='=')
    {
        //evaluating result
        if(result.value !== "")
        result.value=eval(result.value);
    }
    else
    {
        //checking if last character in result is number then add input value to result
        if((result.value.slice(-1)>=0 && result.value.slice(-1)<=9) || result.value=="")
        {
            result.value+=this.value;
        }
        //if last character in result is an operator
        else{
            //if input value is number then add to result
            if(this.value>=0 && this.value<=9)
            {
                result.value+=this.value;
            }
            else{
                //if input value is operator, change it to current input value
                result.value=result.value.substring(0,result.value.length-1);
                result.value+=this.value;
            }
        }
    }
    
}