const text = document.querySelector(".sec-text");

            const textLoad = () =>{
                setTimeout(()=>{
                    text.textContent = "Front-end"

                }, 0);
                setTimeout(()=>{
                    text.textContent = "Back-end"

                }, 4000);
                setTimeout(()=>{
                    text.textContent = "FullStack"

                }, 8000);

            }
            textLoad();
            setInterval(textLoad, 12000)