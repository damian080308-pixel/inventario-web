const API_URL =
    "https://script.google.com/macros/s/AKfycbz478Hmfl0suEV6ozgmZfm6k6ptatQsPL4eaxkpnpP1me98ZQyIeIPrnwRUgI7n8wPx/exec";

async function probar(){

    try{

        const r =
            await fetch(
                API_URL,
                {
                    method:"POST",

                    headers:{
                        "Content-Type":
                            "application/json"
                    },

                    body:JSON.stringify({

                        action:
                            "getData",

                        payload:{}

                    })

                }
            );

        const data =
            await r.json();

        console.log(data);

        document
            .getElementById(
                "out"
            )
            .textContent =
                JSON.stringify(
                    data,
                    null,
                    2
                );

    }catch(error){

        console.error(
            error
        );

    }

}
