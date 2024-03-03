
export function displaydescription(data){

    if(typeof(data.value) == 'string'){
        alert(data.value);
    }else{
        alert(data);
    }

}