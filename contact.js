let form = document.querySelector("#form1")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // input
    let input = document.querySelectorAll('input')
    let value;
    let isvalid=0;

    input.forEach((input1,i) => {
        let arr = ["Name", "Email", "Subject"]
        value = input1.value;


        if (input1.nextElementSibling?.tagName === 'P') {
            input1.nextElementSibling.remove();
        }
        if (value.length === 0) {
            input1.style.border = "2px solid red";
            let p = document.createElement('p')
            p.style.color = 'red';
            p.style.margin = '5px 0px'
            p.textContent = `Plase Enter Your ${arr[i]}`

            input1.insertAdjacentElement('afterend', p);


        } else {
            input1.style.border = "2px solid green"
            console.log(value);
            if (input1.nextElementSibling?.tagName === 'P') {
                input1.nextElementSibling.remove();
            }

            ++isvalid;
        }
    });

    
    let area = document.querySelector('textarea')
    let Value2 = area.value
    
    if(area.nextElementSibling?.tagName === 'P'){
        area.nextElementSibling.remove();
    }
    if(Value2.length === 0)
    {
        area.style.border='2px solid red'

        let p2 = document.createElement('p')
        p2.innerText="Plase Enter Message"
        p2.style.color="red"
        p2.style.margin="5px 0px"
        area.insertAdjacentElement('afterend',p2)
        // isvalid--;
    }
    else{
        area.style.border='2px solid green'
        isvalid++;
        if(area.nextElementSibling?.tagName === "P")
        {
            area.nextElementSibling.remove();
        }
    }

    if(isvalid === 4)
    {
        let h3 = document.createElement('h4')
        h3.innerText="Our Server is Not responding Plase Try Again Later"
        h3.style.color="#721c24"
        h3.style.backgroundColor="#f8d7da"
        h3.style.border="2px solid #f5c6cb"
        h3.style.margin="15px auto";
        h3.style.borderRadius="30px";
        h3.style.padding="20px 30px"
        h3.style.textAlign='center'
        h3.style.width="max-content"

        form.insertAdjacentElement("afterbegin",h3)

        input[0].value="";
        input[1].value="";
        input[2].value="";
        area.value="";
    }else{
        form.removeChild(form.children[0]);
    }

    console.log(isvalid);
})
