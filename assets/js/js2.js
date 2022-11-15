/*form validation*/




function namecheck()
{
    let name=document.getElementById("name").value
    let nm=null
     nm = name.trim()
    document.getElementById("name").value = nm;
    if(nm==""||name==null)
    {
        document.getElementById("nmlabel").style.display="block"
        return false
    }
    else if(!isNaN(nm[0]))
    {
        document.getElementById("nmlabel").style.display="none"
        document.getElementById("nmlabel-01").style.display="block"
        return false
    }
    else{
        document.getElementById("nmlabel").style.display="none" 
        document.getElementById("nmlabel-01").style.display="none" 
        
        return true

    }
}


function emailcheck()
{
    var val=document.getElementById("email").value
    var v=null
     v = val.trim()
    document.getElementById("email").value = v;
    if(v==""||val==null)
    {
        document.getElementById("el").style.display="block"
        return false
    }
    
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
  {
    document.getElementById("el-02").style.display="block"
    return false
  }

    else{
        document.getElementById("el").style.display="none" 
        document.getElementById("el-02").style.display="none" 
        return true

    }
}

function msgcheck()
    {
    
        var val=document.getElementById("msg").value
        var v=null
         v = val.trim()
        document.getElementById("msg").value = v;
        var n=v.length
        console.log(n)
        if(v==""||val==null)
        {
            document.getElementById("ml").style.display="block"
            return false
        }
        else{
            document.getElementById("ml").style.display="none"   
            return true
    
        }
    }
  

function subjectcheck()
{
    let name=document.getElementById("subject").value
    let nm=null
     nm = name.trim()

    document.getElementById("subject").value = nm;
    if(nm==""||name==null)
    {
        document.getElementById("sub").style.display="block"
        return false
    }
    else{
        document.getElementById("sub").style.display="none" 
        
        return true

    }
}
